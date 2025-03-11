import Image from "next/image";

import NavBar from "@/sections/navigation/navBar";
import onground from "@/assets/img/OnGround1.png";

import Ubicaciones from "@/sections/page-sections/ubicaciones";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Image src={onground} alt="hero" width={"100%"} height={"100%"} />
      <Ubicaciones />
    </div>
  );
}
