import { Exercise } from "@/types/workouts.type";
import Image from "next/image";
import { notFound } from "next/navigation";
import WorkoutActions from "../workOutAction";

const getWorkouts = async (): Promise<Exercise[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
};

const WorkoutDetailsPage = async ({
  params,
}: {
  params: Promise<{ workoutId: number }>;
}) => {
  const { workoutId } = await params;
  const workouts = await getWorkouts();
  const workout = workouts.find((w) => String(w.id) === String(workoutId));

  if (!workout) return notFound();

  const specs = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: workout.rating },
  ];

  return (
    <section className="bg-black min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative w-full aspect-4/3 lg:aspect-auto lg:h-full rounded-xl overflow-hidden">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
              {workout.name}
            </h1>
            <p className="text-[#9CA3AF] text-sm sm:text-base mt-2 max-w-xl">
              {workout.description}
            </p>

            <div className="flex gap-2 mt-4">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="bg-[#C2F800] text-black text-xs font-bold uppercase px-3 py-1 rounded-full"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="mt-6 border border-white/10 rounded-lg divide-y divide-white/10 overflow-hidden">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between px-4 py-3 bg-[#15171D] "
                >
                  <span className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-wide">
                    {spec.label}
                  </span>
                  <span className="text-white text-sm font-medium">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h2 className="text-white font-bold uppercase text-sm tracking-wide">
                Instructions
              </h2>
              <ol className="mt-3 space-y-2">
                {workout.instructions.map((step, i) => (
                  <li key={i} className="flex gap-3 text-[#9CA3AF] text-sm">
                    <span className="text-[#6B7280] shrink-0">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <WorkoutActions workout={workout} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetailsPage;
