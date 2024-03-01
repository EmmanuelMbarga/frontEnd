import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slider1 from "../../../images/Imgvetements/slide1Logo.jpg"; 
import slider2 from "../../../images/Imgvetements/hommehabitrouge.jpg";
import slider3 from "../../../images/Imgvetements/Logo3.jpg"
import slider4 from "../../../images/ImgPub/contactAssist.jpg"
import slider5 from "../../../images/Imgvetements/paire-chaussures-sport-generee-par-ai.jpg"
import slider6 from "../../../images/Imgvetements/portrait-homme-afro-americain-noir-elegant-au-chapeau-lunettes-fond-bleu.jpg"
// import Navbar from "../Navbar/navbarfile";
const SliderPub = () => {
  return (
    <>
      <div className=" mx-3 font-Nunito iphone:mx-0 iphonese:mx-0 iphonexr:mx-0 iphone:w-[100%]">
        <Carousel
          infiniteLoop={true}
            autoPlay={600}
            interval={4000}
            showStatus={false}
          
        >
          {/* ------------------------------------------slide 1------------------------------------------ */}
          <div className="text-left iphone:w-[98%] iphone:h-[60%]">
            <img
              src={slider1}
              alt="logoimg"
              className="h-[550px] w-[100%] object-top object-cover iphone:h-52"
            />

            <div className="">
              <div className="bg-teal-500 iphone:bg-teal-500">
                <h1 className="text-2xl text-white p-2 capitalize ml-10 iphone:text-xs ">
                  decouvrez les tendances du moment avec la nouvelle game
                  skrilanka
                </h1>
              </div>
              <div className="bg-teal-900 border-t-2 ">
                <h1 className=" text-white p-2 text-lg ml-10 iphone:p-1 iphone:text-xs">
                  decouvrez les tendances du moment avec la nouvelle game
                  skrilanka
                </h1>
                <div className="text-black pb-2 ml-12 iphone:">
                  <button className="border bg-white mr-3 p-2 iphone:p-1 iphone:text-sm">
                    en savoir plus
                  </button>
                  <button className="border bg-white p-2 iphone:p-1 iphone:text-sm">acheter</button>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------slide 2------------------------------------ */}
          <div className="iphone:w-[98%] iphonexr:w-[98%]">
            <div className="h-96 iphone:h-48 iphonexr:w-[98%]"  >
              
              <img
                src={slider2}
                alt="logoimg"
                className="h-[691px] w-[100%] object-top object-cover iphone:h-[344px] iphonexr:h-[344px] iphone:object-top "
              />

              <div className="relative z-20 -top-[700px] iphone:-top-[355px] ">
              <div className="bg-red-600 w-[39%] p-10 iphone:p-2 iphone:bg-sky-900 ">
                <h1 className="presentationcarousel">
                  Regardez, essayez et santez vous bien
                </h1>
              </div>
              <div className="bg-red-200 w-[39%]  h-[30rem] iphone:h-[14.3rem] iphonexr:h-[15rem] iphone:p-1 iphonexr:p-1 ">
                <h1 className="presentationcarousel2" >
                  Decouvrez la nouvelle game xpix pensez et cree pour vous
                </h1>
                <button className="text-white border-black bg-black p-2 text-xl m-10 iphone:text-[9px] iphone:p-0 iphone:rounded">lire plus</button>
              </div>
              </div>
              
            </div>
          </div>
{/* ------------------------------------slide 3------------------------------------------------ */}

<div className="iphone:w-[98%] iphonexr:w-[98%] text-neutral-100">
            <div className="h-96 iphone:h-48 iphonexr:w-[98%]"  >
              
              <img
                src={slider3}
                alt="logoimg"
                className="h-[691px] w-[100%] object-top object-cover iphone:h-[344px] iphonexr:h-[344px] iphone:object-top "
              />

              <div className="relative z-20 -top-[700px] iphone:-top-[355px] ">
              <div className="bg-yellow-900 w-[39%] p-10 iphone:p-2 iphone:bg-yellow-900 ">
                <h1 className="presentationcarousel">
                  Regardez, essayez et santez vous bien
                </h1>
              </div>
              <div className="bg-yellow-500 w-[39%]  h-[30rem] iphone:h-[14.3rem] iphonexr:h-[15rem] iphone:p-1 iphonexr:p-1 ">
                <h1 className="presentationcarousel2" >
                  Decouvrez la nouvelle game xpix pensez et cree pour vous
                </h1>
                <button className="text-white border-black bg-black p-2 text-xl m-10 iphone:text-[9px] iphone:p-0 iphone:rounded">lire plus</button>
              </div>
              </div>
              
            </div>
          </div>

{/* ----------------------------------------slider 4---------------------------------------------------- */}
<div className="iphone:w-[98%] iphonexr:w-[98%] text-neutral-200">
            <div className="h-96 iphone:h-48 iphonexr:w-[98%]"  >
              
              <img
                src={slider4}
                alt="logoimg"
                className="h-[691px] w-[100%] object-top object-cover iphone:h-[344px] iphonexr:h-[344px] iphone:object-top "
              />

              <div className="relative z-20 -top-[700px] iphone:-top-[355px] ">
              <div className="bg-blue-900 w-[39%] p-10 iphone:p-2 iphone:bg-blue-900  ">
                <h1 className="presentationcarousel">
                  Regardez, essayez et santez vous bien
                </h1>
              </div>
              <div className="bg-blue-400 w-[39%]  h-[30rem] iphone:h-[14.3rem] iphonexr:h-[15rem] iphone:p-1 iphonexr:p-1 ">
                <h1 className="presentationcarousel2" >
                  Decouvrez la nouvelle game xpix pensez et cree pour vous
                </h1>
                <button className="text-white border-black bg-black p-2 text-xl m-10 iphone:text-[9px] iphone:p-0 iphone:rounded">lire plus</button>
              </div>
              </div>
              
            </div>
          </div>
{/* -----------------------------------------------------slider 5 ------------------------------------------------------ */}
<div className="iphone:w-[98%] iphonexr:w-[98%] text-neutral-200">
            <div className="h-96 iphone:h-48 iphonexr:w-[98%]"  >
              
              <img
                src={slider5}
                alt="logoimg"
                className="h-[691px] w-[100%] object-top object-cover iphone:h-[344px] iphonexr:h-[344px] iphone:object-top "
              />

              <div className="relative z-20 -top-[700px] iphone:-top-[355px] ">
              <div className="bg-black bg-opacity-70 w-[39%] p-10 iphone:p-2 iphone:bg-black iphone:bg-opacity-70 ">
                <h1 className="presentationcarousel">
                  Regardez, essayez et santez vous bien
                </h1>
              </div>
              <div className="bg-orange-500 bg-opacity-70 w-[39%]  h-[30rem] iphone:h-[14.3rem] iphonexr:h-[15rem] iphone:p-1 iphonexr:p-1 ">
                <h1 className="presentationcarousel2" >
                  Decouvrez la nouvelle game xpix pensez et cree pour vous
                </h1>
                <button className="text-white border-black bg-black p-2 text-xl m-10 iphone:text-[9px] iphone:p-0 iphone:rounded">lire plus</button>
              </div>
              </div>
              
            </div>
          </div>
{/* ------------------------------------------------------------slider 6----------------------------------------------------------------- */}
<div className="iphone:w-[98%] iphonexr:w-[98%]">
            <div className="h-96 iphone:h-48 iphonexr:w-[98%]"  >
              
              <img
                src={slider6}
                alt="logoimg"
                className="h-[691px] w-[100%] object-top object-cover iphone:h-[344px] iphonexr:h-[344px] iphone:object-top "
              />

              <div className="relative z-20 -top-[700px] iphone:-top-[355px] ">
              <div className="text-white bg-black w-[32.8rem] p-10 iphone:p-2 iphone:bg-black translate-x-[52rem] iphone12:w-[9.7rem] iphonexr:w-[9.6rem] iphone:w-[9rem] iphone:translate-x-[14.1rem] iphonexr:translate-x-[15.2rem]">
                <h1 className="presentationcarousel">
                  Regardez, essayez et santez vous bien
                </h1>
              </div>
              <div className="bg-neutral-100 w-[39%]  h-[30rem] iphone:h-[14.3rem] translate-x-[51.8rem] iphone:translate-x-[14.1rem] iphone12:w-[9.9rem] iphonexr:translate-x-[15.2rem] iphonexr:h-[15rem] iphone:p-1 iphonexr:p-1 ">
                <h1 className="presentationcarousel2" >
                  Decouvrez la nouvelle game xpix pensez et cree pour vous
                </h1>
                <button className="text-white border-black bg-black p-2 text-xl m-10 iphone:text-[9px] iphone:p-0 iphone:rounded">lire plus</button>
              </div>
              </div>
              
            </div>
          </div>
        </Carousel>
      </div>

    </>
  );
};

export default SliderPub;
