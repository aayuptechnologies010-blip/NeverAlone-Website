import { 
  db, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  collection, 
  getDocs, 
  serverTimestamp 
} from '../firebase';

/**
 * Creates or updates a user profile document in Firestore `users` collection upon login/signup
 */
export async function syncUserProfile(user, additionalData = {}) {
  if (!user || !user.uid) return null;
  
  const userRef = doc(db, 'users', user.uid);
  try {
    const snap = await getDoc(userRef);
    const now = new Date();
    const joinedFormatted = now.toLocaleString('default', { month: 'short', year: 'numeric' });

    if (!snap.exists()) {
      // New user record
      const initialProfile = {
        uid: user.uid,
        name: additionalData.name || user.displayName || (user.email ? user.email.split('@')[0] : 'Member'),
        email: user.email || '',
        phone: additionalData.phone || user.phoneNumber || '',
        photoURL: user.photoURL || '',
        plan: additionalData.plan || 'Free Trial',
        status: 'Active',
        role: 'customer',
        memberSince: joinedFormatted,
        anonymousMode: true,
        callNotifications: true,
        conversationsCount: 0,
        createdAt: serverTimestamp(),
        lastLoginAt: serverTimestamp(),
        ...additionalData
      };
      await setDoc(userRef, initialProfile);
      return initialProfile;
    } else {
      // Existing user: update last login and merge any new fields if present
      const updates = {
        lastLoginAt: serverTimestamp(),
        ...(additionalData.name ? { name: additionalData.name } : {}),
        ...(user.photoURL && !snap.data().photoURL ? { photoURL: user.photoURL } : {})
      };
      await updateDoc(userRef, updates);
      return { ...snap.data(), ...updates };
    }
  } catch (error) {
    console.error("Error syncing user profile with Firestore:", error);
    return null;
  }
}

/**
 * Fetch a single user profile from Firestore by UID
 */
export async function getUserProfile(uid) {
  if (!uid) return null;
  try {
    const userRef = doc(db, 'users', uid);
    const snap = await getDoc(userRef);
    if (snap.exists()) {
      return snap.data();
    }
    return null;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}

/**
 * Update user profile in Firestore
 */
export async function updateUserProfile(uid, data) {
  if (!uid) return false;
  try {
    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, {
      ...data,
      updatedAt: serverTimestamp()
    }, { merge: true });
    return true;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
}

/**
 * Fetch all registered users for Admin panel
 */
export async function getAllUsersForAdmin() {
  try {
    const usersCol = collection(db, 'users');
    const snapshot = await getDocs(usersCol);
    const usersList = [];
    snapshot.forEach(docSnap => {
      const data = docSnap.data();
      usersList.push({
        id: docSnap.id,
        name: data.name || 'Member',
        contact: data.email || data.phone || 'N/A',
        phone: data.phone || 'N/A',
        email: data.email || 'N/A',
        plan: data.plan || 'Standard',
        joined: data.memberSince || 'Recently',
        conversations: data.conversationsCount || 0,
        status: data.status || 'Active',
        role: data.role || 'customer',
        createdAt: data.createdAt,
        lastLoginAt: data.lastLoginAt
      });
    });
    return usersList;
  } catch (error) {
    console.error("Error loading admin users from Firestore:", error);
    return [];
  }
}
