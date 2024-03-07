import { Carousel, Thumbnail } from "@/components/Home";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang chủ"
};

export default async function Page() {
  return (
    <>
      <Thumbnail />

      <Slogan>Chúng mình biết bạn có rất nhiều sự lựa chọn</Slogan>
      <Slogan>Cảm ơn bạn đã đặt niềm tin nơi AKEC</Slogan>

      <Carousel imageUrls={[]} />
    </>
  );
};

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
