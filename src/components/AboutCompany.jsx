"use client";
import { paraVariants, tagVariants } from "@/utils/Animation";
import { motion } from "framer-motion";
import Image from "next/image";
const AboutCompany = () => {
  return (
    <div className="container mx-auto py-12 grid lg:grid-cols-2 gap-4 place-items-center dark:bg-[#0A192F] dark:text-white">
      <div className="">
        <Image
          src="/image/aboutfront.png"
          height={500}
          width={800}
          alt=""
          className="w-full lg:h-[344px] lg:w-[500px] xl:w-[700px] xl:h-[444px] hidden lg:block"
        />
      </div>
      <div className="w-1/2">
        <motion.h1
          initial={{ opacity: 0, y: "-10" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.2,
            },
          }}
          className="text-3xl lg:text-3xl font-bold "
        >
          This is Awards Winning Company
        </motion.h1>
        <motion.p
          initial="initial"
          whileInView="whileInView"
          variants={tagVariants}
          className="text-gray-400 tracking-wider  py-6"
        >
          Worlds Awards Are
        </motion.p>
        <motion.p
          initial="initial"
          whileInView={"whileInView"}
          variants={tagVariants}
          className=" py-3"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut facere
          accusantium! Tempora magni blanditiis earum totam, perspiciatis
          voluptates nemo?
        </motion.p>
        <motion.p
          initial="initial"
          whileInView={"whileInView"}
          variants={paraVariants}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          corporis eligendi hic, amet molestiae a voluptates maxime consectetur
          quaerat quis! Autem, aliquid nemo voluptatibus ex perspiciatis quos
          unde fugiat suscipit.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutCompany;
