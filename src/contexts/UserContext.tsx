import React from 'react';
import { IUser } from '../api/models/user';

export interface UserContext extends IUser {}

const mapContextInitialValue = {
  address: {
    formattedAddress: '',
    zoneId: '',
  },
  email: '',
  firstName: '',
  lastName: '',
  maxJobDistance: 0,
  phoneNumber: '',
  workerId: '',
};

const UserContext = React.createContext<UserContext>(mapContextInitialValue);

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: UserContext;
}): React.ReactElement {
  const value: UserContext = user;

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext(): UserContext {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
}
