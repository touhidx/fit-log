"use client";

import { Exercise } from "@/types/workouts.type";
import { CalendarPlus, Bookmark } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import { Bounce, toast } from "react-toastify";
import { WorkContext } from "../components/contexts/workoutContext";

const WorkoutActions = ({ workout }: { workout: Exercise }) => {
  const { addPlan, setAddPlan, addSave, setAddSave } = useContext(WorkContext);

  const handleAddToPlan = () => {
    const isAlreadyAdded = addPlan.some((item) => item.id === workout.id);

    if (isAlreadyAdded) {
      setAddPlan(addPlan.filter((item) => item.id !== workout.id));

      toast.info("Removed from today's plan", {
        position: "bottom-right",
        autoClose: 1000,
        theme: "light",
      });
    } else {
      setAddPlan([...addPlan, workout]);

      toast.success("Added to today's plan", {
        position: "bottom-right",
        autoClose: 1000,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const handleSaveForLater = () => {
    const isAlreadySaved = addSave.some((item) => item.id === workout.id);

    if (isAlreadySaved) {
      setAddSave(addSave.filter((item) => item.id !== workout.id));

      toast.info("Removed from saved workouts", {
        position: "bottom-right",
        autoClose: 1000,
        theme: "light",
      });
    } else {
      setAddSave([...addSave, workout]);

      toast.success("Saved for later", {
        position: "bottom-right",
        autoClose: 1000,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-6">
      <Link href="/my-plan">
        <button
          onClick={handleAddToPlan}
          className="flex items-center justify-center gap-2 bg-[#C2F800] text-black text-sm font-bold px-5 py-3 rounded-full hover:bg-[#aee000] transition-colors"
        >
          <CalendarPlus className="h-4 w-4" />
          Add to today's plan
        </button>
      </Link>

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
