import Image from "next/image";
import vector from "@/assets/img/Vector.svg";
import marker from "@/assets/img/marker.svg";
import marker2 from "@/assets/img/marker2.svg";
import whatsapp from "@/assets/img/whatsapp.svg";
import arrowRight from "@/assets/img/arrow-right.svg";
import c3ntro1 from "@/assets/img/C3NTRO1.png";
import c3ntro2 from "@/assets/img/C3NTRO2.jpeg";
import c3ntro3 from "@/assets/img/C3NTRO3.jpeg";

export default function Ubicaciones() {
  return (
    <div className="c3ntro-wrapper">
      <div className="c3ntro-wrapper-content sm:mx-1 md:mx-12 lg:mx-12 xl:mx-12 2xl:mx-12">
        <div className="flex items-center justify-center">
          <h2 className="nuestras-ubicaciones text-2xl font-bold text-white text-center py-6">
            NUESTRAS
          </h2>
          <h2 className="nuestras-ubicaciones text-2xl font-bold text-center py-6 px-2 text-[#CCDEC0]">
            UBICACIONES
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Ubicación CAES */}
          <div className="bg-card-c3ntro-1 p-4 text-center h-fit flex flex-col">
            <div className="mb-2">
              <Image src={marker} alt="location-icon" className="mx-auto" />
              <h3 className="text-xl font-semibold text-c3ntro-blue-secondary mt-4">CAES</h3>
            </div>
            <p className="text-c3ntro-blue-secondary mb-4">
              Km 15.5 carretera a El Salvador, Plaza concepción local L29, Nivel 2
            </p>
            <div className="bg-card-c3ntro-2-button text-white p-2 rounded-lg flex items-center justify-center gap-6">
              <a
                href={`https://wa.me/37644227?text=${encodeURIComponent("Hola, quisiera más información")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={whatsapp} alt="whatsapp-icon"  />
              </a>
              <span className="text-lg font-medium">3764 4227</span>
              <a href="tel:37644227">
                <Image src={arrowRight} alt="call-icon" />
              </a>
            </div>
            <Image src={c3ntro2} alt="c3ntro-caes" className="mx-auto mt-4 w-full h-[300px] object-cover rounded-lg" />
          </div>

          {/* Ubicación NOGALES */}
          <div className="bg-card-c3ntro-2 p-4 text-center h-fit flex flex-col">
            <div className="mb-2">
              <Image src={marker2} alt="location-icon" className="mx-auto" />
              <h3 className="text-xl font-semibold text-white mt-4">NOGALES</h3>
            </div>
            <p className="text-white mb-4">Blvd Rafael Landívar, Nogales de Cayalá, 216. Local 21</p>
            <div className="bg-card-c3ntro-2-button text-white p-2 rounded-lg flex items-center justify-center gap-6">
              <a
                href={`https://wa.me/35708798?text=${encodeURIComponent("Hola, quisiera más información")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={whatsapp} alt="whatsapp-icon"  />
              </a>
              <span className="text-lg font-medium">3570 8798</span>
              <a href="tel:35708798">
                <Image src={arrowRight} alt="call-icon"  />
              </a>
            </div>
            <Image src={c3ntro1} alt="c3ntro-nogales" className="mx-auto mt-4 w-full h-[300px] object-cover rounded-lg" />
          </div>

          {/* Ubicación TIFFANY */}
          <div className="bg-card-c3ntro-3 p-4 text-center h-fit flex flex-col">
            <div className="mb-2">
              <Image src={marker} alt="location-icon" className="mx-auto" />
              <h3 className="text-xl font-semibold text-c3ntro-blue-secondary mt-4">TIFFANY</h3>
            </div>
            <p className="text-c3ntro-blue-secondary mb-4">
              5 Avenida 3-51, zona 14, Galerías Tiffany, segundo nivel
            </p>
            <div className="bg-card-c3ntro-2-button text-white p-2 rounded-lg flex items-center justify-center gap-6">
              <a
                href={`https://wa.me/35713792?text=${encodeURIComponent("Hola, quisiera más información")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={whatsapp} alt="whatsapp-icon"  />
              </a>
              <span className="text-lg font-medium">3571 3792</span>
              <a href="tel:35713792">
                <Image src={arrowRight} alt="call-icon"  />
              </a>
            </div>
            <Image src={c3ntro3} alt="c3ntro-tiffany" className="mx-auto mt-4 w-full h-[300px] object-cover rounded-lg" />
          </div>
        </div>
      </div>
      <div className="c3ntro-wrapper-background bg-c3ntro-blue">
        <Image
          src={vector}
          alt="vector"
          width={"100vw"}
          height={"100vh"}
          style={{ opacity: 0.2, transform: "rotate(180deg) scale(1.5) translate(-20%, 10%)" }}
        />
      </div>
    </div>
  );
}
