import Head from "next/head";
import React from "react";

type Props = {
  children: React.ReactNode;
};
export const HeaderLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover"></meta>
      </Head>
      <div className="flex flex-col items-stretch gap-2 flex-1">{children}</div>
    </>
  );
};
