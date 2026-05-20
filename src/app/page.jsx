export const dynamic = "force-dynamic";
import IdeaCard from "@/components/IdeaCard";
import { IdeasMarquee } from "@/components/IdeaMarquee";
import ImageHover from "@/components/ImageHover";
import HeroSlider from "@/components/SliderHomePage";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/home-ideas`);
  const ideas = await res.json();

  return (
    <div>
      <HeroSlider />

      <section>
        <h1 className="text-3xl font-semibold text-gray-700 text-center my-6">
          Trending Ideas
        </h1>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-[90%] mx-auto">
          {ideas.map((idea) => (
            <IdeaCard idea={idea} key={idea._id} />
          ))}
        </div>
      </section>

      <section className="max-w-[90%] mx-auto mt-10">
        <h1 className="text-gray-700 text-3xl font-semibold text-center mb-10">
          Idea Evolution
        </h1>
        <div className="flex items-center lg:flex-row flex-col gap-8">
          <div className="">
            <ImageHover />
          </div>

          <div className="text-xl text-wrap ml-0 lg:ml-10">
            <p>
              Inspiration strikes when you least expect it. Whether it is a
              midnight epiphany or a breakthrough during a meeting, instantly
              dump your raw thoughts into IdeaVault before they fade away. Never
              lose a brilliant concept to forgetfulness again.
            </p>
            <br />
            <p>
              Raw ideas need structure. Filter your thoughts into dedicated,
              custom-tailored virtual vaults. Tag them by project, priority, or
              medium, and rest easy knowing your intellectual property is safely
              locked away in your private repository.
            </p>
            <br />
            <p>
              A stored idea is just the beginning. Return to your vault whenever
              you are ready to build, iterate, and expand. Review old concepts
              with fresh eyes and seamlessly transform your archived thoughts
              into real-world execution.
            </p>
          </div>
        </div>

        <IdeasMarquee ideas={ideas} />
      </section>
    </div>
  );
}
