import {chonburi, cn, formatMoney} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import styles from "./product-card.module.scss";

type ProductCardProps = {
  previewImageUrl?: string;
  name: string;
  price: number;
  href: string;
};

export function ProductCard({
  previewImageUrl,
  name,
  price,
  href
}: ProductCardProps) {
  return (
    <Link href={href} className="w-full h-full">
      <figure className={styles.productCard}>
        <div className={styles.productCardImage}>
          <Image
            className="w-full h-full rounded-md"
            src={previewImageUrl ?? ""}
            width={540}
            height={960}
            alt=""
          />
        </div>
        <figcaption className={styles.productCardCaption}>
          <h2 className={cn("text-xl", chonburi.className)}>{name}</h2>
          <h3 className="text-base font-thin py-1">
            {formatMoney(price.toString())}
          </h3>
        </figcaption>
      </figure>
    </Link>
  );
}
