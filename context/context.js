import { createContext, useState } from "react";
export const UserLang_data = createContext(null);
function Context({ children }) {
    const [userLanguage, setUserLanguage] = useState();
  
    return (
      <UserLang_data.Provider value={{ userLanguage, setUserLanguage }}>
        {children}
      </UserLang_data.Provider>
    );
  }

  export default Context;