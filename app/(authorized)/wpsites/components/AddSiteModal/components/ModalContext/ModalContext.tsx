'use client';

import { createContext, useContext } from 'react';

export interface ModalContextType {
  shouldCloseAddSiteModal: boolean;
  setShouldCloseAddSiteModal: (value: boolean) => void;
}

export const ModalContext = createContext<ModalContextType>({
  shouldCloseAddSiteModal: false,
  setShouldCloseAddSiteModal: () => {},
});

export const useModalContext = () => useContext(ModalContext);
