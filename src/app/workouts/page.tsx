import { Exercise } from "@/types/workouts.type";
import WorkCard from "../components/homepage/workCard";

const getWorkouts = async (): Promise<Exercise[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return [];
  }

  const data = await res.json();
  return data;
};

const Workouts = async () => {
  const workoutsData = await getWorkouts();

  return <WorkCard workoutsData={workoutsData} />;
};

export default Workouts;
