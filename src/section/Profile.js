import React from "react";
import Welcome from "../components/Welcome";
import Welcomeimage from "../components/Welcomeimage";
import Globalcomp from "../Global/Globalcomp";

const Profile = () => {
  return (
    <div>
      <Globalcomp className="flex-col-reverse items-center">
        <Welcome />
        <Welcomeimage />
      </Globalcomp>
    </div>
  );
};

export default Profile;
