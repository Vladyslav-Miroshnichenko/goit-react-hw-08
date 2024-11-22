import clsx from "clsx";
import module from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserDataIsLoggedIn } from "../../redux/auth/selectors";

const buildCssClasses = ({ isActive }) =>
  clsx(module.link, isActive && module.active);

export const Navigation = () => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  return (
    <div className={module.navigation}>
      <NavLink className={buildCssClasses} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildCssClasses} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};
