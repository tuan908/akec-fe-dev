import {Thumbnail} from "@/components/Home";
import {type Metadata} from "next";

export const metadata: Metadata = {
  title: "Bài đăng"
};

const Page = () => {
  return (
    <div className="bg-[#F8F0EC]">
      <Thumbnail />

      <div className="w-4/5 mx-auto grid grid-cols-1">Posts</div>
    </div>
  );
};

export default Page;
