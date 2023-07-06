import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "sawat",
    email: "saswat@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
