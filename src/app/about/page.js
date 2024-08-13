"use client";
import { Button } from "@/components/ui/button";
import { paraVariants, tagVariants } from "@/utils/Animation";
import { motion } from "framer-motion";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
const page = () => {
  return (
    <div>
      <div className="bg-[url('/image/whoweare.jpg')] bg-center bg-cover">
        <h1 className="conatainer py-32 text-6xl text-center text-semibold lg:py-64 text-black tracking-widest">
          Who are we?
        </h1>
      </div>
      <div className="container pt-4 ">
        <motion.h2
          initial="initial"
          whileInView="whileInView"
          variants={tagVariants}
          className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl"
        >
          We have great idea & Interior Design
        </motion.h2>
        <motion.p
          initial="initial"
          whileInView="whileInView"
          variants={paraVariants}
          className="text-2xl text-center font-medium pb-10 mt-5"
        >
          Our Interior design company is a company that provides the best
          interior service. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quam eaque fugiat pariatur ipsam iusto. Ut?
        </motion.p>
      </div>
      <div className="lg:flex items-center gap-x-8 container">
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1, transition: { type: "spring" } }}
          className="w-full"
        >
          <Image src="/image/gallery1123.jpg" height={700} width={700} alt="" />
        </motion.div>
        <div>
          <motion.p
            initial="initial"
            whileInView="whileInView"
            variants={paraVariants}
          >
            At its core, interior design is about balance. It’s the harmonious
            blend of elements like color, texture, light, and furniture to
            create a cohesive space. The best designs are those that not only
          </motion.p>
          <br />
          <br />
          <motion.p
            initial="initial"
            whileInView="whileInView"
            variants={paraVariants}
          >
            Interior design is more than just arranging furniture and picking
            out paint colors; it is the art of creating spaces that reflect
            personality, comfort, and functionality. In an era where our homes
            have become our sanctuaries, the significance of interior design has
            never been more apparent. Whether you're a seasoned professional or
            and practical.
          </motion.p>
          <br />
          <br />
          <span className="text-xl font-extrabold tracking-tight">
            Interior design is an ever-evolving art form that blends creativity
            with functionality. Whether you're looking to refresh a single room
            or redesign your entire home, embracing the principles of interior{" "}
          </span>
          <motion.div
            initial="initial"
            whileInView={"whileInView"}
            variants={paraVariants}
            className="pt-6"
          >
            <Button className="px-8 py-4 rounded-full hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 text-white">
              Read More <TbArrowUpRight />
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto">
        <h1 className="text-center text-4xl tracking-wider pt-24 pb-8 font-bold uppercase">
          Team
        </h1>
        <div className="grid py-8 lg:pb-28 lg:pt-14 lg:grid-cols-3 gap-8">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={paraVariants}
            className="border-2 border-orange-400"
          >
            <div className=" p-4 bg-gray-100 aspect-square -m-0.5 text-center -translate-x-2 -translate-y-2">
              <Image
                src="/image/profile2.jpg"
                width={200}
                height={200}
                className="rounded-full mx-auto"
                alt=""
              />
              <h2 className="text-2xl font-semibold py-4 uppercase">
                Starting Surveys
              </h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                minima cupiditate itaque nostrum quasi sunt.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={paraVariants}
            className="border-2 border-orange-400"
          >
            <div className=" p-4 bg-gray-100 aspect-square -m-0.5 text-center -translate-x-2 -translate-y-2">
              <Image
                src="/image/profile1.jpg"
                width={200}
                height={200}
                className="rounded-full mx-auto"
                alt=""
              />
              <h2 className="text-2xl font-semibold py-4 uppercase">
                Starting Surveys
              </h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                minima cupiditate itaque nostrum quasi sunt.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={paraVariants}
            className="border-2 border-orange-400"
          >
            <div className=" p-4 bg-gray-100 aspect-square -m-0.5 text-center -translate-x-2 -translate-y-2">
              <Image
                src="/image/profile3.jpg"
                width={200}
                height={200}
                className="rounded-full mx-auto"
                alt=""
              />
              <h2 className="text-2xl font-semibold py-4 uppercase">
                Starting Surveys
              </h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                minima cupiditate itaque nostrum quasi sunt.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default page;
