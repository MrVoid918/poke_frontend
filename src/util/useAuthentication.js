import { useState } from "react";

const useAuthentication = () => {
  return [
    JSON.parse(localStorage.getItem("user")),
    (access, refresh) =>
      localStorage.setItem(
        "user",
        JSON.stringify({
          access,
          refresh,
        })
      ),
  ];
};

export default useAuthentication;
