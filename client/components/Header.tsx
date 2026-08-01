import { Tally1 } from "lucide-react";
import { Link } from "react-router";

export default function Header() {
    return (
  <header>
    <h1>Note-Sharer</h1>
    <nav>
      <Link to="#contact-us">Contact Us</Link>
      <Link to="#help">Help</Link>
      <Link to="#support">Support Forum</Link>
      <Link to="#blog">Blog</Link>
      <Tally1 />
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  </header>
    );
}
