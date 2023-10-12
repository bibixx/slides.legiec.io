import { TooltipProvider } from "@/components/ui/tooltip";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TooltipProvider>
      <Component {...pageProps} />
    </TooltipProvider>
  );
}
