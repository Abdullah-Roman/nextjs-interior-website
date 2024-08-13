import Image from "next/image";

const page = () => {
  return (
    <div className="container mx-auto py-10 grid grid-cols-2 md:grid-cols-4 gap-4 ">
      <div className="flex flex-col gap-4">
        <div>
          <Image
            src="/image/badroom.jpg"
            height={300}
            width={300}
            alt=""
            className="hover:scale-90 transition-all h-auto max-w-full rounded-lg"
          />
        </div>
        <div>
          <Image
            src="/image/gallery2.jpg"
            height={300}
            width={300}
            alt=""
            className="hover:scale-90 transition-all h-auto max-w-full rounded-lg"
          />
        </div>
        <div>
          <Image
            src="/image/gallery.jpg"
            height={300}
            width={300}
            alt=""
            className="hover:scale-90 transition-all h-auto max-w-full rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            src="/image/swiper1.jpg"
            height={300}
            width={300}
            alt=""
            className="hover:scale-90 transition-all h-auto max-w-full rounded-lg"
          />
        </div>
        <div>
          <Image
            src="/image/gallery11.jpg"
            height={300}
            width={300}
            alt=""
            className="hover:scale-90 transition-all h-auto max-w-full rounded-lg"
          />
        </div>
        <div>
          <Image
            src="/image/living.jpg"
            height={300}
            width={300}
            alt=""
            className="hover:scale-90 transition-all h-auto max-w-full rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            src="/image/gallery14.jpg"
            height={300}
            width={300}
            alt=""
            className="hover:scale-90 transition-all h-auto max-w-full rounded-lg"
          />
        </div>
        <div>
          <Image
            src="/image/gallery15.jpg"
            height={300}
            width={300}
            alt=""
            className="hover:scale-90 transition-all h-auto max-w-full rounded-lg"
          />
        </div>
        <div>
          <Image
            src="/image/gallery12.jpg"
            height={300}
            width={300}
            alt=""
            className="hover:scale-90 transition-all h-auto max-w-full rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            src="/image/gallery7.jpg"
            height={300}
            width={300}
            alt=""
            className="hover:scale-90 transition-all h-auto max-w-full rounded-lg"
          />
        </div>
        <div>
          <Image
            src="/image/gallery11.jpg"
            height={300}
            width={300}
            alt=""
            className="hover:scale-90 transition-all h-auto max-w-full rounded-lg"
          />
        </div>
        <div>
          <Image
            src="/image/gallery3.jpg"
            height={300}
            width={300}
            alt=""
            className="hover:scale-90 transition-all h-auto max-w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
