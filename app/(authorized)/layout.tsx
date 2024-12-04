import React from 'react';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import '@/app/globals.css';

interface AuthorisedLayoutProps {
  children: React.ReactNode;
}

const AuthorisedLayout: React.FC<AuthorisedLayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <Navigation />
      <div className="app">
        <div className="container">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthorisedLayout;
