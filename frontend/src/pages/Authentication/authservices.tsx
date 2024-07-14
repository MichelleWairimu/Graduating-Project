/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
// src/services/authService.ts

export const logout = () => {
    // Clear user authentication data
    localStorage.removeItem('userToken'); // Adjust according to your auth mechanis
  };

  