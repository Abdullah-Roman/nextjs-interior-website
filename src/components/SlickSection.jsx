"use client";
import { paraVariants, tagVariants } from "@/utils/Animation";
import { motion } from "framer-motion";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import Slider from "react-slick";
import { Button } from "./ui/button";
const SlickSection = () => {
  var settings = {
    dots: false,

    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,

    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto dark:bg-[#0A192F] dark:text-white">
      <div>
        <motion.h1
          initial="initial"
          whileInView={"whileInView"}
          variants={tagVariants}
          className="py-4 text-4xl lg:text-6xl font-medium"
        >
          Modern Classic
        </motion.h1>
        <motion.p
          initial="initial"
          whileInView={"whileInView"}
          variants={paraVariants}
          className="pb-6 text-xl font-bold"
        >
          LUXURY DECOR TO CREATE IN OUR HOME
        </motion.p>
        <div className="grid grid-cols-2 pb-12">
          <motion.p
            initial="initial"
            whileInView={"whileInView"}
            variants={paraVariants}
            className="text-gray-500"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta at
            tempora, natus voluptate nam sequi quae fuga quos atque alias ea
            ullam excepturi, omnis voluptatum? Minus quia vel necessitatibus
            est.
          </motion.p>
          <motion.p
            initial="initial"
            whileInView={"whileInView"}
            variants={paraVariants}
            className="text-gray-500"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta at
            tempora, natus voluptate nam sequi quae fuga quos atque alias ea
            ullam excepturi, omnis voluptatum? Minus quia vel necessitatibus
            est.
          </motion.p>
        </div>
        <a href="/gallery" className="inline-block py-10">
          <Button className="px-8 py-4  rounded-full hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 text-white">
            Gallery <TbArrowUpRight />
          </Button>
        </a>
      </div>
      <div className="overflow-hidden max-w-[1790px]">
        <Slider {...settings}>
          <div className="px-2">
            <Image
              src="/image/swiper1.jpg"
              width={580}
              height={300}
              className="w-full"
              alt=""
            />
          </div>
          <div className="px-2">
            <Image
              src="/image/swiper2.jpg"
              width={580}
              height={300}
              className="w-full"
              alt=""
            />
          </div>
          <div className="px-2">
            <Image
              src="/image/swiper3.jpg"
              width={580}
              height={300}
              className="w-full"
              alt=""
            />
          </div>
          <div className="px-2">
            <Image
              src="/image/swiper4.jpg"
              width={580}
              height={300}
              className="w-full"
              alt=""
            />
          </div>
          <div className="px-2">
            <Image
              src="/image/swiper5.jpg"
              width={580}
              height={300}
              className="w-full"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SlickSection;
