
import Button from "../Button";

interface BannerProps {
  page: string;
}

interface ButtonProperties {
  text: string;
  url: string;
  colorTheme: "light" | "dark";
  formCategoryState?: string;
}

const Banner: React.FC<BannerProps> = ({ page }) => {
  let src, alt, imageClass, bannerContent;
  
  const ContactButton: ButtonProperties = {
    text: "contact_us",
    url: ``,
    colorTheme: "light",
  };
  const ContactButtonBlue: ButtonProperties = {
    text: "contact_us",
    url: ``,
    colorTheme: "dark",
  };
  
  switch (page) {
    case "home":
      src = "/images/hero31.jpg";
      alt = "Home Banner";
      imageClass = "h-screen object-cover md:h-[calc(150vh-80px)]";
      bannerContent = (
        <div
          className=" absolute inset-0 flex flex-col items-center sm:items-start justify-center text-white text-left px-4 md:px-8 lg:px-20 xl:px-32"
          style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        >
          <div className="OVERLAY bg-black opacity-35 absolute w-full h-full z-20 top-0 left-0"></div>
          <div className="z-30 flex flex-col w-[90%]">
            <h1 className="order-3 sm:order-1 mb-8 xsm:mb-16 sm:mb-4 z-30 -ml-4 sm:ml-0 button-text text-md xsm:text-lg sm:text-xl md:text-2xl ">
            
            </h1>
            <p className="order-1 sm:order-2 z-30 -ml-4 sm:ml-0 text-[31px] xsm:text-[34px] sm:text-5xl md:text-6xl md:mb-2 ">
             
            </p>
            <p className="order-2 sm:order-3 z-30 -ml-4 sm:ml-0 text-[31px] xsm:text-[34px] sm:text-7xl md:text-6xl mb-4 xsm:mb-10 ">
            WEBSITE UNDER CONSTRUCTION
            </p>
          </div>
         
          <div className="z-30 absolute inset-x-0 bottom-0 h-32 md:h-16 flex flex-wrap md:flex-nowrap justify-around items-center text-pt-navyblue p-4 bg-pt-gray2 ">
            
          </div>
        </div>
      );
      break;
    
    default:
      src = "/images/hero31.jpg";
      alt = "Default Banner";
  }

  return (
    <div className="relative">
      <img src={src} alt={alt} className={`w-full ${imageClass}`} />
      {bannerContent}
    </div>
  );
};

export default Banner;
