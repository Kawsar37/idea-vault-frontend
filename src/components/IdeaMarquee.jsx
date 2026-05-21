import IdeaCard from "./IdeaCard";
import Marquee from "react-fast-marquee";

export function IdeasMarquee({ ideas }) {
  if (!ideas || ideas.length === 0) return null;

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-700 dark:text-white">
          Explore Recent Ideas
        </h1>
      </div>

      <Marquee
        gradient={true} // This turns on the fade effect
        gradientColor="#F5F5F5"
        pauseOnHover
        className="[--duration:30s] gap-4"
      >
        {ideas.map((idea) => (
          <div key={idea._id} className="shrink-0 mx-2">
            <IdeaCard idea={idea} icon={false} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
