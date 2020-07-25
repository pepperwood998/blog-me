import { getLayout } from "../../components/layout/HomeLayout";

export default function HomeTag({ values }) {
  return (
    <div className="py-5">
      <h3>{values}</h3>
    </div>
  );
}

HomeTag.getLayout = getLayout;
HomeTag.getInitialProps = async ctx => {
  const { values = "" } = ctx.query;
  return { values };
};
