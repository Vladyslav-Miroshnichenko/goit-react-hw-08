import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

import module from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={module.regPage}>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
