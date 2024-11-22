import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUserData } from "../../redux/auth/selectors";

import module from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div className={module.userDiv}>
      <p className={module.userName}>{user.name}</p>
      <button className={module.button} type="button" onClick={handleClick}>
        Log out
      </button>
    </div>
  );
};
