import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div >
        <Image src="/img/1.jpg" alt="picture" width={1200} height={500}/>
      </div>
    </div>
  );
}
