"use client";
import { paraVariants, tagVariants } from "@/utils/Animation";
import { motion } from "framer-motion";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="container mx-auto lg:grid grid-cols-2 items-center dark:bg-[#0A192F] dark:text-white">
      <div className=" text-center lg:text-left ">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, type: "spring" },
          }}
          className="uppercase tracking-widest pt-4"
        >
          offer for best interior
        </motion.p>
        <motion.h1
          initial="initial"
          whileInView="whileInView"
          variants={tagVariants}
          className="font-bold text-3xl xl:text-5xl py-6"
        >
          Make Your Home a <br />
          Piece of Art
        </motion.h1>
        <motion.p
          initial="initial"
          whileInView={"whileInView"}
          variants={paraVariants}
          className="text-black/70 w-[350px] mx-auto lg:mx-0 dark:text-white"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          nihil, laudantium sint voluptatem corrupti deserunt quae, numquam
          molestiae consequuntur sit voluptate non at illo, quibusdam nisi
          libero repudiandae iusto modi? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quasi, dolorem.
        </motion.p>
        <motion.div
          initial="initial"
          whileInView={"whileInView"}
          variants={paraVariants}
          className="pt-6"
        >
          <Button className="px-8 py-4 rounded-full hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 text-white">
            Book Now <TbArrowUpRight />
          </Button>
        </motion.div>
      </div>
      <div className="pt-4 hidden lg:block">
        <Image
          src="/image/hall.png"
          height={500}
          width={800}
          alt=""
          className=" lg:h-[344px] lg:w-[500px] xl:h-[444px] xl:w-[700px] "
        />
      </div>
    </div>
  );
};

export default Hero;
