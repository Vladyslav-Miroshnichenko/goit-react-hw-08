import LoginForm from "../../components/LoginForm/LoginForm";
import module from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={module.regPage}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
