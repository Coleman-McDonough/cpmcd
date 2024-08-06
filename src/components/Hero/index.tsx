import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="/images/hero/background.png" // Adjust the path to your image
            alt="Heavy Machinery"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            quality={100} // Optional: Adjust quality as needed
          />
        </div>
        <div className="relative z-10">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    // Link to a phone number
                    href="tel:978-375-7001"
                    className="mb-4 rounded-sm bg-primary/80 px-8 py-4 text-2xl font-semibold text-white duration-300 ease-in-out hover:bg-primary/100 sm:text-3xl md:text-4xl"
                  >
                    Get a Quote!
                  </Link>
                </div>
                <div className="mx-auto my-auto max-w-[800px] rounded-md bg-gray-900 bg-opacity-80 p-6 text-center">
                  <h1 className="mb-1 text-2xl font-bold leading-tight text-white dark:text-white sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight">
                    MOST AFFORDABLE CONCRETE DISPOSAL SERVICE IN THE REGION!
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
