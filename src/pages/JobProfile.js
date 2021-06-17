import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import UserProfileMainContent from "../components/UserProfileMainContent";

function UserProfile({ match }) {
  alert(match);
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-500 shadow fixed top-0 left-0 right-0 w-full">
        <NavBar />
      </div>
      {/* Main */}
      <div className="grid grid-cols-5 h-screen mt-16">
        <div className="col-span-4 bg-white p-4 overflow-y-auto">
          <UserProfileMainContent />
        </div>
        <div className="bg-white p-4">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
