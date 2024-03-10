import Image from 'next/image';
import Sidebar from '../app/components/sidebar/Sidebar';
import ContentBlock from './components/content/ContentBlock';
export default function Home() {
  return (
    <main className="">
      <div className="container pt-[124px] flex">
        <div>
          <Sidebar />
        </div>
        <div>
          <ContentBlock />
        </div>
      </div>
    </main>
  );
}
