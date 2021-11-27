import {createContext, useContext, useState} from 'react';

const UserContext = createContext();

export function UserProvider({children}) {
  const [userId, setUserId] = useState(-1);
  const [myTeam, setMyTeam] = useState(null)

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        myTeam,
        setMyTeam
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserId() {
  const context = useContext(UserContext);
  const {userId, setUserId, myTeam, setMyTeam} = context;
  return {userId, setUserId, myTeam, setMyTeam};
}