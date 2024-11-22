import { useSelector } from "react-redux";
import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";
import module from "./AppBar.module.css";
import { selectUserDataIsLoggedIn } from "../../redux/auth/selectors";
import { UserMenu } from "../UserMenu/UserMenu";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  return (
    <header className={module.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
