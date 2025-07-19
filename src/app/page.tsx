export default function Page() {
  return (
    <div className="container font-sans flex items-center flex-col gap-12 xl:min-h-dvh mt-80 xl:mt-0 xl:items-center justify-center mx-auto">
      <span className="text-6xl xl:text-7xl">👷🏻‍♂️</span>

      <h1 className="text-4xl xl:max-w-200 xl:text-6xl text-center">
        This website is currently under construction
      </h1>

      <p className="text-xl">
        Meanwhile, check out my{" "}
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
