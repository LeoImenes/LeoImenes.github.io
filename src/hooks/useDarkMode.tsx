import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  if (context === undefined) {
    throw new Error("Problema com a mudança de tema");

  }
  return context;
};

