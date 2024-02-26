"use client";

import ProductHeader from "@/components/ProductDetail/Header";
import ProductHow from "@/components/ProductDetail/How";
import ProductIngredients from "@/components/ProductDetail/Ingredients";
import {useGetProductByIdQuery} from "@/lib/redux/product/product.api";
import {skipToken} from "@reduxjs/toolkit/query";
import {usePathname} from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  const {data} = useGetProductByIdQuery(
    pathname.replaceAll(/(\/products\/)/g, "") ?? skipToken
  );

  return (
    <div className="md:w-9/10 md:mx-auto py-12 md:grid md:grid-flow-row h-full">
      <ProductHeader data={data!} />
      <ProductHow />
      <ProductIngredients />
    </div>
  );
};
export default Page;
