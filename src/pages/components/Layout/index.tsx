import React from 'react';
import NavBar from '../Nav/Nav';
import 'tailwindcss/tailwind.css';

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <main>
      <NavBar userName="User name" />
      <div className="">
        {children}
        <footer className="flex items-center justify-center w-full h-24 border-t">
          <div className="xl:container xl:mx-auto">
            <a
              className="flex items-center justify-center"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Layout;
