import React, { useContext, createContext, use } from "react";

export const PageContext = createContext(null);

export const usePageContext = () => useContext(PageContext);
