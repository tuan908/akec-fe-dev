import {Carousel, Thumbnail} from "@/components/Home";
import {ImageDto} from "@/lib/redux/post/post.api";
import {SuccessResponseDto} from "@/lib/types";
import clsx from "clsx";
import {type Metadata} from "next";

export const metadata: Metadata = {
  title: "Trang chủ"
};

async function getImageList() {
  const res = await fetch(
    clsx(process.env.NEXT_PUBLIC_BN_SPRING_API, "/common/images/list"),
    {cache: "no-cache"}
  );
  const responseBody = (await res.json()) as SuccessResponseDto<ImageDto[]>;
  return responseBody.data;
}

const Page = async () => {
  const data = await getImageList();

  return (
    <>
      <Thumbnail />

      <Slogan>Chúng mình biết bạn có rất nhiều sự lựa chọn</Slogan>
      <Slogan>Cảm ơn bạn đã đặt niềm tin nơi AKEC</Slogan>

      <Carousel imageUrls={data!} />
    </>
  );
};

export default Page;

const Slogan = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <h1
      className="w-3/5 leading-10 text-center"
      style={{
        fontFamily: "Brush Script MT Italic",
        margin: "2rem auto",
        fontSize: "2.25rem"
      }}
    >
      {children}
    </h1>
  );
};
