import { Navigate } from "react-router-dom";

const RedirectPage = () => {
  return <Navigate to="/memo" replace />;
};

export default RedirectPage;
