import Image from "next/image";

const project = [
  {
    id: 1,
    name: "Drawing room for family time",
    des: "Bedroom with clean and comfortable design for your family, charming with a modern design",
    image: "/image/project3.jpg",
  },
  {
    id: 2,
    name: "Kitchen look modern and clean",
    des: "kitchen with clean and comfortable design for your family, charming with a modern design",
    image: "/image/project2.jpg",
  },
  {
    id: 3,
    name: "Perfect living room for family time",
    des: "Living room with clean and comfortable design for your family, charming with a modern design",
    image: "/image/project4.png",
  },
  {
    id: 4,
    name: "Drawing room for family time",
    des: "Bedroom with clean and comfortable design for your family, charming with a modern design",
    image: "/image/project3.jpg",
  },
];

const page = () => {
  return (
    <div>
      <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover">
        <div>
          <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">
            Our Projects
          </h1>
        </div>
      </div>
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 py-8">
        {project.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-xl group"
          >
            <Image
              src={item.image}
              height={380}
              width={480}
              alt=""
              className="w-full"
            />
            <div className="absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex flex-col items-center justify-end w-96 gap-12 p-12 text-xl transition duration-300 ease-in-out translate-y-full from-transprent to-black group-hover:translate-y-0 ">
              <h1 className="text-2xl font-semibold">{item.name}</h1>
              <p className="py-4">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
