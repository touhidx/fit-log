import { Exercise } from "@/types/workouts.type";
import { Check, Clock, Flame, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MyPlanCardProps {
  workout: Exercise;
  showMarkDone: boolean;
  onRemove: () => void;
  onMarkDone: () => void;
}

const MyPlanCard = ({
  workout,
  showMarkDone,
  onRemove,
  onMarkDone,
}: MyPlanCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-[#151515] rounded-xl p-3 sm:p-4">
      {/* Thumbnail */}
      <div className="relative w-full sm:w-16 h-32 sm:h-16 rounded-lg overflow-hidden shrink-0">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>

      {/* Title + equipment */}
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-bold uppercase text-sm truncate">
          {workout.name}
        </h3>
        <p className="text-[#9CA3AF] text-xs mt-0.5">{workout.equipment}</p>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 text-[#9CA3AF] text-xs shrink-0">
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {workout.duration} min
        </span>
        <span className="flex items-center gap-1">
          <Flame className="h-3.5 w-3.5" />
          {workout.caloriesBurned} kcal
        </span>
        <span className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-[#C2F800] text-[#C2F800]" />
          {workout.rating}
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 shrink-0">
        <Link
          href={`/workouts/${workout.id}`}
          className="border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:border-white/40 transition-colors whitespace-nowrap"
        >
          View Details
        </Link>

        {showMarkDone && (
          <button
            onClick={onMarkDone}
            className="flex items-center gap-1 bg-[#C2F800] text-black text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-[#aee000] transition-colors whitespace-nowrap"
          >
            <Check className="h-3.5 w-3.5" />
            Mark as Done
          </button>
        )}

        <button
          onClick={onRemove}
          aria-label="Remove"
          className="text-[#6B7280] hover:text-white p-1.5"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default MyPlanCard;
