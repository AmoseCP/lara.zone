import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div >
        <h1>正在开发当中。。。请耐心等待！！！</h1>
        <Image src="/img/1.jpg" alt="picture" width={500} height={500}/>
      </div>
    </div>
  );
}
