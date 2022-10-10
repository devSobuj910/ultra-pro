import React from "react";

const Nave = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <a class="navbar-brand fw-bold fw-5" href="/">
            <h3>exersixe-Fast</h3>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav "
          >
            <ul class="navbar-nav ms-5">
              <li class="nav-item ms-5">
                <a class="nav-link  fw-bold" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item ms-5">
                <a class="nav-link fw-bold" href="/">
                  About
                </a>
              </li>
              <li class="nav-item ms-5">
                <a class="nav-link fw-bold" href="/">
                  Activity
                </a>
              </li>
              <li class="nav-item ms-5 ">
                <a class="nav-link fw-bold" href="/">
                  Cours
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nave;
