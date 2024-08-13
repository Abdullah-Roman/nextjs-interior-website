"use client";
import { tagVariants } from "@/utils/Animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
const Footer = () => {
  return (
    <>
      <div className="container mx-auto bg-gray-300 grid gap-4 place-items-center md:grid-cols-2 lg:grid-cols-4 py-12 dark:bg-[#0A192F] dark:text-white">
        <motion.div
          initial="initial"
          whileInView={"whileInView"}
          variants={tagVariants}
        >
          <h3 className="pb-4 text-xl font-semibold uppercase">Company info</h3>
          <div className="flex flex-col items-start">
            <Link href="#" className="py-1 hover:underline">
              About Us
            </Link>
            <Link href="#" className="py-1 hover:underline">
              Press
            </Link>
            <Link href="#" className="py-1 hover:underline">
              Careers
            </Link>
            <Link href="#" className="py-1 hover:underline">
              Contact
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView={"whileInView"}
          variants={tagVariants}
        >
          <h3 className="pb-4 text-xl font-semibold uppercase">Development</h3>
          <div className="flex flex-col items-start">
            <Link href="#" className="py-1 hover:underline">
              Documentation
            </Link>
            <Link href="#" className="py-1 hover:underline">
              Reference
            </Link>
            <Link href="#" className="py-1 hover:underline">
              Changelog
            </Link>
            <Link href="#" className="py-1 hover:underline">
              Status
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView={"whileInView"}
          variants={tagVariants}
        >
          <h3 className="pb-4 text-xl font-semibold uppercase">Social Media</h3>
          <div className="flex flex-col items-start">
            <Link href="#" className="py-1 hover:underline">
              Facebook
            </Link>
            <Link href="#" className="py-1 hover:underline">
              Twitter
            </Link>
            <Link href="#" className="py-1 hover:underline">
              Linkedin
            </Link>
            <Link href="#" className="py-1 hover:underline">
              Instragram
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView={"whileInView"}
          variants={tagVariants}
        >
          <p className="pb-4">
            You will find best interior solution here. World class mentor and
            facility to decor your home.
          </p>
          <div className="relative">
            <Input
              type="text"
              placeholder="Enter Your Mail"
              className="h-[55px] rounded-full"
            />
            <Button className="absolute top-2 right-2 rounded-full">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
      <div>
        <p className="text-center  bg-black text-white py-4">
          &copy; Abdullah Al Roman{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
