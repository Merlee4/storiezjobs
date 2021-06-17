import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { LogoutIcon } from "@heroicons/react/solid";

import logo from "../resources/logo-white-no-background.svg";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import axios from "axios";

function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("client")) {
      setLoggedIn(true);
      setUser(JSON.parse(sessionStorage.getItem("client")));
    }
  }, [loggedIn]);

  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("Full Time");
  const [description, setDescription] = useState("");
  const [about, setAbout] = useState("");
  const [category, setCategory] = useState("Frontend Web Developer");

  const addJob = () => {
    axios
      .post("http://localhost:9000/post", {
        name: user.firstname + " " + user.lastname,
        duration: duration,
        image: user.image,
        category: category,
        title: title,
        timestamp: Date.now(), // timestamp
        description: description,
        about: about,
        phone: user.phone,
        email: user.email,
        website: user.website,
      })
      .then((res) => {
        console.log(res.data);
        setModalOpen(false);
        window.location = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-between items-center text-white p-3">
      {/* LEFT SIDE */}
      <div className="flex items-center">
        <Link to="/" className="flex flex-col mr-4">
          {/* LOGO */}
          <div className="flex items-center text-xl ">
            <img src={logo} alt="logo" className="h-5" />
            <h2>tories</h2>
          </div>
          <p className="text-xs">Jobs Found Easily</p>
        </Link>
      </div>
      {/* RIGHT SIDE */}
      <div className="flex relative">
        <ul className="flex items-center">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-4">
            <Link to="/jobs">Jobs</Link>
          </li>

          {loggedIn === true && (
            <li className="ml-4">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-white text-blue-700 py-2 px-4 rounded"
              >
                Post a job
              </button>
            </li>
          )}
        </ul>
        <ul className="flex text-sm font-light">
          {loggedIn && (
            <li className="ml-4">
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="rounded-full p-1"
              >
                <MenuIcon className="h-8" />
              </button>
            </li>
          )}
        </ul>
        {openMenu && (
          <div className="border rounded flex flex-col bg-white shadow-sm text-black absolute p-2 right-0 top-14">
            <Link
              to="/profile"
              className="border p-1 rounded mb-1 hover:bg-gray-200"
            >
              {user.firstname}
            </Link>
            <button
              onClick={() => {
                sessionStorage.removeItem("client");
                window.location = "/";
              }}
              className=" flex items-center border text-red-600 p-1 rounded hover:bg-gray-200"
            >
              <p className="mr-2">Logout</p>
              <LogoutIcon className="h-4" />
            </button>
          </div>
        )}
      </div>

      <Modal isOpen={modalOpen}>
        <div className="flex flex-col">
          <button className="" onClick={() => setModalOpen(false)}>
            <XIcon className="h-8" />
          </button>

          <h1 className="text-3xl font-bold mt-4">Add New Job</h1>
          <div className="flex flex-col mt-4">
            <label className="text-sm">Title</label>
            <input
              type="text"
              className="border-b-2  focus:border-blue-400"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col mt-4">
            <label className="text-sm">About</label>
            <textarea
              type="email"
              className="border-b-2  focus:border-blue-400"
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </div>

          <div className="flex flex-col mt-4">
            <label className="text-sm">description</label>
            <input
              type="text"
              className="border-b-2  focus:border-blue-400"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <select
            className="border py-2 mt-4 active:border-blue-400"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="">Catergory</option>
            <option value="web-design">Web Design</option>
            <option value="ui-ux">UI/UX</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="front-end">Frontend Web Developer</option>
            <option value="back-end">Backend Web Developer</option>
          </select>

          <div className="flex flex-col mt-4">
            <select
              className="border py-2 mt-4 active:border-blue-400"
              onChange={(e) => {
                setDuration(e.target.value);
              }}
              value={duration}
            >
              <option value="fulltime">Full Time</option>
              <option value="parttime">Part Time</option>
              <option value="temporarily">Temporarily</option>
            </select>
          </div>
          <button
            className="bg-blue-500 my-4 py-2 text-white"
            onClick={() => addJob()}
          >
            Add Job
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default NavBar;
