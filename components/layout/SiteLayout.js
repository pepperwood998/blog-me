import { useState } from "react";
import classNames from "classnames";
import Head from "next/head";
import MenuCloseIcon from "../../assets/svg/menu-close.svg";
import MenuOpenIcon from "../../assets/svg/menu-open.svg";
import TailwindIcon from "../../assets/svg/tailwind.svg";
import NavLink from "../NavLink";
import { Case, Default, Switch } from "../react-switch";

export default function SiteLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = e => {
    e.preventDefault();
    setIsOpen(o => !o);
  };

  return (
    <div className="site-layout">
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="bg-gray-900 text-white sticky top-0">
        <div className="md:flex md:justify-between container">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center px-4 py-3">
              <TailwindIcon className="w-8 h-8 mr-2" />
              <span>Conduit</span>
            </a>
            <div className="md:hidden">
              <button
                onClick={handleToggle}
                className="block px-4 py-2 text-gray-500 hover:text-white focus:text-white focus:outline-none"
              >
                <Switch param={isOpen}>
                  <Case value={true}>
                    <MenuOpenIcon className="w-5 h-5" />
                  </Case>
                  <Default>
                    <MenuCloseIcon className="w-5 h-5" />
                  </Default>
                </Switch>
              </button>
            </div>
          </div>
          <div
            className={classNames({
              "pb-4 md:flex md:items-center md:pb-0": true,
              block: isOpen,
              hidden: !isOpen
            })}
          >
            <ul className="md:flex">
              <li>
                <NavLink
                  href="/home"
                  extra={["/"]}
                  className="nav-link mx-2 md:mx-0"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/editor"
                  className="nav-link mt-2 md:mt-0 mx-2 md:ml-2 md:mr-0"
                >
                  New Post
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/settings"
                  className="nav-link mt-2 md:mt-0 mx-2 md:ml-2 md:mr-0"
                >
                  Settings
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container mt-8">{children}</main>
    </div>
  );
}

export const getLayout = page => <SiteLayout>{page}</SiteLayout>;
