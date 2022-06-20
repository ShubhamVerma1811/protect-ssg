import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const AuthGuard = (props) => {
  const value = useContext(AuthContext);

  // PROBLEM YAHA HAI
  if (!value || !value.user || !value.user.log) {
    return <div>AUTH GUARD</div>;
  }
  return props.children;
};

export default AuthGuard;
