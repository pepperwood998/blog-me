import FavoriteIcon from "../assets/svg/favorite.svg";
import Link from "next/link";

export default function FeedCard({ title, createdAt, favoritesCount }) {
  return (
    <div className="border-b border-gray-300">
      <div className="flex">
        <div className="flex items-center justify-center w-10 h-10 overflow-hidden mr-2">
          <img src="/placeholder.png" className="w-full" />
        </div>
        <div className="flex-1">
          <Link href="/profile/username">
            <a className="hover:underline">lebabadook</a>
          </Link>
          <div>
            <span className="text-sm text-gray-500">Sat Jul 25 2020</span>
          </div>
        </div>
        <div className="max-w-xs">
          <button className="flex items-center border rounded px-2 py-1 hover:text-gray-100 hover:bg-gray-700">
            <FavoriteIcon className="w-4 h-4" />
            <span className="text-sm">0</span>
          </button>
        </div>
      </div>
      <div className="py-4">
        <h3 className="text-xl font-bold">
          <Link href="/article/slug">
            <a>Article Title</a>
          </Link>
        </h3>
        <p className="text-sm text-gray-700 mb-4">
          Description for this Article
        </p>
        <Link href="/article/slug">
          <a className="text-xs text-gray-500">Read more...</a>
        </Link>
      </div>
    </div>
  );
}
