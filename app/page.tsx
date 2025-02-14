import Posts from "./components/Posts";

export default function Home() {
  return (
    <div className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and welcome 👋 &nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Updalla</span>
        </span>
      </p>
      <Posts />
    </div>
  );
}
