import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FC, PropsWithChildren } from "react";

import AppProvider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dungeons & Dragons Progressive Web App",
  description: "This is an app using D&D 5e API to create a PWA.",
};

const RootLayout: FC<Readonly<PropsWithChildren>> = ({
  children,
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}

export default RootLayout;
