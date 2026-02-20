// import { useEffect, useState } from 'react';

// // Replace these with your actual image imports
// // import upperLogo from '../assets/upperLogo.png';
// // import lowerLogo from '../assets/lowerLogo.png';
// // import lowerLogo from "../../public/lowerLogo.jpeg"
// import lowerLogo from "../../public/lowerLogo.jpeg"
// import upperLogo from "../../public/upperLogo.jpeg"

// const TopLogos = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Hide logos when scrolled more than 10px
//       setIsVisible(window.scrollY <= 200);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div
//       className={`
//         top-logos-container
//         w-full
//         overflow-hidden
//         transition-all
//         duration-500
//         ease-in-out
//         ${isVisible ? 'h-50' : 'h-0'}
//       `}
//     >
//       <div className="flex flex-col items-center justify-center h-40 bg-gradient-to-b from-amber-50 to-white">
//         {/* Upper rotating logo */}
//         <div className="animate-spin-slow mb-1">
//           {/* Replace with your upperLogo image */}
//           <img src={upperLogo} alt="upper" />
          
//         </div>

//         {/* Lower static logo (text or image) */}
        
//           {/* Replace with your lowerLogo image or text */}
//           <img src={lowerLogo} alt="lower" className="text-sm font-semibold text-gray-700"/>
//           {/* <span>Astrotring</span> */}
       
//       </div>

//       <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
//             {/* <span className="text-primary text-xs">Logo</span> */}
//           </div>
//     </div>
//   );
// };

// export default TopLogos;

import { useEffect, useState } from 'react';
import lowerLogo from "../../public/lowerLogo.jpeg";
import upperLogo from "../../public/upperLogo.jpeg";
import swastickImage from "../assets/swastickImage.avif"


const TopLogos = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`
        w-full
        overflow-hidden
        transition-all
        duration-500
        ease-in-out
        ${isVisible ? 'h-30' : 'h-0'}
      `}
    >
      <div className="flex flex-col items-center justify-center h-30 bg-gradient-to-b from-amber-50 to-white">
        {/* Upper rotating logo */}
        <div className="animate-spin-slow mb-1 w-15 h-15">
          <img src={upperLogo} alt="upper" className="w-full h-full object-contain" />
        </div>

        {/* Lower static logo */}
        <div className="text-sm font-semibold text-gray-700 flex justify-between">
          {/* <img src={swastickImage} alt="swastickImage" className="h-20 w-auto object-contain" /> */}
          <img src={lowerLogo} alt="lower" className="h-10 w-auto object-contain" />
          {/* <img src={swastickImage} alt="swastickImage" className="h-20 w-auto object-contain" /> */}
        </div>
      </div>
    </div>
  );
};

export default TopLogos;