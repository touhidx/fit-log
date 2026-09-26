"use client";

import { Exercise } from "@/types/workouts.type";
import { CalendarPlus, Bookmark } from "lucide-react";
import { useContext, useRef } from "react";
import { toast } from "react-toastify";
import { WorkContext } from "../components/contexts/workoutContext";

const WorkoutActions = ({ workout }: { workout: Exercise }) => {
  const { addPlan, setAddPlan, addSave, setAddSave } = useContext(WorkContext);

  const isAddingPlan = useRef(false);
  const isAddingSave = useRef(false);

  const handleAddToPlan = () => {
    if (isAddingPlan.current) return;
    isAddingPlan.current = true;

    const isAlreadyAdded = addPlan.some(
      (item: Exercise) => item.id === workout.id,
    );

    if (isAlreadyAdded) {
      toast.error("Already added to today's plan", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
    } else {
      setAddPlan([...addPlan, workout]);

      toast.success("added to today's plan", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
    }

    setTimeout(() => {
      isAddingPlan.current = false;
    }, 300);
  };

  const handleSaveForLater = () => {
    if (isAddingSave.current) return;
    isAddingSave.current = true;

    const isAlreadySaved = addSave.some(
      (item: Exercise) => item.id === workout.id,
    );

    if (isAlreadySaved) {
      toast.error("Already saved for later", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
    } else {
      setAddSave([...addSave, workout]);

      toast.success("Saved for later", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
    }

    setTimeout(() => {
      isAddingSave.current = false;
    }, 300);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-6">
      <button
        onClick={handleAddToPlan}
        className="flex items-center justify-center gap-2 bg-[#C2F800] text-black text-sm font-bold px-5 py-3 rounded-full hover:bg-[#aee000] transition-colors"
      >
        <CalendarPlus className="h-4 w-4" />
        Add to today&apos;s plan
      </button>

      <button
        onClick={handleSaveForLater}
        className="flex items-center justify-center gap-2 border border-white/20 text-white text-sm font-bold px-5 py-3 rounded-full hover:border-white/40 transition-colors"
      >
        <Bookmark className="h-4 w-4" />
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;
