import { useEffect } from "react";
const Alert = () => {
  useEffect(() => {
    window.alert("This is alert");
  }, []);
  return <div></div>;
};

export default Alert;
