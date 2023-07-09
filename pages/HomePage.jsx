import React from "react";
import Features from "@/components/home/features";
import DisplayFooter from "@/components/home/footer";
import HeaderSection from "@/components/home/header";
import Process from "@/components/home/process";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import Workers from "@/components/home/workers";
import Partner from "@/components/home/workers/Partner";

const HomePage = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <main>
      <HeaderSection navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <Services />
      <Features />
      <Process />
      <Workers />
      <Partner />
      <Testimonials />
      <DisplayFooter />
    </main>
  );
};

export default HomePage;
