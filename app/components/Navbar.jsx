"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { Modal } from "./Modal";
import { AuthContext } from "./AuthProvider";
import { SigninModal } from "./SigninModal";

const Navbar = () => {
  const { modal, toggleModal, signinmodal, logged, logout } =
    useContext(AuthContext);

  return (
    <>
      <nav className='w-full py-3 px-10'>
        <div className=' flex justify-between gap-3 items-start md:items-center '>
          <Link href='/' className='inline-flex items-center p-2 mr-4 gap-2 '>
            <span className='text-xl text-white font-bold uppercase tracking-wide font-garamond'>
              ImageBox
            </span>
          </Link>
          <div className=' md:col-span-2 flex md:flex-row gap-10 mt-2 md:mt-0 md:items-center flex-col-reverse'>
            <div className='flex gap-3'>
              {logged ? (
                <button className='text-white' onClick={logout}>
                  Logout
                </button>
              ) : (
                <button className='text-white' onClick={toggleModal}>
                  SignIn
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      {modal && <Modal />}
      {signinmodal && <SigninModal />}
    </>
  );
};

export default Navbar;
