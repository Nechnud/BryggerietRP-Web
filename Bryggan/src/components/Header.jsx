import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/BrygganLogo.gif";
import { Navbar, Container, Nav, Col } from "../utilities/components-bootstrap";

export default function Header() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/">Hem</a>
        </li>
        <li>
          <a href="/ansökningar">Ansökningar</a>
        </li>
        <img src={Logo} />
        <li>
          <a href="/donationer">Donationer</a>
        </li>
        <li>
          <a href="/discord">Discord</a>
        </li>
      </ul>
    </nav>
  );
}
