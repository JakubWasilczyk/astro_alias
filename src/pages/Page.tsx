import AppMenu from '../components/AppMenu.js';
import Section1 from '../components/Section1.js';
import Section2 from '../components/Section2.js';
import { HiArrowRight } from "react-icons/hi";
import create from 'zustand';
import { useEffect, useState } from 'react';

interface ScrollPosState {
    scrollPosition: string
    setValue: (val: string) => void
}
const useScrollPos = create<ScrollPosState>((set) => ({
    scrollPosition: "start",
    setValue: (val) => set(( state ) => ({ scrollPosition: val })),
  }));


const Page: React.FC = () => {
	return (
        <main className="grid grid-flow-col overscroll-none scroll-smooth overflow-auto snap-x snap-mandatory">
            <AppMenu />
            <Section1/>
            <Section2/>
        </main>
	);
};
export default Page;
