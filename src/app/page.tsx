import Image from "next/image";
import DodgeTheCreeps from "./dodge-the-creeps.png";

export default function Page() {
  return (
    <div className="mx-auto container gap-10 px-8 py-10 lg:py-30 min-h-dvh">
      <h1 className="tracking-tight text-3xl lg:text-5xl leading-12 lg:leading-16">
        <span className="text-5xl leading-16 lg:text-7xl lg:leading-20 tracking-tighter">
          Hello there 🙋‍♂️
          <br /> welcome to my website!
        </span>
        <span className="inline-block -mt-4">
          <br />I am <strong>Alessio Sferro</strong>,
          <br />
          experienced <strong className="text-indigo-500">
            developer
          </strong> and{" "}
          <strong className="text-indigo-500">problem solver</strong>.
        </span>
      </h1>

      <h2 className="lg:text-4xl text-2xl lg:leading-16 mt-8">
        My <strong>game dev</strong> projects
      </h2>

      <p className="text-xl mt-2">
        I have recently started a game development journey. I will post here the
        projects I create in Godot.
      </p>

      <div className="mt-8">
        <a
          className="w-80 opacity-80 focus:opacity-100 hover:opacity-100 flex-col inline-flex outline-none border-2 border-white focus:border-indigo-400 rounded-2xl text-2xl overflow-hidden"
          href="/dodge-the-creeps/index.html"
          title="Dodge the creeps!"
        >
          <Image
            src={DodgeTheCreeps}
            alt="Dodge the creeps"
            className="object-center object-cover h-40"
          />
        </a>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Alessio Sferro - Home",
  description:
    "Alessio Sferro's personal website, where you can find his personal projects and a blog dedicated to web development.",
};
