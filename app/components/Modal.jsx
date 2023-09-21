"use client";

import { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import { AuthContext } from "./AuthProvider";

export const Modal = () => {
  const { toggleModal, toggleSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handlePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleSubmit = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;
      console.log(user);
      toggleModal();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleModal = () => {
    toggleModal();
    toggleSignIn();
  };
  return (
    <>
      {" "}
      {/* <div>
        <input
          type='email'
          name='email'
          onChange={handleEmail}
          className='p-10 text-black'
        />{" "}
        <br />
        <input
          type='password'
          name='password'
          onChange={handlePassword}
          className='p-10 text-black'
        />
        <button onClick={handleSubmit}>register</button>
        <p>
          have an account ?<span onClick={handleModal}>Signin here</span>
        </p>
      </div> */}
      {/*-- Main modal  */}
      <div
        aria-hidden='true'
        class='fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full'
      >
        <div class='relative w-full max-w-md max-h-full'>
          {/*-- Modal content --*/}
          <div class='relative bg-white rounded-lg shadow dark:bg-gray-100 '>
            <button
              type='button'
              class='absolute top-3 right-2.5 text-[#0f3d18] bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
              data-modal-hide='authentication-modal'
            >
              <svg
                class='w-3 h-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'
                onClick={toggleModal}
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
              <span class='sr-only'>Close modal</span>
            </button>
            <div class='px-6 py-6 lg:px-8'>
              <h3 class='mb-4 text-xl font-medium text-[#0f3d18] dark:text-[#0f3d18]'>
                Sign in to our platform
              </h3>
              <form class='space-y-6' action='#'>
                <div>
                  <label
                    htmlfor='email'
                    class='block mb-2 text-sm font-medium text-[#0f3d18] dark:text-[#0f3d18]'
                  >
                    Your email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    class=' border border-[#0f3d18] text-[#0f3d18] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-[#0f3d18]'
                    placeholder='name@company.com'
                    onChange={handleEmail}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlfor='password'
                    class='block mb-2 text-sm font-medium text-[#0f3d18] dark:text-[#0f3d18d8]'
                  >
                    Your password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    class='border border-[#0f3d18] text-[#0f3d18] text-sm rounded-lg focus:ring-[#0f3d18]focus:border-blue-500 block w-full p-2.5  dark:placeholder-[#0f3d18] '
                    onChange={handlePassword}
                    required
                  />
                </div>
                <div class='flex justify-between'>
                  <div class='flex items-start'>
                    <div class='flex items-center h-5'>
                      <input
                        id='remember'
                        type='checkbox'
                        value=''
                        class='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#8af09e] dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-[#0f3d18] dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
                        required
                      />
                    </div>
                    <label
                      for='remember'
                      class='ml-2 text-sm font-medium text-[#0f3d18] dark:text-[#0f3d18e3]'
                    >
                      Remember me
                    </label>
                  </div>
                  <a href='#' class='text-sm hover:underline text-[#0f3d18]'>
                    Lost Password?
                  </a>
                </div>
                <button
                  type='submit'
                  class='w-full text-white bg-[#0f3d18] hover:bg-[#0f3d18ec] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#0f3d18]/100 dark:hover:bg-[#0f3d18] dark:focus:ring-blue-800'
                  onClick={handleSubmit}
                >
                  Register
                </button>
                <div class='text-sm font-medium text-gray-500 dark:text-gray-300'>
                  Not registered?{" "}
                  <a
                    href='#'
                    class='text-[#0f3d18] hover:underline dark:text-[#0f3d18]'
                    onClick={handleModal}
                  >
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
