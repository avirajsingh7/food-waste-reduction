
import IndexHeader from "../components/header/IndexHeader";
import RegisterCard from "../components/header/RegisterCard";
import LoginCard from "../components/header/LoginCard";
import { useState } from "react";

function IndexPage() {
  const [loginCardVisible, setLoginCardVisible] = useState(false);
  const [registerCardVisible, setRegisterCardVisible] = useState(false);

  return (
    <div className="relative">
      <IndexHeader
        isLoginCardVisible={setLoginCardVisible}
        isRegisterCardVisible={setRegisterCardVisible}
      />
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
