import {createContext, useState} from 'react';

const GlobalContext = createContext({});

export const ContextProvider=({children})=>{
    
    const [loading, setloading] = useState(false);
    const [user, setuser] = useState({name:'Erim Emmanuel'});
    const [isLogin, setisLogin] = useState(false)
  
return (
  <GlobalContext.Provider
    value={{
  
      loading,
      setloading,
      user,
      setuser,
    
      isLogin,
      setisLogin,
    }}
  >
    {children}
  </GlobalContext.Provider>
);
    }
    
    export default GlobalContext;
 
    