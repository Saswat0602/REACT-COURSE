import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "sawat",
    email: "dummmy@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
