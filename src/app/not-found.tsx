import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export async function generateMetadata() {
  return {
    title: "Page not found - travis.engineering",
  };
}

export default async function NotFound() {
  return (
    <div className="content flex flex-col flex-1 justify-center items-center gap-4 p-4  h-[calc(100vh-10rem)]">
      <h1>Oops!</h1>
      <h4 className="text-center font-normal">
        I am sorry, but whatever you are looking for is not here.
      </h4>
      <Link href="/">
        <button className="text-primary h-12 md:h-16 px-4 hover:underline hover:text-primary-dark flex items-center gap-2">
          Back to main page <FaArrowRight className="text-primary" />
        </button>
      </Link>
    </div>
  );
}
