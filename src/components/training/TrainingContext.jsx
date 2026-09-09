import React, { createContext, useContext, useState } from 'react';

const TrainingContext = createContext(null);

const defaultModuleState = {
  'listening': { status: 'not-started', answers: {} },
  'natural-conversation': { status: 'not-started', answers: {} },
  'advice-boundaries': { status: 'not-started', answers: {} },
  'relationship': { status: 'not-started', answers: {} },
  'safety': { status: 'not-started', answers: {} },
  'flirty-mode': { status: 'not-started', answers: {} },
};

export function TrainingProvider({ children }) {
  const [modules, setModules] = useState(defaultModuleState);
  // Demo: assume flirty mode was selected during application
  const [flirtyModeRequired, setFlirtyModeRequired] = useState(true);

  const getModuleStatus = (moduleId) => modules[moduleId]?.status || 'not-started';

  const setModuleStatus = (moduleId, status) => {
    setModules(prev => ({
      ...prev,
      [moduleId]: { ...prev[moduleId], status }
    }));
  };

  const saveAnswer = (moduleId, questionId, answer) => {
    setModules(prev => ({
      ...prev,
      [moduleId]: {
        ...prev[moduleId],
        answers: { ...prev[moduleId].answers, [questionId]: answer }
      }
    }));
  };

  const getAnswer = (moduleId, questionId) => modules[moduleId]?.answers?.[questionId];

  const completedCount = Object.entries(modules).filter(
    ([id, m]) => m.status === 'completed' && (id !== 'flirty-mode' || flirtyModeRequired)
  ).length;

  const requiredCount = flirtyModeRequired ? 6 : 5;

  const allRequiredComplete = Object.entries(modules).every(([id, m]) => {
    if (id === 'flirty-mode' && !flirtyModeRequired) return true;
    return m.status === 'completed';
  });

  const [trainingComplete, setTrainingComplete] = useState(false);

  return (
    <TrainingContext.Provider value={{
      modules,
      flirtyModeRequired,
      setFlirtyModeRequired,
      getModuleStatus,
      setModuleStatus,
      saveAnswer,
      getAnswer,
      completedCount,
      requiredCount,
      allRequiredComplete,
      trainingComplete,
      setTrainingComplete,
    }}>
      {children}
    </TrainingContext.Provider>
  );
}

export function useTraining() {
  const ctx = useContext(TrainingContext);
  if (!ctx) throw new Error('useTraining must be used within TrainingProvider');
  return ctx;
}
