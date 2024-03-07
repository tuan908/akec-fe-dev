import {Route} from "@/routes";
import {signOut} from "@/lib/utils";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {type Session} from "next-auth";
import {signIn} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

type Anchor = "left";
type SidebarProps = {session: Session | null};

export default function Sidebar({session}: SidebarProps) {
  const [isToggle, setToggle] = useState({
    left: false
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setToggle({...isToggle, [anchor]: open});
    };
  return (
    <>
      <div
        className="w-1/8 flex justify-start items-center sm:hidden"
        onClick={toggleDrawer("left", true)}
        onKeyDown={toggleDrawer("left", true)}
      >
        <MenuIcon fontSize="large" />
      </div>

      <SwipeableDrawer
        sx={{width: 300}}
        anchor={"left"}
        open={isToggle["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
        disableBackdropTransition
      >
        <ul className="bg-white">
          <li
            className="w-full p-4 flex items-center justify-center"
            onClick={toggleDrawer("left", false)}
          >
            <Link href={Route.Home}>
              <Image
                src="/assets/image/logo.jpg"
                alt="logo"
                width={300}
                height={24}
                className="w-full hover:opacity-90"
                priority
              />
            </Link>
          </li>
          <li
            className="pb-4 px-8 font-bold"
            onClick={toggleDrawer("left", false)}
          >
            <Link href={Route.Home}>HOME</Link>
          </li>
          {[Route.Post, Route.Products, Route.Contact, Route.Cart].map(
            (route, index) => (
              <li
                key={index}
                className="py-4 px-8 font-bold"
                onClick={toggleDrawer("left", false)}
              >
                <Link href={route}>{route.replace("/", "").toUpperCase()}</Link>
              </li>
            )
          )}
          <Component2Render toggleFn={toggleDrawer} session={session} />
        </ul>
      </SwipeableDrawer>
    </>
  );
}

type RenderProps = {
  toggleFn: (
    anchor: Anchor,
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  session: Session | null;
};
const Component2Render = ({toggleFn: fn, session}: RenderProps) =>
  session !== null ? (
    <li
      onClick={() => {
        fn("left", false);
        signOut();
      }}
    >
      Sign out
    </li>
  ) : (
    <li
      onClick={() => {
        fn("left", false);
        signIn();
      }}
    >
      Sign in
    </li>
  );
