"use client";

import {useHasMounted} from "@/hooks";
import {type ImageDto} from "@/lib/redux/post/post.api";
import {cn} from "@/lib/utils";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import {motion, useAnimate} from "framer-motion";
import Image from "next/image";
import {useEffect, useRef, useState, type MouseEventHandler} from "react";

type CarouselProps = {
  imageUrls?: ImageDto[];
};

export function Carousel({imageUrls}: CarouselProps) {
  const [scope, animate] = useAnimate();
  const [carouselIndex, setIndex] = useState(0);
  const itemRef = useRef<HTMLDivElement>(null);
  const isMounted = useHasMounted();

  const handleDecrement: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    setIndex(prevIndex => (prevIndex >= 1 ? prevIndex - 1 : prevIndex));
  };

  const handleIncrement: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    // Display 3 images (lg/xl/2xl)
    setIndex(prevIndex => (prevIndex < 9 ? prevIndex + 1 : prevIndex));
  };

  useEffect(() => {
    if (isMounted) {
      animate(
        scope.current,
        {
          x: `calc(-${itemRef?.current?.offsetWidth}px * ${carouselIndex})`
        },
        {ease: "easeInOut"}
      );
    }
  }, [animate, carouselIndex, isMounted, scope]);

  return (
    <div className="w-3/4 flex flex-row m-auto justify-center items-center">
      <button onClick={handleDecrement}>
        <ChevronLeft className="text-4xl md:text-6xl cursor-pointer outline-none" />
      </button>
      <div
        className="cursor-grab overflow-hidden w-3/5 mx-auto touch-none my-10 relative flex flex-row"
        ref={scope}
      >
        {imageUrls?.map((dto, urlIndex) => (
          <motion.div
            key={urlIndex}
            className="min-w-full lg:min-w-1/3 p-4 rounded-lg pointer-events-none"
            ref={itemRef}
          >
            <Image
              className={cn(
                `rounded-md shadow-lg h-full`,
                urlIndex === carouselIndex + 1
                  ? `scale-105 ease-in-out duration-300`
                  : `scale-95 ease-in-out duration-300`
              )}
              src={dto.url}
              width={1920}
              height={3411}
              alt=""
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      <button onClick={handleIncrement}>
        <ChevronRight className="text-4xl md:text-6xl cursor-pointer outline-none" />
      </button>
    </div>
  );
}
