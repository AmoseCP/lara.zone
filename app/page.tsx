import Image from "next/image";
import Carousel from "./components/carousel/Carousel";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex flex-row">
          <Carousel />
        </div>
      </div>
    </>
  );
}
