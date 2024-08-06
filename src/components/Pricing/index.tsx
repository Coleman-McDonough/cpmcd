"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Link from "next/link";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section
      id="pricing"
      className="relative z-10 bg-gray-cpm py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Our Vision"
            price="cpmcd_2"
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Our goal is to provide the most efficient and cost effective to the immediate removal of any unwanted concrete."
            subtitle_2="Our years of logistics expertise and expansive network allow us to provide the most competitive rates and the most efficient service. "
          >
            <div className="dark:border-white dark:border-opacity-10 border-opacity-10">
              <Link href="tel:978-375-7001">
                <button className="flex w-full items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                  Get a Quote!
                </button>
              </Link>
            </div>
          </PricingBox>
          <PricingBox
            packageName="Our Solution"
            price="cpmcd_1"
            duration={isMonthly ? "mo" : "yr"}
            subtitle="We have state of the art equipment as to make sure we can create the most sought after sized crushed concrete. "
            subtitle_2="We have a fleet which will expeditiously handle both smaller deliveries as well as deliveries for industrial sized jobs."
          >
            <div className="dark:border-white dark:border-opacity-10 border-opacity-10">
              <Link href="tel:978-375-7001">
                <button className="flex w-full items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                  Get a Quote!
                </button>
              </Link>
            </div>
          </PricingBox>
          <PricingBox
            packageName="Our Services."
            price="cpmcd_3"
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Our headquarters is conveniently located just minutes from Routes 495, 95 and 125 to allow for the most efficient logistic process."
            subtitle_2="Our in house sourcing techniques allow us to offer the most competitive rates in the concrete disposal business. "
          >
            <div className="dark:border-white dark:border-opacity-10 border-opacity-10">
              <Link href="tel:978-375-7001">
                <button className="flex w-full items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                  Get a Quote!
                </button>
              </Link>
            </div>
          </PricingBox>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
