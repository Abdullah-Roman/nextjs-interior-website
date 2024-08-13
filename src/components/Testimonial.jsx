"use client";
import { paraVariants, tagVariants } from "@/utils/Animation";
import { motion } from "framer-motion";
import Image from "next/image";

const post = [
  {
    image: "/image/star.svg",
    ratting: 4.7,
    title: "Boost Your Conversation Rate",
    des: "It is a fantastic theme with design and layout options, and the customer service is simply outstanding. They respond immediately and solve any inconvenience, no matter how small. ",
    author: "Natasha",
    role: "Co Founder",
    images: "/image/profile1.jpg",
  },
  {
    image: "/image/star.svg",
    ratting: 4.8,
    title: "Boost Your Conversation Rate",
    des: "It is a fantastic theme with design and layout options, and the customer service is simply outstanding. They respond immediately and solve any inconvenience, no matter how small. ",
    author: "Natasha",
    role: "President",
    images: "/image/profile2.jpg",
  },
  {
    image: "/image/star.svg",
    ratting: 4.9,
    title: "Boost Your Conversation Rate",
    des: "It is a fantastic theme with design and layout options, and the customer service is simply outstanding. They respond immediately and solve any inconvenience, no matter how small. ",
    author: "Natasha",
    role: "CEO",
    images: "/image/profile3.jpg",
  },
];

const Testimonial = () => {
  return (
    <div className="container mx-auto  py-12 grid lg:grid-cols-3 gap-6 place-items-center dark:bg-[#0A192F] dark:text-white">
      {post.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between">
            <div>
              <Image src={item.image} width={80} height={5} alt="" />
            </div>
            <span className="px-3 py-1 bg-orange-500 rounded-full text-white">
              {item.ratting}
            </span>
          </div>
          <div>
            <motion.h1
              initial="initial"
              whileInView={"whileInView"}
              variants={tagVariants}
              className="text-xl font-medium"
            >
              {item.title}
            </motion.h1>
            <motion.p
              initial="initial"
              whileInView={"whileInView"}
              variants={paraVariants}
              className="text-black/70 py-4 dark:text-white"
            >
              {item.des}
            </motion.p>
            <Image
              src={item.images}
              height={300}
              width={300}
              alt="pic"
              className="w-10 h-10 rounded-full"
            />
            <p className="text-base py-2">{item.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
