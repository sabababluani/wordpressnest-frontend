import React from 'react';
import { SetupTablePropsInterface } from './setup-table-props.interface';

export interface DashboardTablePropsInterface {
  key: React.Key;
  status: string;
  visit: string;
  bandwidth: string;
  diskUsage: string;
  wpVersion: string;
  setup?: SetupTablePropsInterface[];
  id: number;
}
