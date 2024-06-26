/**
 * 1. Light Mode = text-gray-500 hover:text-black;
 * 2. Dark Mode = text-gray-400 hover:text-white
 */

import { useTheme } from "@/providers/ThemeProvider";
import { SupportedTheme } from "@/types";
import Link from "next/link";

const getTextColorClassNameForNavLink = (
  currentTheme: SupportedTheme
) => {
  if (currentTheme === SupportedTheme.DARK) {
    return "text-gray-500 hover:text-white";
  }

  if (currentTheme === SupportedTheme.LIGHT) {
    return "text-gray-500/80 hover:text-black";
  }
};

type NavLinkProps = Omit<Parameters<typeof Link>["0"], "to"> & {
  to: string;
} & {
  isCurrentRoute: boolean;
};

const NavLink: React.FC<NavLinkProps> = ({
  isCurrentRoute,
  ...rest
}) => {
  const { theme } = useTheme();

  const textColorClassName = getTextColorClassNameForNavLink(
    theme
  );
  const IS_CURRENT_ROUTE_CLASSNAME = "text-navBar-linkActive nav-link-active";

  return (
    <li className={`focus:outline-none block whitespace-nowrap text-lg font-medium px-5 py-2 nav-link ${textColorClassName} ${isCurrentRoute ? IS_CURRENT_ROUTE_CLASSNAME : null
    }`}>
      <Link
        prefetch={true}
        {...rest}
      />
    </li>
  );
};
export default NavLink;
