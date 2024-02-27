"use client";

import {Carousel} from "@/components/Home";
import type {ProductDto} from "@/lib/types";
import ProductDetailText from "./ProductDetailText";

interface Props {
  data: ProductDto;
}

const urls = [
  "https://images-assets.nasa.gov/image/PIA13014/PIA13014~small.jpg",
  "https://images-assets.nasa.gov/image/carina_nebula/carina_nebula~small.jpg"
];

export default function ProductHeader(props: Props) {
  return (
    <div className="flex flex-row justify-evenly">
      {/* <Carousel imageUrls={urls} />
      <ProductDetailText data={props.data} /> */}
    </div>
  );
}
