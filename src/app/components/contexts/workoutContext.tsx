"use client";

import { Exercise } from "@/types/workouts.type";
import React, { createContext, ReactNode, useState } from "react";

interface WorkContextType {
  addPlan: Exercise[];
  setAddPlan: React.Dispatch<React.SetStateAction<Exercise[]>>;
  addSave: Exercise[];
  setAddSave: React.Dispatch<React.SetStateAction<Exercise[]>>;
}

export const WorkContext = createContext<WorkContextType | undefined>(
  undefined,
);

const WorkProvider = ({ children }: { children: ReactNode }) => {
  const [addPlan, setAddPlan] = useState<Exercise[]>([]);
  const [addSave, setAddSave] = useState<Exercise[]>([]);

  const sharedData: WorkContextType = {
    addPlan,
    setAddPlan,
    addSave,
    setAddSave,
  };

  return (
    <WorkContext.Provider value={sharedData}>{children}</WorkContext.Provider>
  );
};

export default WorkProvider;
