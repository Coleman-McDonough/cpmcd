const Location = () => {
  return (
    <div className="border border-black">
      <iframe
        className="h-64 w-full lg:h-96"
        title="Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7382.965967179241!2d-71.058783923335!3d42.83573790491632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e2fdaf36f60cd5%3A0x20e70004418efad3!2s187%20S%20Main%20St%2C%20Newton%2C%20NH%2003858!5e1!3m2!1sen!2sus!4v1722959736414!5m2!1sen!2sus"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Location;
