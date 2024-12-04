import React from 'react';

export interface DomainsTablePropsInterface {
  key: React.Key;
  plugin: string;
  status: number;
  isPrimary: boolean;
}
