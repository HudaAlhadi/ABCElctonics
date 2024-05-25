import { useReducer, useMemo } from "react";
import UserContext from "./usercontext";

const userState = {
  users: [],
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'AllusersRequest':
      return { users: action.payload.users };
    default:
      return state;
  }
};

const UserProvider = (props) => {
  const [userstate, dispatch] = useReducer(userReducer, userState);

  const fetchAllUsers = async () => {
    try {
      const res = await fetch(`${backendURL}/user/getusers`);
      if (res.status === 200) {
        const response = await res.json();
        dispatch({ type: 'AllusersRequest', payload: response });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const userContextValue = useMemo(() => ({
    users: userstate.users,
    fetchUsers: fetchAllUsers,
  }), [userstate.users]);

  return (
    <UserContext.Provider value={userContextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
