export default function About() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark mainNavbar"
        // style="background-color: #251762"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="/images/LogoWhite.png"
              className="navbar-brand-img"
              alt="..."
              alt=""
              width="170"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            // style="border-color: white"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav col-12 ms-auto nav-fill">
              <li
                className="nav-item activeclassName="
                nav-item
                col-6
                col-md-auto
              >
                <a className="nav-link" href="/">
                  Home Page<span className="sr-only"></span>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className="nav-item activeclassName="
                nav-item
                col-6
                col-md-auto
              >
                <a className="nav-link" href="/personalities">
                  Personality Test
                </a>
              </li>
              <li
                className="nav-item activeclassName="
                nav-item
                col-6
                col-md-auto
              >
                <a className="nav-link" href="/about">
                  About us
                </a>
              </li>

              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  type="button"
                  className="btn btn-primary btn-ml"
                  aria-label="TwitterLogin"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    fill="currentColor"
                    className="bi bi-twitter"
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
      {/* <div className="container">
      </div> */}

      <main className="mainAboutUs">
        <section className="aboutUsSection">
          <h2>About us</h2>
          <p>
            We are 4th years students at Mae Fah Luang University. This website
            is part of our senior project "MYERS-BRRIGGS TYPE INDICATOR (MBTI)
            PREDICTION USING MACHINE LEARNING".
          </p>
          <p>
            For enhance self-understanding by using machine learning to predict
            MBTI's. The Created Model has an ability to predict language
            patterns and behaviors.
          </p>
          <p>
            A project submited to Mae Fah Luang University in partial
            fulfillment of the requirements for the degree bechelor of
            engineering in computer engineering.
          </p>
        </section>

        <section className="memberSection">
          <h2>Members</h2>
          <div className="memberFlex">
            <div>
              <img src="/images/member1.png" alt="" />
              <p>NATTAWADEE PHILUEKRUANG</p>
            </div>
            <div>
              <img src="/images/member2.png" alt="" />
              <p>PORNPANSA CHANLHA</p>
            </div>
            <div>
              <img src="/images/member3.png" alt="" />
              <p>RUJIKORN PREECHA</p>
            </div>
            <div>
              <img src="/images/member4.png" alt="" />
              <p>RUSLAN YUSOH</p>
            </div>
          </div>
        </section>

        <section className="contactSection">
          <h2>Contact us</h2>
          <p>masked_rider@gmail.com</p>
          <p>School of Information Technology Mae Fah Luang University</p>
          <p>
            Moo 1 333 Tha Sut, Amphoe Mueang Chiang Rai, Chang Wat Chiang Rai
            57100
          </p>
        </section>
      </main>

      <footer className="footer">
        <div className="footerFlex">
          <img src="/images/mfu_logo.png" alt="" />
          <img src="/images/it_logo.png" alt="" />
          <div>
            <p>
              Ⓒ 2021 Senior Project, Bachelor of Engineering in Computer
              Engineering, Mae Fah Luang University
            </p>
            <p>
              MYERS-BRIGGS TYPE INDICATOR (MBTI) PREDICTION USING MACHINE
              LEARNING
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
