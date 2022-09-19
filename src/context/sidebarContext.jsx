import { createContext, useContext, useState } from "react";

const SideBarContext = createContext();

export default function SideBarProvider({ children }) {
  const [showNavBar, setShowNavBar] = useState(false);
  return (
    <SideBarContext.Provider value={{ showNavBar, setShowNavBar }}>
      {children}
    </SideBarContext.Provider>
  );
}

export const useSidebarContext = () => {
  const { showNavBar, setShowNavBar } = useContext(SideBarContext);

  return {
    showNavBar,
    setShowNavBar,
  };
};
