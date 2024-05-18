import React from "react";

const FavContext = React.createContext({


    items: [],
 
    addItem: (item) => { },
    removeItem: (id) => { },
    
})

export default FavContext;