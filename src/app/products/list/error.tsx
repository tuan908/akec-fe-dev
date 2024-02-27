"use client";

import {Wrapper} from "@/components/shared";
import Link from "next/link";

export default function Error() {
  return (
    <Wrapper>
      <h1 className="text-red-500 text-4xl">Error while loading page</h1>
      <Link href="/">Quay về trang chủ</Link>
    </Wrapper>
  );
}
