import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({ code: 'Eng', langCode: 'en', flag: 'us', name: 'English' });

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
    { code: 'Div', langCode: 'dv', flag: 'mv', name: 'ދިވެހި' },
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
    { code: 'Ori', langCode: 'or', flag: 'in', name: 'ଓଡ଼ିଆ' },
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

  const handleLanguageChange = (e, lang) => {
    e.stopPropagation();
    setSelectedLang(lang);
    setLangOpen(false);

    // Programmatically trigger the hidden Google Translate dropdown
    setTimeout(() => {
      const selectField = document.querySelector('.goog-te-combo');
      if (selectField) {
        selectField.value = lang.langCode;
        selectField.dispatchEvent(new Event('change'));
      }
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar-wrapper" style={{ height: '126px', zIndex: 1000, position: 'relative' }}>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container flex justify-between align-center">
          <div className="top-left flex align-center">
            <div className="hotline flex align-center">
              <span className="badge">Hotline 24/7</span>
              <span className="phone">(025) 3886 25 16</span>
            </div>
          </div>
          <div className="top-right flex align-center gap-4">
            <a href="#">Sell on Swoo</a>
            <a href="#">Order Trackig</a>
            <div className="divider"></div>
            <div className="dropdown flex align-center gap-1">
              <span>USD</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            {/* Interactive Language Dropdown */}
            <div className="dropdown notranslate flex align-center gap-1" style={{ position: 'relative', cursor: 'pointer' }} onClick={() => setLangOpen(!langOpen)}>
              <img src={`https://flagcdn.com/w20/${selectedLang.flag}.png`} alt={`${selectedLang.code} Flag`} width="16" />
              <span>{selectedLang.code}</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: langOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              {langOpen && (
                <div className="dropdown-menu">
                  {languages.map(lang => (
                    <div 
                      key={lang.code} 
                      className={`dropdown-item ${selectedLang.code === lang.code ? 'active' : ''}`}
                      onClick={(e) => handleLanguageChange(e, lang)}
                    >
                      <img src={`https://flagcdn.com/w20/${lang.flag}.png`} alt={lang.name} width="16" />
                      <span>{lang.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="main-bar">
        <div className="container flex justify-between align-center">
          <div className="logo flex align-center gap-2">
            <div className="logo-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="10" fill="#00d93f"/>
                    <path d="M12 20C12 24.4183 15.5817 28 20 28C24.4183 28 28 24.4183 28 20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                </svg>
            </div>
            <div className="logo-text">
              <span className="brand">SWOO</span>
              <span className="tagline">TECH MART</span>
            </div>
          </div>

          <ul className="nav-links flex gap-4">
            <li className="active"><a href="#" className="flex align-center gap-1">HOMES <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
            <li><a href="#" className="flex align-center gap-1">PAGES <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
            <li><a href="#" className="flex align-center gap-1">PRODUCTS <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>

          <div className="user-actions flex align-center gap-4">
            <div className="flex gap-2">
                <button className="action-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>
                <button className="action-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
            </div>
            
            <Link to="/login" className="user-login flex align-center gap-3">
              <div className="user-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--dark)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="login-text">
                <span className="label">WELCOME</span>
                <span className="value">LOG IN / REGISTER</span>
              </div>
            </Link>

            <div className="cart-action flex align-center gap-3">
              <div className="cart-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                <span className="cart-badge">5</span>
              </div>
              <div className="cart-text">
                <span className="label">CART</span>
                <span className="value">$1,689.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-border"></div>
    </nav>
    </header>
  );
};

export default Navbar;
