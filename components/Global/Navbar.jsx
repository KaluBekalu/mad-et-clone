import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="flex justify-between px-40 bg-gray-100 align-middle sticky">
      <div>
        <Image src="/images/logo.webp" width={80} height={30} alt="logo" />
      </div>

      {/* Nav Items  */}
      <ul className="flex flex-row">
        <li className="mx-5">
          <Link href="/" >
            <p className="text-lg font-normal tracking-widest cursor-pointer">Home</p>
          </Link>
        </li>
        <li className="mx-5">
          <Link href="/" className="text-3xl">
          <p className="text-lg font-normal tracking-widest cursor-pointer">About</p>
          </Link>
        </li>
      </ul>

      {/* Social Icons  */}
      <ul className="flex flex-row">
        <li className="mx-5">
          <Link href="/">
            <FaFacebookSquare size={30} color="#003f83" />
          </Link>
        </li>
        <li className="mx-5">
          <Link href="/">
            <FaTwitterSquare size={30} color="#003f83" />
          </Link>
        </li>
        <li className="mx-5">
          <Link href="/">
            <FaLinkedin size={30} color="#003f83" />
          </Link>
        </li>
        <li className="mx-5">
          <Link href="/">
            <FaInstagramSquare size={30} color="#003f83" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;

/*
 */
