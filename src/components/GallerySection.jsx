import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const data = [
  {
    id: "01",
    category: "BEDROOM SETUP",
    image: "/image/badroom.jpg",
    description:
      "family drawing room with a clean and comfortable design for your future house",
  },
  {
    id: "02",
    category: "DRAWINGROOM SETUP",
    image: "/image/drowing.jpg",
    description:
      "family drawing room with a clean and comfortable design for your future house",
  },
  {
    id: "03",
    category: "KITCHEN SETUP",
    image: "/image/kitchen1.jpg",
    description:
      "family drawing room with a clean and comfortable design for your future house",
  },
  {
    id: "01",
    category: "LIVINGROOM SETUP",
    image: "/image/living.jpg",
    description:
      "family drawing room with a clean and comfortable design for your future house",
  },
];

const GallerySection = () => {
  return (
    <div className="pb-12 grid place-items-center gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 divide-gray-300 divide-x">
      {data.map((item) => (
        <div key={item.id} className="relative">
          <div>
            <Image src={item.image} height={100} width={380} alt="" />
          </div>
          <div className="absolute top-0 bg-white bg-opacity-35 backdrop-blur p-8 m-12">
            <div className="flex justify-between font text-lg">
              <p>{item.category}</p>
              <span>{item.id}</span>
            </div>
            <p className="text-sm">{item.description}</p>
            <a href="">
              See Details <FaLongArrowAltRight />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GallerySection;
