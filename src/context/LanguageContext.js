import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { texts } from '../utils/texts'; 

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const storedLanguage = await AsyncStorage.getItem('language');
        if (storedLanguage) {
          setLanguage(storedLanguage);
        }
      } catch (error) {
        console.error("Error loading language:", error);
      }
    };
    loadLanguage();
  }, []);

  const toggleLanguage = async () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);

    try {
      await AsyncStorage.setItem('language', newLanguage);
    } catch (error) {
      console.error("Error saving language:", error);
    }
  };
  const translate = (key) => {
    return texts[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};
