import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "sawat",
    email: "saswat@gmail.com",
  },
});

export default UserContext;
