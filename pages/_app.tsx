import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import NavigationMenu from "@/components/Navbar";
import { Finlandica } from "next/font/google";

const finlandica = Finlandica({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${finlandica.style.fontFamily};
        }
      `}</style>
      <NavigationMenu pathname={pathname} />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          key={pathname}
          initial={{ opacity: 0.2, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0.2, x: 30 }}
          transition={{ type: "linear", ease: "easeOut", duration: 0.5 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
