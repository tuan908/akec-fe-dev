import ProductHeader from "@/components/ProductDetail/Header";
import ProductHow from "@/components/ProductDetail/How";
import ProductIngredients from "@/components/ProductDetail/Ingredients";
import {ProductDto, SuccessResponseDto} from "@/lib/types";
import {ResolvingMetadata} from "next";

type Props = {
  params: {id: string};
  searchParams: {[key: string]: string | string[] | undefined};
};

export async function generateMetadata({params}: Props, _: ResolvingMetadata) {
  const id = params.id;
  const response = await fetch(
    process.env.NEXT_PUBLIC_BN_SPRING_API + `/products/${id}`
  );
  const responseJson =
    (await response.json()) as SuccessResponseDto<ProductDto>;
  return {title: responseJson.data?.name};
}

async function getProductDetailById(id: string) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BN_SPRING_API + `/products/${id}`
  );
  const responseJson =
    (await response.json()) as SuccessResponseDto<ProductDto>;
  return responseJson.data;
}

export default async function Page({params}: Props) {
  const data = await getProductDetailById(params.id);

  return (
    <div className="md:w-9/10 md:mx-auto py-12 md:grid md:grid-flow-row h-full">
      <ProductHeader data={data!} />
      <ProductHow />
      <ProductIngredients />
    </div>
  );
}
