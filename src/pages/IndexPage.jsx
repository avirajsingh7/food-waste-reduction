import IndexHeader from "../components/IndexHeader";
import RegisterCard from "../components/RegisterCard";
import LoginCard from "../components/LoginCard";
import backgroundImage from "../assets/images/indexPage.jpg";
import { useState } from "react";

function IndexPage() {
  const [loginCardVisible, setLoginCardVisible] = useState(false);
  const [registerCardVisible, setRegisterCardVisible] = useState(false);

  return (
    <div
      className="relative index-page w-screen h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <IndexHeader
        isLoginCardVisible={setLoginCardVisible}
        isRegisterCardVisible={setRegisterCardVisible}
      />
      <p className="mt-40 text-6xl index-slogan">
        Together, we can end food waste.
      </p>
      {loginCardVisible && (
        <LoginCard
          isLoginCardVisible={setLoginCardVisible}
          isRegisterCardVisible={setRegisterCardVisible}
        />
      )}
      {registerCardVisible && (
        <RegisterCard
          isRegisterCardVisible={setRegisterCardVisible}
          isLoginCardVisible={setLoginCardVisible}
        />
      )}
    </div>
  );
}

export default IndexPage;
