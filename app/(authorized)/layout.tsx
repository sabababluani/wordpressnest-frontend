import React from 'react';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import '@/app/globals.css';
import { NotificationProvider } from '../contexts/NotificationContext';
import Notification from '../components/Notification/Notification';

interface AuthorisedLayoutProps {
  children: React.ReactNode;
}

const AuthorisedLayout: React.FC<AuthorisedLayoutProps> = ({ children }) => {
  return (
    <NotificationProvider>
      <div className="wrapper">
        <Navigation />
        <div className="app">
          <div className="container">
            <Header />
            <Notification />
            {children}
          </div>
        </div>
      </div>
    </NotificationProvider>
  );
};

export default AuthorisedLayout;
