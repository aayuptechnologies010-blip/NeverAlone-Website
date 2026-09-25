import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

import ModuleListening from './modules/ModuleListening';
import ModuleConversation from './modules/ModuleConversation';
import ModuleAdvice from './modules/ModuleAdvice';
import ModuleRelationship from './modules/ModuleRelationship';
import ModuleSafety from './modules/ModuleSafety';
import ModuleFlirty from './modules/ModuleFlirty';

const moduleMap = {
  'listening': ModuleListening,
  'natural-conversation': ModuleConversation,
  'advice-boundaries': ModuleAdvice,
  'relationship': ModuleRelationship,
  'safety': ModuleSafety,
  'flirty-mode': ModuleFlirty,
};

export default function TrainingModulePage() {
  const { moduleId } = useParams();
  const ModuleComponent = moduleMap[moduleId];

  if (!ModuleComponent) {
    return <Navigate to="/companion/training" replace />;
  }

  return <ModuleComponent />;
}
