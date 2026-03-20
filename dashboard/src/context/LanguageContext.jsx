import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';

const languages = [
  { code: 'Eng', langCode: 'en', flag: 'us', name: 'English' },
  { code: 'Ben', langCode: 'bn', flag: 'bd', name: 'বাংলা' },
  { code: 'Afr', langCode: 'af', flag: 'za', name: 'Afrikaans' },
  { code: 'Sqi', langCode: 'sq', flag: 'al', name: 'Shqip' },
  { code: 'Amh', langCode: 'am', flag: 'et', name: 'አማርኛ' },
  { code: 'Ara', langCode: 'ar', flag: 'sa', name: 'العربية' },
  { code: 'Hye', langCode: 'hy', flag: 'am', name: 'Հայերեն' },
  { code: 'Asm', langCode: 'as', flag: 'in', name: 'অসমীয়া' },
  { code: 'Aym', langCode: 'ay', flag: 'bo', name: 'Aymar' },
  { code: 'Aze', langCode: 'az', flag: 'az', name: 'Azərbaycan' },
  { code: 'Bam', langCode: 'bm', flag: 'ml', name: 'Bamanankan' },
  { code: 'Eus', langCode: 'eu', flag: 'es', name: 'Euskara' },
  { code: 'Bel', langCode: 'be', flag: 'by', name: 'Беларуская' },
  { code: 'Bho', langCode: 'bho', flag: 'in', name: 'भोजपुरी' },
  { code: 'Bos', langCode: 'bs', flag: 'ba', name: 'Bosanski' },
  { code: 'Bul', langCode: 'bg', flag: 'bg', name: 'Български' },
  { code: 'Cat', langCode: 'ca', flag: 'es', name: 'Català' },
  { code: 'Ceb', langCode: 'ceb', flag: 'ph', name: 'Cebuano' },
  { code: 'Zhs', langCode: 'zh-CN', flag: 'cn', name: '中文(简)' },
  { code: 'Zht', langCode: 'zh-TW', flag: 'tw', name: '中文(繁)' },
  { code: 'Cor', langCode: 'co', flag: 'fr', name: 'Corsu' },
  { code: 'Hrv', langCode: 'hr', flag: 'hr', name: 'Hrvatski' },
  { code: 'Ces', langCode: 'cs', flag: 'cz', name: 'Čeština' },
  { code: 'Dan', langCode: 'da', flag: 'dk', name: 'Dansk' },
  { code: 'Div', langCode: 'dv', flag: 'mv', name: 'ދިވެහි' },
  { code: 'Dog', langCode: 'doi', flag: 'in', name: 'डोगरी' },
  { code: 'Nld', langCode: 'nl', flag: 'nl', name: 'Nederlands' },
  { code: 'Epo', langCode: 'eo', flag: 'eo', name: 'Esperanto' },
  { code: 'Est', langCode: 'et', flag: 'ee', name: 'Eesti' },
  { code: 'Ewe', langCode: 'ee', flag: 'gh', name: 'Eʋegbe' },
  { code: 'Fil', langCode: 'fil', flag: 'ph', name: 'Filipino' },
  { code: 'Fin', langCode: 'fi', flag: 'fi', name: 'Suomi' },
  { code: 'Fra', langCode: 'fr', flag: 'fr', name: 'Français' },
  { code: 'Fry', langCode: 'fy', flag: 'nl', name: 'Frysk' },
  { code: 'Glg', langCode: 'gl', flag: 'es', name: 'Galego' },
  { code: 'Kat', langCode: 'ka', flag: 'ge', name: 'ქართული' },
  { code: 'Deu', langCode: 'de', flag: 'de', name: 'Deutsch' },
  { code: 'Ell', langCode: 'el', flag: 'gr', name: 'Ελληνικά' },
  { code: 'Grn', langCode: 'gn', flag: 'py', name: 'Avañeẽ' },
  { code: 'Guj', langCode: 'gu', flag: 'in', name: 'ગુજરાતી' },
  { code: 'Hat', langCode: 'ht', flag: 'ht', name: 'Kreyòl' },
  { code: 'Hau', langCode: 'ha', flag: 'ng', name: 'Hausa' },
  { code: 'Haw', langCode: 'haw', flag: 'us', name: 'ʻŌlelo' },
  { code: 'Heb', langCode: 'he', flag: 'il', name: 'עברית' },
  { code: 'Hin', langCode: 'hi', flag: 'in', name: 'हिन्दी' },
  { code: 'Hmn', langCode: 'hmn', flag: 'cn', name: 'Hmong' },
  { code: 'Hun', langCode: 'hu', flag: 'hu', name: 'Magyar' },
  { code: 'Isl', langCode: 'is', flag: 'is', name: 'Íslenska' },
  { code: 'Ibo', langCode: 'ig', flag: 'ng', name: 'Igbo' },
  { code: 'Ilo', langCode: 'ilo', flag: 'ph', name: 'Ilocano' },
  { code: 'Ind', langCode: 'id', flag: 'id', name: 'Indonesia' },
  { code: 'Gle', langCode: 'ga', flag: 'ie', name: 'Gaeilge' },
  { code: 'Ita', langCode: 'it', flag: 'it', name: 'Italiano' },
  { code: 'Jpn', langCode: 'ja', flag: 'jp', name: '日本語' },
  { code: 'Jav', langCode: 'jv', flag: 'id', name: 'Jawa' },
  { code: 'Kan', langCode: 'kn', flag: 'in', name: 'ಕನ್ನಡ' },
  { code: 'Kaz', langCode: 'kk', flag: 'kz', name: 'Қазақша' },
  { code: 'Khm', langCode: 'km', flag: 'kh', name: 'ខ្មែរ' },
  { code: 'Kin', langCode: 'rw', flag: 'rw', name: 'Kinyarwanda' },
  { code: 'Kok', langCode: 'gom', flag: 'in', name: 'कोंकणी' },
  { code: 'Kor', langCode: 'ko', flag: 'kr', name: '한국어' },
  { code: 'Kri', langCode: 'kri', flag: 'sl', name: 'Krio' },
  { code: 'Kur', langCode: 'ku', flag: 'iq', name: 'Kurdî' },
  { code: 'Cku', langCode: 'ckb', flag: 'iq', name: 'کوردی' },
  { code: 'Kir', langCode: 'ky', flag: 'kg', name: 'Кыргызча' },
  { code: 'Lao', langCode: 'lo', flag: 'la', name: 'ລາວ' },
  { code: 'Lat', langCode: 'la', flag: 'va', name: 'Latina' },
  { code: 'Lav', langCode: 'lv', flag: 'lv', name: 'Latviešu' },
  { code: 'Lin', langCode: 'ln', flag: 'cd', name: 'Lingála' },
  { code: 'Lit', langCode: 'lt', flag: 'lt', name: 'Lietuvių' },
  { code: 'Lug', langCode: 'lg', flag: 'ug', name: 'Luganda' },
  { code: 'Ltz', langCode: 'lb', flag: 'lu', name: 'Lëtzebuergesch' },
  { code: 'Mkd', langCode: 'mk', flag: 'mk', name: 'Македонски' },
  { code: 'Mai', langCode: 'mai', flag: 'in', name: 'मैथिली' },
  { code: 'Mlg', langCode: 'mg', flag: 'mg', name: 'Malagasy' },
  { code: 'Msa', langCode: 'ms', flag: 'my', name: 'Melayu' },
  { code: 'Mal', langCode: 'ml', flag: 'in', name: 'മലയാളം' },
  { code: 'Mlt', langCode: 'mt', flag: 'mt', name: 'Malti' },
  { code: 'Mri', langCode: 'mi', flag: 'nz', name: 'Māori' },
  { code: 'Mar', langCode: 'mr', flag: 'in', name: 'मराठी' },
  { code: 'Mni', langCode: 'mni-Mtei', flag: 'in', name: 'ꯃꯩꯇꯩꯂꯣꯟ' },
  { code: 'Lus', langCode: 'lus', flag: 'in', name: 'Mizo' },
  { code: 'Mon', langCode: 'mn', flag: 'mn', name: 'Монгол' },
  { code: 'Mya', langCode: 'my', flag: 'mm', name: 'မြန်မာ' },
  { code: 'Nep', langCode: 'ne', flag: 'np', name: 'नेपाली' },
  { code: 'Nor', langCode: 'no', flag: 'no', name: 'Norsk' },
  { code: 'Nya', langCode: 'ny', flag: 'mw', name: 'Chichewa' },
  { code: 'Ori', langCode: 'or', flag: 'in', name: 'ଓ Odisha' },
  { code: 'Orm', langCode: 'om', flag: 'et', name: 'Oromoo' },
  { code: 'Pus', langCode: 'ps', flag: 'af', name: 'پښتو' },
  { code: 'Fas', langCode: 'fa', flag: 'ir', name: 'فارسی' },
  { code: 'Pol', langCode: 'pl', flag: 'pl', name: 'Polski' },
  { code: 'Por', langCode: 'pt', flag: 'pt', name: 'Português' },
  { code: 'Pan', langCode: 'pa', flag: 'in', name: 'ਪੰਜਾਬੀ' },
  { code: 'Que', langCode: 'qu', flag: 'pe', name: 'Quechua' },
  { code: 'Ron', langCode: 'ro', flag: 'ro', name: 'Română' },
  { code: 'Rus', langCode: 'ru', flag: 'ru', name: 'Русский' },
  { code: 'Smo', langCode: 'sm', flag: 'ws', name: 'Samoa' },
  { code: 'San', langCode: 'sa', flag: 'in', name: 'संस्कृत' },
  { code: 'Gla', langCode: 'gd', flag: 'gb', name: 'Gàidhlig' },
  { code: 'Nso', langCode: 'nso', flag: 'za', name: 'Sepedi' },
  { code: 'Srp', langCode: 'sr', flag: 'rs', name: 'Српски' },
  { code: 'Sot', langCode: 'st', flag: 'ls', name: 'Sesotho' },
  { code: 'Sna', langCode: 'sn', flag: 'zw', name: 'Shona' },
  { code: 'Snd', langCode: 'sd', flag: 'pk', name: 'سنڌي' },
  { code: 'Sin', langCode: 'si', flag: 'lk', name: 'සිංහල' },
  { code: 'Slk', langCode: 'sk', flag: 'sk', name: 'Slovenčina' },
  { code: 'Slv', langCode: 'sl', flag: 'si', name: 'Slovenščina' },
  { code: 'Som', langCode: 'so', flag: 'so', name: 'Soomaali' },
  { code: 'Esp', langCode: 'es', flag: 'es', name: 'Español' },
  { code: 'Sun', langCode: 'su', flag: 'id', name: 'Sunda' },
  { code: 'Swa', langCode: 'sw', flag: 'tz', name: 'Kiswahili' },
  { code: 'Swe', langCode: 'sv', flag: 'se', name: 'Svenska' },
  { code: 'Tag', langCode: 'tl', flag: 'ph', name: 'Tagalog' },
  { code: 'Tgk', langCode: 'tg', flag: 'tj', name: 'Тоҷикӣ' },
  { code: 'Tam', langCode: 'ta', flag: 'in', name: 'தமிழ்' },
  { code: 'Tat', langCode: 'tt', flag: 'ru', name: 'Татар' },
  { code: 'Tel', langCode: 'te', flag: 'in', name: 'తెలుగు' },
  { code: 'Tha', langCode: 'th', flag: 'th', name: 'ไทย' },
  { code: 'Tir', langCode: 'ti', flag: 'er', name: 'ትግርኛ' },
  { code: 'Tso', langCode: 'ts', flag: 'za', name: 'Xitsonga' },
  { code: 'Tur', langCode: 'tr', flag: 'tr', name: 'Türkçe' },
  { code: 'Tuk', langCode: 'tk', flag: 'tm', name: 'Türkmen' },
  { code: 'Twi', langCode: 'ak', flag: 'gh', name: 'Twi' },
  { code: 'Ukr', langCode: 'uk', flag: 'ua', name: 'Українська' },
  { code: 'Urd', langCode: 'ur', flag: 'pk', name: 'اردو' },
  { code: 'Uig', langCode: 'ug', flag: 'cn', name: 'ئۇيغۇرچە' },
  { code: 'Uzb', langCode: 'uz', flag: 'uz', name: 'Oʻzbek' },
  { code: 'Vie', langCode: 'vi', flag: 'vn', name: 'Tiếng Việt' },
  { code: 'Wel', langCode: 'cy', flag: 'gb', name: 'Cymraeg' },
  { code: 'Xho', langCode: 'xh', flag: 'za', name: 'isiXhosa' },
  { code: 'Yid', langCode: 'yi', flag: 'il', name: 'ייִדיש' },
  { code: 'Yor', langCode: 'yo', flag: 'ng', name: 'Yorùbá' },
  { code: 'Zul', langCode: 'zu', flag: 'za', name: 'isiZulu' }
];

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLang, setSelectedLang] = useState(() => {
    const saved = localStorage.getItem('swoo_selected_lang');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const matched = languages.find(l => l.code === parsed.code);
        if (matched) return matched;
      } catch (e) {
        console.error("Error parsing saved language", e);
      }
    }
    
    // Auto-detect browser language for new visitors
    const browserLang = navigator.language.split('-')[0].toLowerCase();
    const detected = languages.find(l => l.langCode.toLowerCase() === browserLang);
    return detected || languages[0]; // Default to English if no match
  });

  const triggerTranslation = useCallback((langCode) => {
    const selectField = document.querySelector('.goog-te-combo');
    if (selectField) {
      selectField.value = langCode;
      selectField.dispatchEvent(new Event('change'));
      return true;
    }
    return false;
  }, []);

  const changeLanguage = useCallback((lang) => {
    setSelectedLang(lang);
    localStorage.setItem('swoo_selected_lang', JSON.stringify(lang));
    
    // Try immediate trigger
    const success = triggerTranslation(lang.langCode);
    
    // If not ready, retry a few times (helps with lazy-loaded Google Translate)
    if (!success) {
      let retries = 0;
      const interval = setInterval(() => {
        if (triggerTranslation(lang.langCode) || retries > 20) {
          clearInterval(interval);
        }
        retries++;
      }, 500);
    }
  }, [triggerTranslation]);

  // Sync with Google Translate on mount if needed
  useEffect(() => {
    if (selectedLang.langCode !== 'en') {
      const timer = setTimeout(() => {
        triggerTranslation(selectedLang.langCode);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [selectedLang.langCode, triggerTranslation]);

  return (
    <LanguageContext.Provider value={{ selectedLang, changeLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
