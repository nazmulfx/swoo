import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { selectedLang, changeLanguage, languages } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  const handleLanguageChange = (e, lang) => {
    e.stopPropagation();
    changeLanguage(lang);
    setLangOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={langRef} className="language-selector-dropdown notranslate flex align-center gap-1" onClick={() => setLangOpen(!langOpen)}>
      <img src={`https://flagcdn.com/w20/${selectedLang.flag}.png`} alt={`${selectedLang.code} Flag`} width="16" />
      <span className="lang-code">{selectedLang.code}</span>
      <svg className={`arrow-icon ${langOpen ? 'open' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      {langOpen && (
        <div className="language-dropdown-menu">
          {languages.map(lang => (
            <div 
              key={lang.code} 
              className={`language-dropdown-item ${selectedLang.code === lang.code ? 'active' : ''}`}
              onClick={(e) => handleLanguageChange(e, lang)}
            >
              <img src={`https://flagcdn.com/w20/${lang.flag}.png`} alt={lang.name} width="16" />
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
