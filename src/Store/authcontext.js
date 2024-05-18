import React from "react";

const AuthContext = React.createContext({


    users: [],
    login :(email, password) => { },
loginState: false,
isauthenticated: false,
faildedlogin:false,
logout: (email, password) => { }
  
})

export default AuthContext