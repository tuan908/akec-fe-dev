import {Thumbnail} from "@/components/Home";
import {ProductCard} from "@/components/shared";
import type {Paged, ProductDto, SuccessResponseDto} from "@/lib/types";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Sản phẩm"
};

async function getProductList() {
  const url = process.env.NEXT_PUBLIC_BN_SPRING_API + "/products/list";
  const response = await fetch(url);
  const responseBody = (await response.json()) as SuccessResponseDto<
    Paged<ProductDto>
  >;
  return responseBody?.data?.content;
}

/**
 *
 * @returns Product List
 */
export default async function Page() {
  const data = await getProductList();
  return (
    <div className="mx-auto h-full mb-12">
      <Thumbnail />
      <div className="w-11/12 m-auto p-8 grid place-items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map(x => (
          <ProductCard
            key={x.id}
            name={x.name}
            price={x.price}
            previewImageUrl={x.previewImage}
            href={`/products/${x.id}`}
          />
        ))}
      </div>
    </div>
  );
}
