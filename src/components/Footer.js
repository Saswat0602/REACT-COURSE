import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <h4 className="p-10 m-10">
      This site is developed by{" "}
      <span className=" font-bold">
        {user.name} - {user.email}
      </span>
    </h4>
  );
};

export default Footer;
