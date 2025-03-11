import Image from "next/image";

import NavBar from "@/sections/navigation/navBar";
import onground from "@/assets/img/OnGround1.png";


export default function Home() {
  return (
    <div>
      <NavBar />
      <Image src={onground} alt="hero" width={1920} height={1080} />
    </div>
  );
}
