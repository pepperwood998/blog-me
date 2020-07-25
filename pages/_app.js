import SiteLayout from "../components/layout/SiteLayout";
import "../style/global.scss";

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || (page => <SiteLayout>{page}</SiteLayout>);

  return getLayout(<Component {...pageProps} />);
}
