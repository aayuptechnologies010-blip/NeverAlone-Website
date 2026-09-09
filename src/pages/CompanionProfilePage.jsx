import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { companions } from '../data/companionsData';

import ProfileHero from '../components/profile/ProfileHero';
import ProfileAbout from '../components/profile/ProfileAbout';
import ProfileTopics from '../components/profile/ProfileTopics';
import ProfileStyle from '../components/profile/ProfileStyle';
import ProfileLanguages from '../components/profile/ProfileLanguages';
import ProfileAvailability from '../components/profile/ProfileAvailability';
import ProfileCallInfo from '../components/profile/ProfileCallInfo';
import ProfileSafety from '../components/profile/ProfileSafety';
import ProfileFeedback from '../components/profile/ProfileFeedback';
import ProfileSimilar from '../components/profile/ProfileSimilar';
import ProfileStickyCTA from '../components/profile/ProfileStickyCTA';

const CompanionProfilePage = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const companion = companions.find(c => c.id === id);

  if (!companion) {
    return <Navigate to="/companions" replace />;
  }

  return (
    <div className="bg-brand-950 text-white min-h-screen pb-20 md:pb-0">
      <ProfileHero companion={companion} />
      <ProfileAbout companion={companion} />
      
      <div className="flex flex-col md:flex-row bg-brand-950">
        <div className="w-full md:w-1/2">
          <ProfileTopics companion={companion} />
        </div>
        <div className="w-full md:w-1/2">
          <ProfileStyle companion={companion} />
        </div>
      </div>
      
      <ProfileLanguages companion={companion} />
      <ProfileAvailability />
      <ProfileCallInfo />
      <ProfileSafety />
      <ProfileFeedback />
      <ProfileSimilar currentCompanionId={companion.id} />
      
      <ProfileStickyCTA companion={companion} />
    </div>
  );
};

export default CompanionProfilePage;
