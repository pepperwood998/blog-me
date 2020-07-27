import { getLayout } from "../../components/layout/HomeLayout";
import FeedCard from "../../components/FeedCard";

export default function HomeGlobal() {
  const listArticle = [
    {
      id: "123",
      slug: "fuck-donald-j-trump",
      title: "Go f*** yourself Mrs. President",
      slug: "go-fuck-yourself-mrs-president",
      createdAt: "Sun Jul 26 2020",
      description: "Description for this Article",
      body: "PropTypes.string",
      favoritesCount: 105,
      tagList: ["trump", "idiot", "coward"],
      author: {
        username: "lebabadook"
      }
    }
  ];

  return (
    <div className="py-5">
      <ul>
        {listArticle.map((a, i) => (
          <li className="feed-card-wrapper" key={i}>
            <FeedCard article={{ ...a }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

HomeGlobal.getLayout = getLayout;
