import React from "react";
import Welcome from "../components/Welcome";
import Welcomeimage from "../components/Welcomeimage";
import Globalcomp from "../Global/Globalcomp";
import Globalspace from "../Global/Globalspace";

const Profile = () => {
  return (
    <Globalspace>
      <Globalcomp className="flex-col-reverse items-center">
        <Welcome />
        <Welcomeimage />
      </Globalcomp>
    </Globalspace>
  );
};

export default Profile;
