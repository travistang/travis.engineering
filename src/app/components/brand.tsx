import Link from "next/link";
import SiteLogo from "./icon.svg";

type Props = {
  copyRight?: boolean;
};
export default function Brand({ copyRight }: Props) {
  return (
    <Link href="/" className="flex items-center gap-2 flex-nowrap">
      <div className="h-12 w-12 md:h-16 md:w-16 aspect-square overflow-hidden">
        <SiteLogo className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold text-slate dark:text-white-dark">
          travis.
          <span className="text-primary bg-transparent">engineering</span>
        </h1>
        {copyRight && (
          <span>
            &copy; {new Date().getFullYear()} travis.engineering. All rights
            reserved.
          </span>
        )}
      </div>
    </Link>
  );
}
