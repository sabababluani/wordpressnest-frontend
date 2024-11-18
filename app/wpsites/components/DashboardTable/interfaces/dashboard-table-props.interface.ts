import React from 'react';

export interface DashboardTablePropsInterface {
  key: React.Key;
  name: string;
  status: string;
  visit: string;
  bandwidth: string;
  diskUsage: string;
  php: string;
  Wpversion: string;
}
