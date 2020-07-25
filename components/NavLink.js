import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function NavLink({
  children,
  href = "",
  extra = [],
  className = "",
  activeClass = "active"
}) {
  const router = useRouter();
  if (
    router.pathname.includes(href) ||
    (Array.isArray(extra) && extra.includes(router.pathname))
  ) {
    className += ` ${activeClass}`;
  }

  return (
    <Link href={href} scroll={false}>
      <a className={className.trim()}>{children}</a>
    </Link>
  );
}

export default NavLink;
