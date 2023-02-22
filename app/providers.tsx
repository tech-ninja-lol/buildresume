"use client";

import { useServerInsertedHTML } from "next/navigation";
// import { CssBaseline, NextUIProvider } from "@nextui-org/react";
import { PropsWithChildren } from "react";
import ReduxProvider from "./reduxProvider";

type P = PropsWithChildren;

export default function Providers({ children }: P) {
  // useServerInsertedHTML(() => {
  //   return <>{CssBaseline.flush()}</>
  // });

  return ( // you can have multiple client side providers wrapped, in this case I am also using NextUIProvider
    <>
      <ReduxProvider>
        {children}
      </ReduxProvider>
    </>
  );
}