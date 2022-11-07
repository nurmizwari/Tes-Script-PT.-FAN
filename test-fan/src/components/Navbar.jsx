import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar sticky-lg-top shadow bg-light">
      <div class="container">
        <Link to={"/"} class="navbar-brand mb-0 h1">
          Pokemon
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
