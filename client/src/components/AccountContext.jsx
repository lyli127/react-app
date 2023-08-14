import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: null });
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/login", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setUser({ loggedIn: data.loggedIn });
        navigate("/my-reviews");
      })
      .catch((error) => {
        console.log(error);
        console.log("No user logged in");
        setUser({ loggedIn: false });
        // navigate("/");
      });
  }, []);

  return (
    <AccountContext.Provider value={{ user, setUser }}>
      {children}
    </AccountContext.Provider>
  );
};

export { AccountContext, UserContext };
