import { useRouter } from "next/router";
import FeedCard from "../../components/FeedCard";
import useFetchListArticle from "../../components/hook/useFetchListArticle";
import { getLayout } from "../../components/layout/HomeLayout";
import { Case, Default, Switch } from "../../components/react-switch";

export default function HomeGlobal() {
  const { query } = useRouter();
  const [articleData, loading, error] = useFetchListArticle(
    query.offset,
    query.limit
  );

  return (
    <div className="py-5">
      <Switch param={loading}>
        <Case value={true}>
          <h4>Loading...</h4>
        </Case>
        <Default>
          <Switch param={error !== ""}>
            <Case value={true}>
              <h3>Failed to load articles.</h3>
            </Case>
            <Default>
              <Switch param={articleData.articles.length}>
                <Case value={0}>
                  <h3>No articles available.</h3>
                </Case>
                <Default>
                  <ul>
                    {articleData.articles.map((a, i) => (
                      <li className="feed-card-wrapper" key={i}>
                        <FeedCard article={{ ...a }} />
                      </li>
                    ))}
                  </ul>
                </Default>
              </Switch>
            </Default>
          </Switch>
        </Default>
      </Switch>
    </div>
  );
}

HomeGlobal.getLayout = getLayout;
