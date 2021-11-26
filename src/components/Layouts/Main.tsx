import React from 'react';
import NavBar from '../Nav/Nav';
import 'tailwindcss/tailwind.css';
import { useUserContext } from '../../contexts/UserContext';

interface IMain {
  children: React.ReactNode;
}

const Main = ({ children }: IMain): JSX.Element => {
  const user = useUserContext();
  return (
    <main>
      <NavBar userName={`${user.firstName} ${user.lastName}`} />
      <div>
        {children}
      </div>
    </main>
  );
};

export default Main;
