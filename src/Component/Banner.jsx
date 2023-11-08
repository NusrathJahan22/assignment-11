import { Carousel } from "@material-tailwind/react";
 
export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl">
      <img
        src="https://i.ibb.co/1nhxbsz/web-5.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://i.ibb.co/CK3WkbB/mar.webp"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://i.ibb.co/t4CQcfb/de-2.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}