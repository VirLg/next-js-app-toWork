import Image from 'next/image';
import Sidebar from '../app/components/sidebar/Sidebar';
export default function Home() {
  return (
    <main className="">
      <div className="container pt-[124px]">
        <Sidebar />
      </div>
    </main>
  );
}
