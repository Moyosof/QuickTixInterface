import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../Pages/Header";
import "./style.css";
import img1 from "../assests/event1.jpg";
import img2 from "../assests/event2.jpg";
import img3 from "../assests/event3.jpg";
import img4 from "../assests/event4.jpg";
import img5 from "../assests/ticks.jpg";
import img6 from "../assests/show.jpg";
import img7 from "../assests/noiseporn.jpg";
import img8 from "../assests/ticks.jpg";
import Footer from "../Pages/Footer";

const LandingPage = () => {
  const images = [img8, img1, img3, img4, img5, img6, img7];

  const [curImg, setCurImg] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      switch (curImg) {
        case 0:
          setCurImg(1);
          clearInterval(interval);
          break;
        case 1:
          setCurImg(2);
          clearInterval(interval);
          break;
        case 2:
          setCurImg(3);
          clearInterval(interval);
          break;
        case 3:
          setCurImg(4);
          clearInterval(interval);
          break;
        case 4:
          setCurImg(5);
          clearInterval(interval);
          break;
        case 5:
          setCurImg(6);
          clearInterval(interval);
          break;
        case 6:
          setCurImg(0);
          clearInterval(interval);
          break;
        default:
          setCurImg(0);
          clearInterval(interval);
          break;
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [curImg]);

  return (
    <div>
      <Header />
      <div
        className="hero duration-700 justify-start pt-16 items-start h-[90vh] sm:h-[80vh] md:h-full lg:h-full w-full px-4 lg:px-8 lg:pt-24 lg:pb-24 flex flex-col lg:justify-center lg:items-center text-center text-white leading-[1.5rem]"
        style={{
          backgroundImage: `url(${images[curImg]})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 1,
          transition: "all ease-out .7s",
          backgroundColor: "rgb(65, 60, 60)",
          backgroundBlendMode: "overlay",
          height: "80vh",
          border: "10px solid",
        }}
      >
        <div className="text-[28px] leading-[2.7] lg:text-[40px] lg:leading-[50px] font-semibold lg:w-[745px]">
          Get the ticket to the lastest event of your choice. Life is for the
          living ~Poco lee~
        </div>
        <div>
          <p className="lg:w-[839px] text-[13px] lg:text-[16px] pb-[30px] lg:pb-[50px] pt-[15px] font-normal">
            Event happens all over the world, puchasing ticket can be
            chanllenging, but with QUICKTIX, you can get your tickets at a go.
            Don't miss out on any show again, its your time to be everywhere.
            You are a working pooetry, like art of work basquet.
          </p>
        </div>

        <div className=" flex items-center gap-10 justify-center text-center">
          <div className="featured text-[12px] lg:text-[14px] ">
            Select Catergories
          </div>
          <div className="featured text-[12px] lg:text-[14px] ">
            Book a Ticket
          </div>
          {/* <div className=" bg-[#fa9e42de] mt-8 rounded-lg mx-auto">
            <button className=" items-center justify-center py-3 p-12">Book a Ticket</button>

          </div> */}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full p-4  flex-wrap justify-between">
      
        <div className="max-w-sm relative overflow-hidden shadow-lg mx-2 my-2">
          <div className="group">
            <div>
              <img
                src={img4}
                alt=""
                className="w-full h-48 object-cover transition-transform transform group-hover:-translate-x-full"
              />
              <div className="w-full h-48 object-cover transition-transform transform group-hover:-translate-x-full">
                <div className="py-4 font-bold text-xl mb-2">Ticket shop</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti accusantium dolorem consectetur.
                </p>
              </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-70 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="text-primary font-semibold text-3xl mb-2">
                Ticket shop
              </h1>
              <p className="text-black text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti accusantium dolorem consectetur.Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Corrupti accusantium dolorem
                consectetur.Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Corrupti accusantium dolorem consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm relative overflow-hidden shadow-lg mx-2 my-2">
          <div className="group">
            <div>
              <img
                src={img4}
                alt=""
                className="w-full h-48 object-cover transition-transform transform group-hover:-translate-x-full"
              />
              <div className="w-full h-48 object-cover transition-transform transform group-hover:-translate-x-full">
                <div className="py-4 font-bold text-xl mb-2">Ticket shop</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti accusantium dolorem consectetur.
                </p>
              </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-70 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="text-primary font-semibold text-3xl mb-2">
                Ticket shop
              </h1>
              <p className="text-black text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti accusantium dolorem consectetur.Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Corrupti accusantium dolorem
                consectetur.Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Corrupti accusantium dolorem consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm relative overflow-hidden shadow-lg mx-2 my-2">
          <div className="group">
            <div>
              <img
                src={img4}
                alt=""
                className="w-full h-48 object-cover transition-transform transform group-hover:-translate-x-full"
              />
              <div className="w-full h-48 object-cover transition-transform transform group-hover:-translate-x-full">
                <div className="py-4 font-bold text-xl mb-2">Ticket shop</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti accusantium dolorem consectetur.
                </p>
              </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-70 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="text-primary font-semibold text-3xl mb-2">
                Ticket shop
              </h1>
              <p className="text-black text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti accusantium dolorem consectetur.Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Corrupti accusantium dolorem
                consectetur.Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Corrupti accusantium dolorem consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm relative overflow-hidden shadow-lg mx-2 my-2">
          <div className="group">
            <div>
              <img
                src={img4}
                alt=""
                className="w-full h-48 object-cover transition-transform transform group-hover:-translate-x-full"
              />
              <div className="w-full h-48 object-cover transition-transform transform group-hover:-translate-x-full">
                <div className="py-4 font-bold text-xl mb-2">Ticket shop</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti accusantium dolorem consectetur.
                </p>
              </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-70 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="text-primary font-semibold text-3xl mb-2">
                Ticket shop
              </h1>
              <p className="text-black text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti accusantium dolorem consectetur.Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Corrupti accusantium dolorem
                consectetur.Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Corrupti accusantium dolorem consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full p-4  flex-wrap justify-between">
      
      <div className="max-w-sm relative overflow-hidden shadow-lg mx-2 my-2">
        <div className="group">
          <div>
            <img
              src={img4}
              alt=""
              className="w-full h-48 object-cover transition-transform transform group-hover:-translate-x-full"
            />
            <div className="w-full h-48 object-cover transition-transform transform group-hover:-translate-x-full">
              <div className="py-4 font-bold text-xl mb-2">Ticket shop</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti accusantium dolorem consectetur.
              </p>
            </div>

          <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-70 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-primary font-semibold text-3xl mb-2">
              Ticket shop
            </h1>
            <p className="text-black text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti accusantium dolorem consectetur.Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Corrupti accusantium dolorem
              consectetur.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Corrupti accusantium dolorem consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-sm relative overflow-hidden shadow-lg mx-2 my-2">
        <div className="group">
          <div>
            <img
              src={img4}
              alt=""
              className="w-full h-48 object-cover transition-transform transform group-hover:-translate-x-full"
            />
            <div className="w-full h-48 object-cover transition-transform transform group-hover:-translate-x-full">
              <div className="py-4 font-bold text-xl mb-2">Ticket shop</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti accusantium dolorem consectetur.
              </p>
            </div>

          <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-70 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-primary font-semibold text-3xl mb-2">
              Ticket shop
            </h1>
            <p className="text-black text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti accusantium dolorem consectetur.Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Corrupti accusantium dolorem
              consectetur.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Corrupti accusantium dolorem consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-sm relative overflow-hidden shadow-lg mx-2 my-2">
        <div className="group">
          <div>
            <img
              src={img4}
              alt=""
              className="w-full h-48 object-cover transition-transform transform group-hover:-translate-x-full"
            />
            <div className="w-full h-48 object-cover transition-transform transform group-hover:-translate-x-full">
              <div className="py-4 font-bold text-xl mb-2">Ticket shop</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti accusantium dolorem consectetur.
              </p>
            </div>

          <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-70 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-primary font-semibold text-3xl mb-2">
              Ticket shop
            </h1>
            <p className="text-black text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti accusantium dolorem consectetur.Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Corrupti accusantium dolorem
              consectetur.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Corrupti accusantium dolorem consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-sm relative overflow-hidden shadow-lg mx-2 my-2">
        <div className="group">
          <div>
            <img
              src={img4}
              alt=""
              className="w-full h-48 object-cover transition-transform transform group-hover:-translate-x-full"
            />
            <div className="w-full h-48 object-cover transition-transform transform group-hover:-translate-x-full">
              <div className="py-4 font-bold text-xl mb-2">Ticket shop</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti accusantium dolorem consectetur.
              </p>
            </div>

          <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-70 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-primary font-semibold text-3xl mb-2">
              Ticket shop
            </h1>
            <p className="text-black text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti accusantium dolorem consectetur.Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Corrupti accusantium dolorem
              consectetur.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Corrupti accusantium dolorem consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>



      <div className=" flex justify-center items-center mt-32">
        <div className=" w-[80%] bg-orange-500 p-8 rounded-lg lg:h-[300px]">
          <h2 className=" text-center text-3xl font-bold mb-8 text-white">
            {" "}
            SUBSCRIBE FOR OUR NEWSLETTER
          </h2>
          <p className=" text-center text-xl text-white">
            {" "}
            Recieve events you actually want to attend in your inbox
          </p>
          <div className="flex justify-center">
            <Link>
              <button className=" mt-10 lg:mt-20 bg-white rounded-lg py-3 px-6 w-full font-semibold">
                Sign Up
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;

// const goToNextSlide = () => {
//   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// };

// useEffect(() => {
//   const autoPlayInterval = setInterval(goToNextSlide, 3000);
//   return() => clearInterval(autoPlayInterval);
// }, []);
