import {Route} from "@/constants";
import {cn} from "@/lib/utils";
import {Yeseva_One} from "next/font/google";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState, type MouseEventHandler} from "react";
import styles from "./navbar.module.scss";

const yesevaOneLocal = Yeseva_One({weight: "400", subsets: ["latin"]});

export default function Logo() {
  const [classes, setClasses] = useState({
    logoPart1: "",
    logoPart2: "",
    logoPart3: ""
  });

  const handleOnMouseEnter: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    setClasses({
      ...classes,
      logoPart1: styles.moveInLeft!,
      logoPart2: styles.hideTxt!,
      logoPart3: styles.moveInRight!
    });
  };
  const pathname = usePathname();

  const handleOnMouseLeave: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    setClasses({
      ...classes,
      logoPart1: styles.moveOutLeft!,
      logoPart2: styles.showTxt!,
      logoPart3: styles.moveOutRight!
    });
  };

  return (
    <>
      {/* Change from img => text */}
      <Link
        href={Route.Home}
        className={cn(
          `w-7/9 flex justify-center items-center sm:w-fit cursor-pointer text-2xl`,
          Route.Home === pathname ? "opacity-1" : "opacity-60",
          yesevaOneLocal.className
        )}
        onMouseEnter={e => handleOnMouseEnter(e)}
        onMouseLeave={e => handleOnMouseLeave(e)}
      >
        {/* <img src={LOGO} alt='AKEC Logo' className='w-10 h-10' /> */}
        <span className="text-center text-3xl flex flex-row">
          <span className={classes.logoPart1}>A</span>
          <span className={classes.logoPart2}>KEC</span>
          <span
            className={cn(
              `text-lg text-right flex items-start justify-start`,
              classes.logoPart3
            )}
          >
            &#174;
          </span>
        </span>
      </Link>
    </>
  );
}
