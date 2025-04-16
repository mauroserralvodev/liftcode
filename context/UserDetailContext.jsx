import { createContext, useState, useEffect } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export const UserDetailContext = createContext();

export const UserDetailProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  const userDetail = useQuery(api.users.GetUser, email ? { email } : "skip");

  return (
    <UserDetailContext.Provider value={{ userDetail, setEmail }}>
      {children}
    </UserDetailContext.Provider>
  );
};
