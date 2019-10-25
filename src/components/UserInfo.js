import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserInfo = () => {
  const [userPos] = useContext(UserContext);
  return (
    <div id="user-location">
      Your location is {userPos.latitude}, {userPos.longitude}
    </div>
  );
};

export default UserInfo;
