import React, {useEffect} from "react";
import bg from "../../assets/home.png";

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${bg}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }, []);
  return (
    <>
      
    </>
  );
};

export default Home;
