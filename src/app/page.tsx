import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import VisitorTracker from "@/components/VisitorTracker";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPM Concrete Disposal",
  description:
    "CPM Concrete Disposal is a family-owned and operated business that provides concrete disposal services in the MA and NH.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <VisitorTracker />
      <ScrollUp />
      <Hero />
      <Pricing />
    </>
  );
}
