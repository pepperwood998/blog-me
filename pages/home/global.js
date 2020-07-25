import { getLayout } from "../../components/layout/HomeLayout";
import FeedCard from "../../components/FeedCard";

export default function HomeGlobal() {
  return (
    <div className="py-5">
      <ul>
        <li>
          <FeedCard />
        </li>
      </ul>
    </div>
  );
}

HomeGlobal.getLayout = getLayout;
