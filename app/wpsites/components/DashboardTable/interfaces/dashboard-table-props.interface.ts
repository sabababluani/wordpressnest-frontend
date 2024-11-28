import React from 'react';

export interface DashboardTablePropsInterface {
  key: React.Key;
  siteTitle: string;
  status: string;
  visit: string;
  bandwidth: string;
  diskUsage: string;
  php: string;
  Wpversion: string;
}
