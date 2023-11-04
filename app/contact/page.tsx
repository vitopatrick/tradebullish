import ContactFaq from "@/components/contact/ContactFaq";
import ContactForm from "@/components/contact/ContactForm";
import Header from "@/components/contact/Header";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import React from "react";

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />
      {/* cta */}
      <Header />
      {/* Form */}
      <ContactForm />
      {/* FAQ */}
      <ContactFaq />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactPage;
