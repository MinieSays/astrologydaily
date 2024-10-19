"use client";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);

  function toggleMobileMenu() {
    setMobileIsOpen((prevState) => !prevState);
  }

  useEffect(() => {
    setMobileIsOpen(false);
  }, []);

  return (
    <nav>
      <div className="nav__container">
        <div className="row">
          <div className="nav__wrapper">
            <div className="logo__container">Astrology Daily</div>
            <ul className="nav__links">
              <li className="nav__link">
                <a href="/home">Home</a>
              </li>
              <li className="nav__link">
                <a href="/read">Read by Sign</a>
              </li>
              <li className="nav__link">
                <a href="/calculators">Calculators</a>
              </li>
              <li className="nav__link">
                <a href="/professional">Professional Reading</a>
              </li>
            </ul>

            <a className="button__hamburger" onClick={toggleMobileMenu}>
              <FaBars size={30} />
            </a>
          </div>

          {mobileIsOpen ? (
            <>
              <ul className="mobile__nav--links">
                <button className="mobile__close" onClick={toggleMobileMenu}>
                  <MdClose size={30} />
                </button>
                <li className="mobile__nav--link">
                  <a href="/home" className="nav__anchor">
                    Home
                  </a>
                </li>
                <li className="mobile__nav--link">
                  <a href="/blog" className="nav__anchor">
                    Blog
                  </a>
                </li>
                <li className="mobile__nav--link">
                  <a href="/reading" className="nav__anchor">
                    Astrology Reading
                  </a>
                </li>
                <li className="mobile__nav--link">
                  <a href="/calculators" className="nav__anchor">
                    Calculators
                  </a>
                </li>
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
