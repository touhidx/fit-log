"use client";

import { Exercise } from "@/types/workouts.type";
import { Check, Clock, Flame, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { WorkContext } from "../components/contexts/workoutContext";
import { toast } from "react-toastify";

interface MyPlanCardProps {
  workout: Exercise;
  showMarkDone: boolean;
}

const MyPlanCard = ({ workout, showMarkDone }: MyPlanCardProps) => {
  const { addPlan, setAddPlan } = useContext(WorkContext);
  const handleRemove = (id: number) => {
    setAddPlan(addPlan.filter((item: Exercise) => item.id !== id));
    toast.error("Already saved for later", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
    });
  };

  const handleMarkDone = (id: number) => {
    setAddPlan(addPlan.filter((item: Exercise) => item.id !== id));
    toast.error("Already saved for later", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
    });
  };
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-[#151515] rounded-xl ">
      <div className="relative w-full sm:w-36 h-32 sm:h-24 rounded-lg overflow-hidden shrink-0">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="64px"
          className="object-cover "
        />
      </div>

      <div className="flex-1 min-w-0 p-1">
        <h3 className="text-white font-bold uppercase text-sm truncate">
          {workout.name}
        </h3>
        <p className="text-[#9CA3AF] text-xs mt-1">{workout.equipment}</p>
        <div className="flex items-center gap-4 text-[#9CA3AF] text-xs shrink-0 t-3 mt-2">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-[#C2F800]" />
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame className="h-3.5 w-3.5 text-[#C2F800]" />
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5  text-[#C2F800]" />
            {workout.rating}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {showMarkDone ? (
          <>
            <Link
              href={`/workouts/${workout.id}`}
              className="border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:border-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2F800] transition-colors whitespace-nowrap"
            >
              View Details
            </Link>

            <div className="w-29.5 flex justify-center">
              <button
                onClick={() => handleMarkDone(workout.id)}
                className="flex items-center gap-1 bg-[#C2F800] text-black text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-[#aee000] focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors whitespace-nowrap"
              >
                <Check className="h-3.5 w-3.5" />
                Mark as Done
              </button>
            </div>

            <button
              onClick={() => handleRemove(workout.id)}
              aria-label="Remove"
              className="text-[#6B7280] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-full p-1.5"
            >
              <X className="h-4 w-4 mr-3" />
            </button>
          </>
        ) : (
          <>
            <Link
              href={`/workouts/${workout.id}`}
              className="border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:border-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2F800] transition-colors whitespace-nowrap"
            >
              View Details
            </Link>

            <button
              onClick={() => handleRemove(workout.id)}
              aria-label="Remove"
              className="text-[#6B7280] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-full p-1.5"
            >
              <X className="h-4 w-4 mr-3" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MyPlanCard;
