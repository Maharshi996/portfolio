import React, { useContext, createContext } from "react";

// Define the type for your context value
export type PageContextType = {
  // Add your context properties here, for example:
  pageData?: any;
  renderResume: {};
  setRenderResume: React.Dispatch<React.SetStateAction<{}>>;
  renderModel: {};
  setRenderModel: React.Dispatch<React.SetStateAction<{}>>;
};

export const PageContext = createContext<PageContextType | null>(null);

export const usePageContext = () => useContext(PageContext);
