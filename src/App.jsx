import  { useState, useEffect } from "react";
import AboutUs from "./components/AboutUs";
import BorderSec from "./components/BorderSec";

import DexMark from "./components/DexMark";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowToBuy from "./components/HowToBuy";
import Navbar from "./components/Navbar";
import Taxs from "./components/Taxs";
import Loader from "./components/Loader";
import Contarct from "./components/Contarct";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative overflow-x-hidden">
          <div className="relative bg-[#FCCE16]  ">
            {/* <video autoPlay playsInline loop muted className="   w-full h-[100vh] sm:h-full ">
              <source
                src="images/backbg.mp4"
                type="video/mp4"
                
              />
            </video> */}
            <div className="">
             
              <Navbar />
              <Hero />
            </div>
          </div>
          <div className="mb-4">
              <BorderSec />
            </div>
        
          <AboutUs />
          <div className=" -mt-2 sm:-mt-44">
            <img src="images/ice.png" alt="" className="w-full h-full" />
          </div>
          <Contarct/>
        
          <Taxs />
          <div className="w-full -mt-20 sm:-mt-44 ">
            <img src="images/ice.png" alt="" className="w-full h-full sm:h-[400px]" />
          </div>
        
          <div className="">
            <HowToBuy />
    
         
            <Faq />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;