import {Thumbnail} from "@/components/Home";
import {ProductCard} from "@/components/shared";
import {ImageDto} from "@/lib/redux/post/post.api";
import {SuccessResponseDto} from "@/lib/types";

async function getImageList() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BN_SPRING_API + "/shared/images/list"
  );
  const responseBody = await response.json();
  return responseBody as SuccessResponseDto<ImageDto>;
}

/**
 *
 * @returns Product List
 */
export default async function Page() {
  const response = await getImageList();
  return (
    <div className="mx-auto h-full mb-12">
      <Thumbnail />
      <ProductCard imgUrls={response.data} />
    </div>
  );
}
