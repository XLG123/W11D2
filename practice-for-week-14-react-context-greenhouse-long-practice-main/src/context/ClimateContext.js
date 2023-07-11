// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
import { createContext, useContext, useState } from 'react';

export const ClimateContext = createContext();

export const useClimateContext = () => {
  // debugger
  return useContext(ClimateContext);
};

export default function ClimateProvider({ children }) {
  const [climateName, setClimateName] = useState(50);

  return (
    <ClimateContext.Provider
      value={{
        climateName,
        setClimateName
      }}
    >
      {children}
    </ClimateContext.Provider>
  );
}