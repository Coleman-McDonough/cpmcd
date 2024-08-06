import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="bg-gray-cpm py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about_cpmcd.png"
                alt="about image"
                fill
                className="dark:hidden dark:drop-shadow-none drop-shadow-three"
              />
              <Image
                src="/images/about/about_cpmcd.png"
                alt="about image"
                fill
                className="dark:block dark:drop-shadow-none hidden drop-shadow-three"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="dark:text-white mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Company Profile
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {`C.P. McDonough Concrete is a subsidiary of C.P. McDonough
                  Construction a leader in the construction industry. We provide
                  the most efficient and professional services in New England.
                  Our years of development experience on both commercial and
                  residential scales allow us to customize beautifully crafted
                  buildings, roadways and homes. We leverage our vast fleet of
                  commercial equipment to provide the most competitive rates to
                  ensure our clients are getting the best service in both
                  transportation, materials, and construction. Our philosophy is
                  that of excellence as we know the only way to achieve
                  greatness is to ensure our client's experience the best
                  services available in the industry.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
