import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Page not found - travis.engineering",
  };
}

export default async function NotFound() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4 p-4 ">
      <h1>Oops!</h1>
      <h4 className="text-center font-normal">
        I am sorry, but whatever you are looking for is not here.
      </h4>
      <Link href="/">
        <button className="bg-primary h-12 md:h-16 rounded-lg text-white px-4">
          Back to main page
        </button>
      </Link>
    </div>
  );
}
