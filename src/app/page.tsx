export default function Page() {
  return (
    <div className="mx-auto container flex items-center justify-center flex-col gap-10 px-8 py-12 min-h-dvh">
      <span className="text-6xl xl:text-7xl">👷🏻‍♂️</span>

      <h1 className="text-4xl max-w-[25rem] xl:max-w-[50rem] xl:text-6xl text-center">
        This website is currently under construction!
      </h1>

      <p className="text-xl text-center">
        Meanwhile, check out
        <br />
        <a
          className="text-lg xl:text-xl text-blue-400 hover:text-blue-500"
          href="https://www.linkedin.com/in/alessiosferro/"
        >
          my LinkedIn profile
        </a>{" "}
        👨🏻‍💻
      </p>
    </div>
  );
}

export const metadata = {
  title: "Alessio Sferro - Home",
  description:
    "Alessio Sferro's personal website, where you can find his personal projects and a blog dedicated to web development.",
};
