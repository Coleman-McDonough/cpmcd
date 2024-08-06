import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Location from "@/components/Location";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | CPM Concrete Disposal",
  description:
    "CPM Concrete Disposal is a family-owned and operated business that provides concrete disposal services in the MA and NH.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <AboutSectionTwo />
      <Location />
      <Contact />
    </>
  );
};

export default AboutPage;
