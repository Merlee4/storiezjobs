import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { setTimeout } from "timers";
import { useHistory } from "react-router-dom";

function SignUp() {
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirm, setComfirm] = useState("");

  const [errormsg, setErrorMsg] = useState("");
  const [successmsg, setSuccessMsg] = useState("");

  const router = useHistory();
  //names
  let firstName = names.split(" ")[0];
  let lastName = names.split(" ")[1];

  const createUser = (e) => {
    e.preventDefault();
    if (comfirm !== password) {
      setErrorMsg("Your passwords do not match, try again");
      setPassword("");
      setComfirm("");
    } else {
      axios
        .post("http://localhost:9000/signup", {
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.error) {
            setErrorMsg(res.data.error);
          }
          if (res.data.msg) {
            setSuccessMsg(res.data.msg);
            setTimeout(() => {
              router.push("/");
            }, 1000);
          }
          sessionStorage.setItem(
            "createAccount",
            JSON.stringify({ email: email, password: password })
          );
        })
        .catch((err) => {});
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-500 h-screen">
      <NavBar />

      <div className="bg-white w-6/12 mx-auto p-8 my-20">
        <h1 className="text-3xl mb-2 font-bold">Login</h1>
        <p className="flex mb-4">
          <p className="mr-2">By Signing in you agree to our </p>
          <span className="underline text-blue-400">Terms and Conditions</span>
        </p>

        <p className="text-red-600 mb-4">{errormsg}</p>
        <p className="text-green-600 mb-4">{successmsg}</p>
        <form className="flex flex-col" onSubmit={(e) => createUser(e)}>
          <div className="flex flex-col mb-4">
            <label className="text-sm">First and Last Name</label>
            <input
              type="text"
              value={names}
              onChange={(e) => setNames(e.target.value)}
              className="border-b-2  focus:border-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b-2  focus:border-blue-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col mt-4">
            <label className="text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorMsg("");
              }}
              className="border-b-2  focus:border-blue-400"
            />
          </div>

          <div className="flex flex-col mt-4">
            <label className="text-sm">Comfirm Password</label>
            <input
              type="password"
              value={comfirm}
              onChange={(e) => {
                setComfirm(e.target.value);
                setErrorMsg("");
              }}
              className="border-b-2  focus:border-blue-400"
            />
          </div>
          <button className="bg-blue-500 my-4 py-2 text-white" type="submit">
            SignUp
          </button>
          <Link to="/" className=" text-blue-400">
            already has an account Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
