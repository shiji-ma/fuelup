import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = props => {
  const [userPos, setUserPos] = useState({
    latitude: null,
    longitude: null,
    locality: null
  });

  useEffect(() => {
    const getUserPos = () => {
      if (navigator.geolocation) {
        const posSuccess = position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setUserPos({
            latitude: latitude,
            longitude: longitude
          });
          console.info("Geolocation obtained successfully");
        };

        const posError = error => {
          console.warn(`Geolocation ERROR(${error.code}): ${error.message}`);
        };

        const posOptions = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };

        navigator.geolocation.getCurrentPosition(
          posSuccess,
          posError,
          posOptions
        );
      }
    };
    getUserPos();
  }, []);

  return (
    <UserContext.Provider value={[userPos, setUserPos]}>
      {props.children}
    </UserContext.Provider>
  );
};
