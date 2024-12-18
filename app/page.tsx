"use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
});
const Resource = dynamic(() => import("@/components/Resource"), { ssr: false });
const Education = dynamic(() => import("@/components/Education"), {
  ssr: false,
});
const FloatingNav = dynamic(() => import("@/components/ui/FloatingNavbar"), {
  ssr: false,
});

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Resource />
        <Education />
        <Footer />
      </div>
    </main>
  );
};

export default Home;