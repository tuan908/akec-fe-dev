import {ACCESS_TOKEN, REFRESH_TOKEN, USER_INFO} from "@/constants";
import {Route} from "@/routes";
import Cookies from "js-cookie";

export function signOut() {
  Cookies.remove(ACCESS_TOKEN);
  Cookies.remove(REFRESH_TOKEN);
  Cookies.remove(USER_INFO);

  window.location.replace(Route.Home);
}
