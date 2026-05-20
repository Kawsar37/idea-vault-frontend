import IdeaCard from "./IdeaCard";
import { Marquee } from "./ui/marquee";

export function IdeasMarquee({ ideas }) {
  if (!ideas || ideas.length === 0) return null;

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-700 dark:text-white">
          Explore Recent Ideas
        </h1>
      </div>

      <Marquee pauseOnHover className="[--duration:30s] gap-4">
        {ideas.map((idea) => (
          <div key={idea._id} className="shrink-0 mx-2">
            <IdeaCard idea={idea} icon={false} />
          </div>
        ))}
      </Marquee>

      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l"></div>
    </div>
  );
}
