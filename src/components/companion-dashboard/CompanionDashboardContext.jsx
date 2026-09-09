import React, { createContext, useContext, useState } from 'react';
import { demoCompanion } from '../../data/companionDashboardData';

const CompanionDashboardContext = createContext(null);

export function CompanionDashboardProvider({ children }) {
  const [isAvailable, setIsAvailable] = useState(demoCompanion.isAvailableToday);

  return (
    <CompanionDashboardContext.Provider value={{ isAvailable, setIsAvailable }}>
      {children}
    </CompanionDashboardContext.Provider>
  );
}

export function useCompanionDashboard() {
  const ctx = useContext(CompanionDashboardContext);
  if (!ctx) {
    throw new Error('useCompanionDashboard must be used within CompanionDashboardProvider');
  }
  return ctx;
}
