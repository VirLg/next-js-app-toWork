import Image from 'next/image';
import Sidebar from '../app/components/sidebar/Sidebar';
import ContentBlock from './components/content/ContentBlock';
import BanerPage from './components/baner/BanerPage';
export default function Home() {
  return (
    <main className="">
      <div className="container pt-[124px] ">
        <BanerPage />
        <div className="flex">
          <div>
            <Sidebar />
          </div>
          <div>
            <ContentBlock />
          </div>
        </div>
      </div>
    </main>
  );
}
