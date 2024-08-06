import Image from "next/image";

const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
  subtitle_2: string;
}) => {
  const { price, duration, packageName, subtitle, children, subtitle_2 } =
    props;

  return (
    <div className="w-full">
      <div className="dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark relative z-10 rounded-sm bg-gray-dark/50 px-8 py-10 shadow-three hover:shadow-one">
        <div className="flex items-center justify-between">
          <h3 className="price dark:text-white mb-2 text-[32px] font-bold text-black">
            <span className="time text-lg font-medium text-white">
              {packageName}
            </span>
          </h3>
        </div>
        {/* Insert image using next/image */}
        <Image
          src={`/images/pricing/${price}.png`}
          alt={`${subtitle}`}
          width={500}
          height={300}
          className="mb-4"
        />
        <p className="mb-4 text-base text-white">{subtitle}</p>

        <p className="mb-4 text-base text-white">{subtitle_2}</p>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PricingBox;
