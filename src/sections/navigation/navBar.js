import Image from "next/image";
import logo from "@/assets/img/Group 9036.svg";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg position-absolute top-2 z-index-3 w-100 shadow-none my-3 navbar-transparent">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand font-weight-bold d-none d-md-block" href="#">
            <Image src={logo} alt="Logo" width={150} height={150} />
          </a>

          {/* Botón del menú en móviles */}
          <button
            className="navbar-toggler shadow-none ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon mt-2">
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </span>
          </button>

          {/* Menú */}
          <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
            <ul className="navbar-nav navbar-nav-hover ms-auto">
              <li className="nav-item mx-2">
                <a className="nav-link text-white fw-bold" href="#">Estudios</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-white fw-bold" href="#">ON GROUND</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
