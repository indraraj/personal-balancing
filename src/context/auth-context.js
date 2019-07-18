import React from 'react';

const authContext = React.createContext({
    loginState: false,
    userLoginHandler: () => {}
})

export default authContext;