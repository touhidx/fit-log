import { Exercise } from "@/types/workouts.type";
import WorkCard from "./workCard";

const getWorkouts = async (): Promise<Exercise[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
};

const Workouts = async () => {
  const workoutsData = await getWorkouts();

  return <WorkCard workoutsData={workoutsData} />;
};

export default Workouts;
