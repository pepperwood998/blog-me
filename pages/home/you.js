import { getLayout } from "../../components/layout/HomeLayout";

export default function HomeYou() {
  return (
    <div className='py-5'>
      <h3>Your Feed</h3>
    </div>
  );
}

HomeYou.getLayout = getLayout;
