import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "classnames";

function NavLink({
  children,
  href = "",
  extra = [],
  className = "",
  activeClass = "active"
}) {
  const router = useRouter();
  const isActive =
    router.pathname.includes(href) ||
    (Array.isArray(extra) && extra.includes(router.pathname));

  return (
    <Link href={href} scroll={false}>
      <a
        className={classNames({
          [className]: true,
          [activeClass]: isActive
        })}
      >
        {children}
      </a>
    </Link>
  );
}

export default NavLink;
