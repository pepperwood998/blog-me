import Link from "next/link";
import { useRouter } from "next/router";
import { getLayout as getSiteLayout } from "./SiteLayout";
import NavLink from "../NavLink";

export default function HomeLayout({ children }) {
  const router = useRouter();
  const tags = ["covid19", "BackLivesMatter", "AOC", "Hamilton", "racism"];

  return (
    <div className="home-page md:flex ">
      <div className="w-full md:w-9/12 pr-0 md:pr-8">
        <nav>
          <div className="border-b border-gray-300 overflow-x-auto scrollbar-none">
            <ul className="flex">
              <li>
                <NavLink href="/home/you" className="nav-tab-link">
                  Your Feed
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/home/global"
                  extra={["/", "/home"]}
                  className="nav-tab-link"
                >
                  Global Feed
                </NavLink>
              </li>
              {router.pathname === "/home/tag" && (
                <li>
                  <span className="nav-tab-link active">
                    {`# ${router.query.values}`}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </nav>
        <div>{children}</div>
      </div>
      <div className="w-full px-3 py-4 md:py-0 md:w-1/4">
        <div className="bg-primary-200 p-3 rounded">
          <h4 className="text-sm text-primary-300 mb-2">Popular Tags</h4>
          <div>
            <ul className="flex flex-wrap">
              {tags.map((t, i) => (
                <li key={i} className="mr-1 mb-1 max-w-full">
                  <Link href={`/home/tag?values=${t}`}>
                    <a className="block px-2 py-1 truncate bg-primary-600 text-primary-900 text-xs rounded-full hover:bg-primary-700">
                      {t}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getLayout = page => getSiteLayout(<HomeLayout>{page}</HomeLayout>);
