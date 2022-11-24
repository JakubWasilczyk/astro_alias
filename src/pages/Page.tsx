import { useEffect } from "react";
import create from "zustand";

import AppMenu from "../components/AppMenu.js";
import Section1 from "../components/Section1.js";
import Section2 from "../components/Section2.js";
import Section3 from "../components/Section3.js";
import Section4 from "../components/Section4.js";

interface ScrollPosState {
  scrollPosition: string;
  setValue: (val: string) => void;
}
const useScrollPos = create<ScrollPosState>((set) => ({
  scrollPosition: "start",
  setValue: (val) => set((state) => ({ scrollPosition: val })),
}));

const Page: React.FC = () => {
  return (
    <main className="grid grid-flow-col overflow-auto snap-x snap-mandatory">
      <AppMenu />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  );
};
export default Page;
