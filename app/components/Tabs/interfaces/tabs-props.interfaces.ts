import React from 'react';

export interface TabsPropsInterface {
  // tabCount: number;
  tabNames?: string[];
  tabContent?: React.ReactNode[];
  uniqueKey: string;
  withoutBorder?: boolean;
  withoutPadding?: boolean;
}
