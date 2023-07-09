"use client";
import React from "react";
import Features from "@/components/home/features";
import DisplayFooter from "@/components/home/footer";
import HeaderSection from "@/components/home/header";
import Process from "@/components/home/process";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import Workers from "@/components/home/workers";
import Partner from "@/components/home/workers/Partner";

const page = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
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

export default page;
