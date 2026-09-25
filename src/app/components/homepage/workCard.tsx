import Image from "next/image";
import React from "react";

import { Exercise } from "@/types/workouts.type";
import { Clock, Flame, Star } from "lucide-react";
import Link from "next/link";
interface Iprops {
  workoutsData: Exercise[];
}

const WorkCard = ({ workoutsData }: Iprops) => {
  return (
    <Link href="/">
      <section className=" py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
            The Library
          </h1>
          <p className="text-sm text-[#9CA3AF] mt-1">
            Twelve lifts covering every major muscle group.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {workoutsData.slice(0, 12).map((workout: Exercise) => (
              <div
                key={workout.id}
                className="bg-[#151515] border border-white/5 rounded-xl overflow-hidden"
              >
                <div className="relative w-full aspect-4/2 ">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <div className=" flex gap-2 my-2">
                    {workout.muscleGroups.map((muscle) => (
                      <span
                        key={muscle}
                        className="bg-[#C2F800] text-black text-[10px] font-bold uppercase px-2 py-0.5 rounded-full"
                      >
                        {muscle}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-bold uppercase text-base">
                    {workout.name}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm mt-0.5">
                    {workout.equipment}
                  </p>

                  <div className="border-t border-white/10 mt-3 pt-3 flex items-center gap-4 text-[#9CA3AF] text-xs">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Link>
  );
};

export default WorkCard;
