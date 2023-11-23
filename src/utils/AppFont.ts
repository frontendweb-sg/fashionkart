import { Roboto, Lato, Raleway } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  preload: true,
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: true,
});

export { lato, raleway, roboto };
