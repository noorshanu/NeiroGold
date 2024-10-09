import CopyAddress from "./CopyAddress";

function AboutUs() {
  return (
    <section className="   sm:pt-0 pt-3 relative overflow-hidden" id="about">
      <div className=" container-wrapper pt-[2%]">
        <div className="relative flex justify-between flex-col sm:flex-row items-center gap-4">
          <div
            className=" w-full sm:w-1/2  rounded-xl p-2 "
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <h1 className="  p-2 text-3xl sm:text-6xl font-bold font-snow text-sad text-black text-center mb-4">
              MEET Gold Neiro
            </h1>

            <p
              className=" text-lg text-black font-dream  py-2"
              data-aos="zoom-in-left"
              data-aos-duration="1500"
            >
              Yo, yo! Thug boss Gold Neiro in the house! What’s his Solana
              kingpin mission? Make everyone a millionaire and pump Solana 1000x
              like it's nothing! Dripping in gold chains, 
            </p>

            <p className=" text-lg font-dream text-black">
            flexing that
              mega-bullish brain, Neiro’s all about crazy gains. No leash, just
              pumpin' and stacking cash, thug style! 💪🐾 Woof, woof!
            </p>
          </div>
          <div
            className=" w-full sm:w-1/2 relative "
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <img src="/images/wood.png" alt="" className="rounded-2xl  " />
            <img
              src="images/dog-3.webp"
              alt=""
              className=" absolute bottom-4 floating h-[100px] sm:h-[150px] right-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
