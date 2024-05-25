import { createContext, useReducer } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const initialState = {
  users: [],
  failedlogin: false,
  loginState: false,
  isauthenticated:false
};

const authreducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      const newUser = action.user;
    
      if (newUser) {
        return {
          ...state,
          isauthenticated: true,
          loginState: true,
          users: newUser,
          failedlogin: false,
        };
      } 
    case 'failedlogin':
      console.log('Login failed');
      return {
        ...state,
        failedlogin: true,
      };
    case 'logout':
      return {
        ...initialState,
        failedlogin: false,
      };
    default:
      return state;
  }
};


export const AuthContext = createContext();
const extractUserFromToken = (token) => {
  try {
    const [, payloadBase64,] = token.split('.');
    const decodedPayload = atob(payloadBase64);
    const user = JSON.parse(decodedPayload);
    return user;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};
const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authreducer, initialState);
  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.clear();
    navigate('/');
    dispatch({ type: 'logout' });
  };

  const storedToken = localStorage.getItem('token');
  useEffect(() => {
    if (storedToken) {
      const user = extractUserFromToken(storedToken);
 
        dispatch({ type: 'LOGIN', user });
    
    }
  }, [storedToken]);

  const login = async (email, password) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 'credentials': 'include',
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const { user, accesstoken } = await res.json();
        localStorage.setItem('token', accesstoken);
        dispatch({ type: 'LOGIN', user });
      } else if (res.status === 400) {
        dispatch({ type: 'failedlogin' });
      }
    } catch (error) {
      console.error('Error occurred:', error);
  
    }
  };

  const authcontext = {
    users: state.users,
    login,
    loginState: state.loginState,
    isauthenticated: state.isauthenticated,
    failedlogin: state.failedlogin,
    logout,
  }

  return (
    <AuthContext.Provider value={authcontext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

