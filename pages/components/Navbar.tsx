import Image from "next/image";
import Link from "next/link";
import pic from "../../public/demopic.jpg";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const menuHandler = () => {
    console.log("i am clikced");
    setActive(!active);
  };
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <Image
            className="navbar-icons"
            src={pic}
            width={100}
            height={100}
            alt="logo"
          />
          <div onClick={menuHandler} className="navbar-icons">
            <div className={active ? "active-hamburger" : "hamburger"}></div>
          </div>
        </div>
      </div>
      <nav className={active ? "active-side-menu" : "side-menu"}>
        <ul className="items-menu">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/catalog">catalog</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
