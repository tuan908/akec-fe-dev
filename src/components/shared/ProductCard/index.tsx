import type {ImageDto} from "@/lib/redux/post/post.api";
import {chonburi} from "@/lib/utils";
import Link from "next/link";
import {type FunctionComponent} from "react";
import styles from "./product-card.module.scss";
import Image from "next/image";

type ProductCardProps = {
  previewImageUrl: string;
  name: string;
  price: number;
  href: string;
};

export const ProductCard: FunctionComponent<ProductCardProps> = ({
  previewImageUrl,
  name,
  price,
  href
}) => {
  return (
    <Link href={href}>
      <figure className={styles.productCard}>
        <div className={styles.productCardImage}>
          <Image
            className="w-full h-full rounded-md"
            src={previewImageUrl}
            width={540}
            height={960}
            alt=""
          />
        </div>
        <figcaption className={styles.productCardCaption}>
          <h2 className={`text-xl ${chonburi.className}`}>{name}</h2>
          <h3 className="text-base font-thin py-1">{price} VND</h3>
        </figcaption>
      </figure>
    </Link>
  );
};

export default function ProductCollection({imgUrls}: {imgUrls?: ImageDto[]}) {
  return (
    <div className="w-11/12 m-auto p-8 grid place-items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {imgUrls?.map((url, index) => (
        <ProductCard
          key={index}
          name={`Product ${index}`}
          price={1000}
          previewImageUrl={url.url}
          href={`/products/${index}`}
        />
      ))}
    </div>
  );
}
