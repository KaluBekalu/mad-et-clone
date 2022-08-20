import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  useEffect(() => {
    console.log(router);
  }, []);
  return (
    <header className="flex bg-gray-100 align-middle sticky">
      <div className="max-w-[1350px] w-full self-center m-auto flex justify-between">
        <div>
          <Image src="/images/logo.webp" width={80} height={30} alt="logo" />
        </div>

        {/* Nav Items  */}
        <ul className="flex flex-row">
          <li className="mx-5">
            <Link href="/">
              <p className="text-lg font-normal tracking-widest cursor-pointer">
                HOME
              </p>
            </Link>
          </li>
          <li className="mx-5">
            <Link href="/about" className="text-3xl">
              <p className="text-lg font-normal tracking-widest cursor-pointer">
                ABOUT
              </p>
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
      </div>
    </header>
  );
}

export default Navbar;

/*
 */
