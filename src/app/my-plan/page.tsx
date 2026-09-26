"use client";

import React, { useContext, useState } from "react";
import { WorkContext } from "../components/contexts/workoutContext";
import MyPlanCard from "./MyPlanCard";
import Link from "next/link";

type Tab = "today" | "saved";
type SortKey = "duration" | "calories" | "rating";

const MyPlan = () => {
  const context = useContext(WorkContext);
  const [activeTab, setActiveTab] = useState<Tab>("today");
  const [sortBy, setSortBy] = useState<SortKey>("duration");

  if (!context) return null; // provider not mounted yet
  const { addPlan, addSave } = context;

  const list = activeTab === "today" ? addPlan : addSave;

  const sortedList = [...list].sort((a, b) => {
    if (sortBy === "duration") return b.duration - a.duration;
    if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
    if (sortBy === "rating") return b.rating - a.rating;
  });

  const totalMinutes = addPlan.reduce((sum, w) => sum + w.duration, 0);
  const totalCalories = addPlan.reduce((sum, w) => sum + w.caloriesBurned, 0);

  return (
    <section className="bg-black min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
          My Plan
        </h1>
        <p className="text-[#9CA3AF] text-sm mt-1">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 bg-[#111] rounded-xl mt-6 p-6 sm:divide-x sm:divide-white/10">
          <div className="sm:px-6 first:pl-0">
            <p className="text-[#9CA3AF] text-xs uppercase tracking-wide">
              Exercises
            </p>
            <h2 className="text-[#C2F800] font-extrabold text-3xl sm:text-4xl mt-1">
              {addPlan.length}
            </h2>
          </div>
          <div className="sm:px-6">
            <p className="text-[#9CA3AF] text-xs uppercase tracking-wide">
              Minutes
            </p>
            <h2 className="text-white font-extrabold text-3xl sm:text-4xl mt-1">
              {totalMinutes}
            </h2>
          </div>
          <div className="sm:px-6">
            <p className="text-[#9CA3AF] text-xs uppercase tracking-wide">
              Calories
            </p>
            <h2 className="text-white font-extrabold text-3xl sm:text-4xl mt-1">
              {totalCalories}
            </h2>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-6">
          <div className="inline-flex bg-[#151921] rounded-full p-1 w-fit">
            <button
              onClick={() => setActiveTab("today")}
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-colors ${
                activeTab === "today"
                  ? "bg-[#2B303D] text-white"
                  : "text-[#9CA3AF] bg-[#151921]"
              }`}
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-colors ${
                activeTab === "saved"
                  ? "bg-[#2B303D] text-white"
                  : "text-[#9CA3AF] bg-[#151921]"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className="text-[#9CA3AF]">Sort By</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="bg-[#111] text-white border border-white/10 rounded-lg px-3 py-1.5 outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="bg-[#111] rounded-xl mt-4 p-4 sm:p-6">
          {sortedList.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-16">
              <h3 className="text-white font-bold uppercase tracking-wide">
                NOTHING HERE YET
              </h3>
              <p className="text-[#9CA3AF] text-sm mt-1 max-w-sm">
                Browse the library and add a lift to get today moving.
              </p>
              <Link
                href="/"
                className="mt-5 bg-[#C2F800] text-black text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#aee000] transition-colors"
              >
                Go to workouts
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {sortedList.map((workout) => (
                <MyPlanCard
                  key={workout.id}
                  workout={workout}
                  showMarkDone={activeTab === "today"}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyPlan;
