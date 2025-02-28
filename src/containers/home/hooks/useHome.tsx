import { useNavigate } from "react-router-dom";

const useHome = () => {
  const navigate = useNavigate();

  const onNavigateMemoPage = () => {
    navigate("/memo");
  };

  return {
    onNavigateMemoPage,
  };
};

export default useHome;
