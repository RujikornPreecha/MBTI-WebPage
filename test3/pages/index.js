export default function About() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark mainNavbar"
        // style="background-color: #251762"
      >
        <div class="container">
          <a class="navbar-brand" href="./index.html">
            <img
              src="/images/LogoWhite.png"
              class="navbar-brand-img"
              alt="..."
              alt=""
              width="170"
            />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            // style="border-color: white"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav col-12 ms-auto nav-fill">
              <li class="nav-item activeclass=" nav-item col-6 col-md-auto>
                <a class="nav-link" href="./index.html">
                  Home Page<span class="sr-only"></span>
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item activeclass=" nav-item col-6 col-md-auto>
                <a class="nav-link" href="/personalities">
                  Personality Test
                </a>
              </li>
              <li class="nav-item activeclass=" nav-item col-6 col-md-auto>
                <a class="nav-link" href="/about">
                  About us
                </a>
              </li>

              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  type="button"
                  class="btn btn-primary btn-ml"
                  aria-label="TwitterLogin"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    fill="currentColor"
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                  Twitter Log in
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container"></div>
    </div>
  );
}
