"use client";

import {Route} from "@/routes";
import {useAppSelector} from "@/lib/redux/hooks";
import {orderList} from "@/lib/redux/order/order.slice";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Avatar from "./Avatar";
import Logo from "./Logo";
import styles from "./navbar.module.scss";

export default function Navbar() {
  const pathname = usePathname();
  const ordersCount = useAppSelector(orderList).length;
  // const authProps = useAuth();

  return (
    <nav
      className="p-2 w-full sticky top-0 left-0 flex sm:inline-grid sm:grid-cols-5 place-items-center mx-auto shadow-2xl font-medium text-lg text-white bg-[#2c2519]"
      style={{
        gridArea: "navbar",
        zIndex: "49"
      }}
    >
      {/* <Sidebar {...authProps} /> */}
      <Link
        href={Route.Post}
        className={`hidden sm:block cursor-pointer ${
          Route.Post === pathname ? "opacity-1" : "opacity-60"
        }`}
      >
        Tin tức
      </Link>
      <Link
        href={Route.Products}
        className={`hidden sm:block ${styles.productMenu} ${
          pathname.includes("products") ? "opacity-1" : "opacity-60"
        }`}
      >
        Sản phẩm
        <ul className={`hidden ${styles.submenu}`}>
          <li id={styles.liTest} className="px-4 py-2 w-full relative">
            Thường
            <ul id={styles.ulTest} className="hidden">
              <li className="px-4 py-2">Sản phẩm 1</li>
              <li className="px-4 py-2">Sản phẩm 1</li>
              <li className="px-4 py-2">Sản phẩm 1</li>
            </ul>
          </li>
          <li className="px-4 py-2 w-full">
            <span>Trung bình</span>
            <ul id="submenu-2" className="hidden">
              <li>Sản phẩm 1</li>
              <li>Sản phẩm 1</li>
            </ul>
          </li>
          <li className="px-8 py-2">
            Cao cấp
            <ul id="submenu-1" className="hidden">
              <li>Sản phẩm 1</li>
            </ul>
          </li>
        </ul>
      </Link>
      <Logo />
      {/* <Link href={Routes.CART} className='cursor-pointer hover:opacity-100'> */}
      {/* <Badge badgeContent={currentCartItems}>
          <ShoppingCart />
        </Badge> */}
      {/* Giỏ hàng
      </Link> */}
      <Link
        href={Route.Contact}
        className={`hidden sm:block cursor-pointer ${
          Route.Contact === pathname ? "opacity-1" : "opacity-60"
        }`}
      >
        Liên hệ
      </Link>
      <Avatar ordersCount={ordersCount} session={null} ready={false} />
    </nav>
  );
}
