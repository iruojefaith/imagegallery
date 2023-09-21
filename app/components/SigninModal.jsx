"use client";

import { /*useContext,*/ useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
// import { AuthContext } from "./AuthProvider";

export const SigninModal = () => {
  // const {toggleModal} =useContext(AuthContext)
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
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
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
      <button onClick={handleSubmit}>Signin</button>
    </div>
  );
};
