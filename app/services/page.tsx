import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import Header from "@/components/services/header";
import OurServices from "@/components/services/our-services";
import ReachOut from "@/components/services/reach-out-form";
import React from "react";

type Props = {};

const ServicesPage = (props: Props) => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Header */}
      <Header />
      {/* Services */}
      <OurServices />
      {/* Reach out */}
      <ReachOut />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default ServicesPage;
