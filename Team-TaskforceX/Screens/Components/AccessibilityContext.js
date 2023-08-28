// AccessibilityContext.js

import React, { createContext, useState, useContext } from "react";

export const AccessibilityContext = createContext();

export const useAccessibilityContext = () => {
    return useContext(AccessibilityContext);
  };

export const AccessibilityProvider = ({ children }) => {
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    colourBlind: false,
    textLarge: false,
    isVoiceOverOn: false,
  });

  return (
    <AccessibilityContext.Provider
      value={{ accessibilitySettings, setAccessibilitySettings }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};
