// Language switching functionality for Kandenuwara Tamil Maha Vidyalayam Website

let currentLanguage = 'en';

// Language translations object
const translations = {
    'en': {
        'schoolName': 'Kandenuwara Tamil Maha Vidyalayam',
        'schoolAbbr': 'KTMV',
        'navHome': 'Home',
        'navAbout': 'About Us',
        'navNews': 'News',
        'navAcademics': 'Academics',
        'navContact': 'Contact',
        'navLogin': 'Login',
        'navAchievements': 'Achievements',
        'navProjects': 'Projects',
        'navUpcoming': 'Upcoming Events',
        'heroMotto': 'அறிவு வழி ஒழுக்கு | Practice In order to knowledge',
        'heroTitle': 'A Temple of Wisdom Nestled in the Mountains',
        'heroSubtitle': 'மலைகளின் மடியில் ஒரு ஞானாலயம்! Kandenuwara Tamil Maha Vidyalayam - Nurturing minds, building futures',
        'heroCta1': 'Explore Our School',
        'heroCta2': 'Contact Us',
        'statsStudents': 'Students',
        'statsTeachers': 'Qualified Teachers',
        'statsYears': 'Years of Excellence',
        'statsSuccess': 'Success Rate',
        'aboutTitle': 'About Our School',
        'aboutSubtitle': 'Learn about our history, mission, and the message from our principal.',
        'aboutHistoryTitle': 'Our Legacy',
        'aboutHistoryText': 'மத்திய மாகாணத்தின் எழில் கொஞ்சும் கந்தேனுவர கிராமத்தில், அறிவொளி பரப்பும் ஆலயமாக திகழ்கிறது எமது வித்தியாலயம். Founded over 50 years ago, Kandenuwara Tamil Maha Vidyalayam has been a beacon of knowledge and culture in the Matale district. We are committed to fostering academic excellence and personal growth in a supportive and inclusive environment.',
        'aboutPrincipalTitle': 'Principal\'s Message',
        'aboutPrincipalText': '"Welcome to our school! We believe in nurturing not just students, but future leaders. Our dedicated faculty and comprehensive curriculum are designed to equip students with the skills and values needed to succeed in an ever-changing world. தரம் 6 முதல் 13 வரை, மாணவர்களுக்கு வேறும் கல்வியை மட்டுமல்ல, சிறப்பான எதிர்காலத்திற்கான அடித்தளத்தையும் அமைக்கின்றோம்."',
        'newsTitle': 'News & Announcements',
        'newsSubtitle': 'Stay updated with the latest happenings at our school',
        'newsTitle1': 'Annual Sports Meet 2025',
        'newsExcerpt1': 'Our annual sports meet will be held on March 25th with various competitions and events for all grades.',
        'newsTitle2': 'Excellent Exam Results',
        'newsExcerpt2': 'Our students have achieved outstanding results in the national examinations with a 98% pass rate.',
        'newsTitle3': 'New Smart Classrooms',
        'newsExcerpt3': 'We have upgraded our classrooms with smart boards and modern teaching aids to enhance learning.',
        'newsReadMore': 'Read more',
        'achievementsTitle': 'Evidence of Our Pride',
        'achievementsSubtitle': 'Explore our students\' achievements, ongoing projects, and upcoming initiatives.',
        'tabAchievements': 'Achievements',
        'tabProjects': 'Projects',
        'tabUpcoming': 'Upcoming',
        'contactTitle': 'Contact Us',
        'contactSubtitle': 'We\'d love to hear from you. Reach out with any questions or inquiries.',
        'contactGetInTouch': 'Get in Touch',
        'contactAddress': 'Kandenuwara, Matale, Central Province, Sri Lanka.',
        'contactEmail': 'info@ktmv.lk',
        'contactHours': '7:30 AM - 4:30 PM (Mon - Fri)',
        'formName': 'Your Name',
        'formEmail': 'Your Email',
        'formSubject': 'Subject',
        'formMessage': 'Your Message',
        'formSubmit': 'Send Message',
        'footerAbout': 'About School',
        'footerAboutText': 'Kandenuwara Tamil Maha Vidyalayam is committed to providing quality education to students in the Matale district, nurturing them to become responsible citizens and future leaders.',
        'footerQuickLinks': 'Quick Links',
        'footerResources': 'Resources',
        'footerCalendar': 'Academic Calendar',
        'footerDownloads': 'Downloads',
        'footerGallery': 'Photo Gallery',
        'footerFAQ': 'FAQ',
        'footerContact': 'Contact',
        'footerRights': 'All rights reserved.',
        'welcomeMessage': 'Welcome to Excellence in Education',
        'learnMore': 'Learn More'
    },
    'ta': {
        'schoolName': 'கந்தேனுவர தமிழ் மஹா வித்தியாலயம்',
        'schoolAbbr': 'க.த.ம.வி',
        'navHome': 'முகப்பு',
        'navAbout': 'எங்களைப் பற்றி',
        'navNews': 'செய்திகள்',
        'navAcademics': 'கல்வி',
        'navContact': 'தொடர்பு',
        'navLogin': 'உள்நுழைய',
        'navAchievements': 'சாதனைகள்',
        'navProjects': 'திட்டங்கள்',
        'navUpcoming': 'வரவிருக்கும்',
        'heroMotto': 'அறிவு வழி ஒழுக்கு | Practice In order to knowledge',
        'heroTitle': 'மலைகளின் மடியில் ஒரு ஞானாலயம்',
        'heroSubtitle': 'கந்தேனுவர தமிழ் மஹா வித்தியாலயம் - மனதை வளர்ப்பது, எதிர்காலத்தை கட்டமைப்பது',
        'heroCta1': 'எங்கள் பள்ளியை ஆராயுங்கள்',
        'heroCta2': 'எங்களை தொடர்பு கொள்ள',
        'statsStudents': 'மாணவர்கள்',
        'statsTeachers': 'தரமான ஆசிரியர்கள்',
        'statsYears': 'சிறந்த விளங்கும் ஆண்டுகள்',
        'statsSuccess': 'வெற்றி விகிதம்',
        'aboutTitle': 'எங்கள் பள்ளி பற்றி',
        'aboutSubtitle': 'எங்கள் வரலாறு, நோக்கம் மற்றும் முதல்வரின் செய்தியை அறிக.',
        'aboutHistoryTitle': 'எங்கள் மரபு',
        'aboutHistoryText': 'மத்திய மாகாணத்தின் எழில் கொஞ்சும் கந்தேனுவர கிராமத்தில், அறிவொளி பரப்பும் ஆலயமாக திகழ்கிறது எமது வித்தியாலயம். 50 ஆண்டுகளுக்கு மேலாக, கந்தேனுவர தமிழ் மஹா வித்தியாலயம் மாதளை மாவட்டத்தில் அறிவு மற்றும் கலாசாரத்தின் ஒளிமிண்ணாக விளங்கிறது.',
        'aboutPrincipalTitle': 'முதல்வரின் செய்தி',
        'aboutPrincipalText': '"எங்கள் பள்ளிக்கு சாதரயென் பிவிகனிமு! மாணவர்களை பமணக் நோவ, எதிர்கால தலைவர்களை வளர்க்க நாங்கள் நம்புகிறோம். தரம் 6 முதல் 13 வரை, மாணவர்களுக்கு வேறும் கல்வியை மட்டுமல்ல, சிறப்பான எதிர்காலத்திற்கான அடித்தளத்தையும் அமைக்கின்றோம்."',
        'newsTitle': 'செய்திகள் மற்றும் அறிவிப்புகள்',
        'newsSubtitle': 'எங்கள் பள்ளியின் சமீபத்திய நிகழ்வுகளுடன் தொடர்பு கொள்ளுங்கள்',
        'newsTitle1': 'வருடாந்திர விளையாட்டு சந்திப்பு 2025',
        'newsExcerpt1': 'எங்கள் வருடாந்திர விளையாட்டு சந்திப்பு மார்ச் 25 அன்று அனைத்து வகுப்புகளுக்கான பல்வேறு போட்டிகள் மற்றும் நிகழ்வுகளுடன் நடைபெறும்.',
        'newsTitle2': 'சிறந்த தேர்வு முடிவுகள்',
        'newsExcerpt2': 'தேசிய தேர்வுகளில் எங்கள் மாணவர்கள் 98% தேர்ச்சி விகிததுடன் அற்புதமான முடிவுகளை அடைந்துள்ளனர்.',
        'newsTitle3': 'புதிய ஸ்மார்ட் வகுப்பறைகள்',
        'newsExcerpt3': 'கற்றலை மேம்படுத்த எங்கள் வகுப்பறைகளை ஸ்மார்ட் போர்டுகள் மற்றும் நவீன உதவிகளுடன் மேம்படுத்தியுள்ளோம்.',
        'newsReadMore': 'மேலும் வாசிக்க',
        'achievementsTitle': 'எங்கள் பெருமையின் சான்றுகள்',
        'achievementsSubtitle': 'எங்கள் மாணவர்களின் சாதனைகள், நடந்து கொண்டிருக்கும் திட்டங்கள் மற்றும் வரவிருக்கும் முயற்சிகளை ஆராயுங்கள்.',
        'tabAchievements': 'சாதனைகள்',
        'tabProjects': 'திட்டங்கள்',
        'tabUpcoming': 'வரவிருக்கும்',
        'contactTitle': 'எங்களை தொடர்பு கொள்ள',
        'contactSubtitle': 'உங்களிடமிருந்து கேட்பதில் நாங்கள் மகிழ்ச்சியடைவோம். எந்த கேள்விகள் அல்லது விசாரணைகளுக்கும் தொடர்பு கொள்ளவும்.',
        'contactGetInTouch': 'தொடர்பு கொள்ள',
        'contactAddress': 'கந்தேனுவர, மாதளை, மத்திய மாகாணம், இலங்கை.',
        'contactEmail': 'info@ktmv.lk',
        'contactHours': 'காலை 7:30 - பிற்பகல் 4:30 (திங்கள் - வெள்ளி)',
        'formName': 'உங்கள் பெயர்',
        'formEmail': 'உங்கள் மின்னஞ்சல்',
        'formSubject': 'தலைப்பு',
        'formMessage': 'உங்கள் செய்தி',
        'formSubmit': 'செய்தியை அனுப்பு',
        'footerAbout': 'பள்ளி பற்றி',
        'footerAboutText': 'கந்தேனுவர தமிழ் மஹா வித்தியாலயம் மாதளை மாவட்டத்தின் மாணவர்களுக்கு தரமான கல்வியை வழங்கவதற்கும், அவர்களை பொறுப்பான குடிமக்களாகவும் எதிர்கால தலைவர்களாகவும் வளர்ப்பதற்கும் உறுதிபூண்டுள்ளது.',
        'footerQuickLinks': 'விரைவு இணைப்புகள்',
        'footerResources': 'வளங்கள்',
        'footerCalendar': 'கல்வி நாள்காட்டி',
        'footerDownloads': 'பதிவிறக்கங்கள்',
        'footerGallery': 'புகைப்பட தொகுப்பு',
        'footerFAQ': 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
        'footerContact': 'தொடர்பு',
        'footerRights': 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
        'welcomeMessage': 'கல்வியில் சிறப்புக்கு வரவேற்கிறோம்',
        'learnMore': 'மேலும் அறிய'
    },
    'si': {
        'schoolName': 'කන්දේනුවර දමිළ මහා විද්‍යාලය',
        'schoolAbbr': 'ක.ද.ම.වි',
        'navHome': 'මුල් පිටුව',
        'navAbout': 'අපි ගැන',
        'navNews': 'පුවත්',
        'navAcademics': 'අධ්‍යයන',
        'navContact': 'සම්බන්ධ වන්න',
        'navLogin': 'පිවිසෙන්න',
        'navAchievements': 'ජයග්‍රහණ',
        'navProjects': 'ව්‍යාපෘති',
        'navUpcoming': 'ඉදිරියේදී',
        'heroMotto': 'අறිවු වෂි ඔෂුක්කු | Practice In order to knowledge',
        'heroTitle': 'කන්ද ලග සහිකර ඉති ධාන්‍යේ දේවාලයක්',
        'heroSubtitle': 'කන්දේනුවර දමිළ මහා විද්‍යාලය - මනස් සංර්ධනය කිරීම, අනාගතය ගොඩනැගීම',
        'heroCta1': 'අපේ පාසල ගවේෂණය කරන්න',
        'heroCta2': 'අප අමතන්න',
        'statsStudents': 'ශිෂ්‍යයින්',
        'statsTeachers': 'ගුණාත්මක ගුරුවරුන්',
        'statsYears': 'ප්‍රගතියේ වසර',
        'statsSuccess': 'සාර්ථක අනුපාතය',
        'aboutTitle': 'අපේ පාසල ගැන',
        'aboutSubtitle': 'අපගේ ඉතිහාසය, මෙහෙවර සහ අපගේ ප්‍රධානාචාර්යවරයාගේ පනිවිඩය ගැන උගන් ගන්න.',
        'aboutHistoryTitle': 'අපගේ ධුරුමය',
        'aboutHistoryText': 'මධ්‍ය පළාතේ සුන්දර කන්දේනුවර ගමේ, ධානාලේකය පහිරවීමේ දේවාලයක් ලෙස කටයුතු කරය. වසර 50කට වඩි කාලයක් තිස්සේ, කන්දේනුවර දමිළ මහා විද්‍යාලය මාතලේ දිස්ත්‍රික්කයේ දානුමේ හා සංස්කෘතියේ ආලෝක ස්තම්භයක් ලෙස සේවය කර ඇත.',
        'aboutPrincipalTitle': 'ප්‍රධානාචාර්යවරයාගේ පනිවිඩය',
        'aboutPrincipalText': '"අපගේ පාසලට සාදරයෙන් පිවිගනිමු! ශිෂ්‍යයින් පමණක් නොව, අනාගත නායකයින් වර්ධනය කිරීමේ විශ්වාසය අප සතුව. 6 සිට 13 ශ්‍රේණි දක්වා, ශිෂ්‍යයින්ට අධ්‍යාපනය පමණක් නොව, අතිරේක අනාගතයක් සලහා පදනමක් සපයනවා."',
        'newsTitle': 'පුවත් හා නිවේදන',
        'newsSubtitle': 'අපේ පාසලේ නවතම සිදුවීම් සමග යාවත්කාලීනව රැඳෙන්න',
        'newsTitle1': 'වාර්ෂික ක්‍රීඩා ඉමතුම 2025',
        'newsExcerpt1': 'අපගේ වාර්ෂික ක්‍රීඩා ඉමතුම මාර්තු 25 වන දින සියලු ශ්‍රේණි සහ විවිධ තරඟ හා ඉස්වරන් සමග පැවැත්වේ.',
        'newsTitle2': 'ප්‍රශස්ත විභාග ප්‍රතිපල',
        'newsExcerpt2': 'ජාතික විභාගවලදී අපගේ ශිෂ්‍යයින් 98% උක්මවන ඉහල ප්‍රතිපල ලබ ඇත.',
        'newsTitle3': 'නව ස්මාර්ට් පන්ති කාමර',
        'newsExcerpt3': 'උගෙනීම වැඩිදිකරණ සලහා අපි අපගේ පන්ති කාමර ස්මාර්ට් පුරුරු හා නවීන උපකරණ සමග යාවත්කාලීන කර ඇත.',
        'newsReadMore': 'තවත් කියවන්න',
        'achievementsTitle': 'අපගේ ආඩම්බරයේ සාක්ෂි',
        'achievementsSubtitle': 'අපගේ ශිෂ්‍යයින්ගේ ජයග්‍රහණ, සිදුවෙමින් පවතින ව්‍යාපෘති හා ඉදිරි ගමනාන්ත ගවේෂණය කරන්න.',
        'tabAchievements': 'ජයග්‍රහණ',
        'tabProjects': 'ව්‍යාපෘති',
        'tabUpcoming': 'ඉදිරියේදී',
        'contactTitle': 'අප අමතන්න',
        'contactSubtitle': 'ඔබගෙන් ඇසීමට අපි සතුටු වෙමු. කිසිම ප්‍රශ්නයක් හො විමසීමක් සලහා සම්බන්ධ වන්න.',
        'contactGetInTouch': 'සම්බන්ධ වන්න',
        'contactAddress': 'කන්දේනුවර, මාතලේ, මධ්‍ය පළාත, ශ්‍රී ලංකාව.',
        'contactEmail': 'info@ktmv.lk',
        'contactHours': 'පෙ.ව. 7:30 - ප.ව. 4:30 (සඳු - සිකු)',
        'formName': 'ඔබේ නම',
        'formEmail': 'ඔබේ ඊමේල්',
        'formSubject': 'විෂය',
        'formMessage': 'ඔබේ පනිවිඩය',
        'formSubmit': 'පනිවිඩය යවන්න',
        'footerAbout': 'පාසල ගැන',
        'footerAboutText': 'කන්දේනුවර දමිළ මහා විද්‍යාලය මාතලේ දිස්ත්‍රික්කයේ ශිෂ්‍යයින්ට ගුණාත්මක අධ්‍යාපනය ලබා දීමට හා ඔවුන් වගකීම් සහිත පුරවැසියන් හා අනාගත නායකයින් බව පත් කිරීමට ප්‍රතිඥා දී ඇත.',
        'footerQuickLinks': 'ක්‍ෂණික සබැඳි',
        'footerResources': 'සම්පත්',
        'footerCalendar': 'අධ්‍යාපනික දින දර්ශනය',
        'footerDownloads': 'බාගත කිරීම්',
        'footerGallery': 'ඡායාරූප සංග්‍රහය',
        'footerFAQ': 'නිතර අසන ප්‍රශ්න',
        'footerContact': 'සම්බන්ධ වන්න',
        'footerRights': 'සියලුම හිමිකම් ඉවිරිනි.',
        'welcomeMessage': 'අධ්‍යාපනයේ උතුමකමට සාදරයෙන්',
        'learnMore': 'තව දැනගන්න'
    }
};

// Initialize language system
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguageSystem();
});

// Initialize language switching functionality
function initializeLanguageSystem() {
    const langButtons = document.querySelectorAll('.lang-switcher .btn');
    
    // Load saved language or default to English
    const savedLanguage = localStorage.getItem('schoolLanguage') || 'en';
    currentLanguage = savedLanguage;
    
    // Set active button
   document.addEventListener('click', function(e) {
    if (e.target.matches('.dropdown-item[data-lang]')) {
        e.preventDefault();
        const lang = e.target.getAttribute('data-lang');
        const currentLangSpan = document.getElementById('currentLang');
        
        // Update displayed language
        const langMap = { 'en': 'ENG', 'ta': 'TAM', 'si': 'SIN' };
        if (currentLangSpan) {
    currentLangSpan.textContent = langMap[currentLanguage];
}
        
        // Switch language
        switchLanguage(lang);
    }
});
    
    // Update page with saved language
    updatePageLanguage(currentLanguage);
    
    // Add event listeners to language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    console.log('Language system initialized with:', currentLanguage);
}

// Switch language function
function switchLanguage(lang) {
    if (!translations[lang]) {
        console.error('Language not supported:', lang);
        return;
    }
    
    currentLanguage = lang;
    
    // Update active button
    const langButtons = document.querySelectorAll('.lang-switcher .btn');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update page content
    updatePageLanguage(lang);
    
    // Save language preference
    localStorage.setItem('schoolLanguage', lang);
    
    // Update page title
    updatePageTitle();
    
    console.log('Language switched to:', lang);
}

// Update page content with selected language
function updatePageLanguage(lang) {
    if (!translations[lang]) {
        console.error('Translation not found for language:', lang);
        return;
    }
    
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        const translation = translations[lang][key];
        
        if (translation) {
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update document direction for Tamil and Sinhala if needed
    const htmlElement = document.documentElement;
    if (lang === 'ta' || lang === 'si') {
        htmlElement.setAttribute('lang', lang);
        // Add font classes for Tamil and Sinhala
        document.body.classList.add('tamil-font');
    } else {
        htmlElement.setAttribute('lang', 'en');
        document.body.classList.remove('tamil-font');
    }
}

// Update page title based on current language
function updatePageTitle() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    let titleKey = 'schoolName';
    
    // Set title based on current page
    switch (currentPage) {
        case 'about.html':
            titleKey = 'navAbout';
            break;
        case 'news.html':
            titleKey = 'navNews';
            break;
        case 'academics.html':
            titleKey = 'navAcademics';
            break;
        case 'achievements.html':
            titleKey = 'navAchievements';
            break;
        case 'projects.html':
            titleKey = 'navProjects';
            break;
        case 'upcoming.html':
            titleKey = 'navUpcoming';
            break;
        case 'contact.html':
            titleKey = 'navContact';
            break;
        case 'login.html':
            titleKey = 'navLogin';
            break;
        default:
            titleKey = 'schoolName';
    }
    
    const schoolName = translations[currentLanguage]['schoolName'];
    const pageTitle = translations[currentLanguage][titleKey];
    
    if (titleKey === 'schoolName') {
        document.title = schoolName;
    } else {
        document.title = `${pageTitle} - ${schoolName}`;
    }
}

// Get translation for a specific key
function getTranslation(key, lang = null) {
    const language = lang || currentLanguage;
    if (translations[language] && translations[language][key]) {
        return translations[language][key];
    }
    // Fallback to English if translation not found
    return translations['en'][key] || key;
}

// Add new translations dynamically
function addTranslations(lang, newTranslations) {
    if (!translations[lang]) {
        translations[lang] = {};
    }
    Object.assign(translations[lang], newTranslations);
}

// Get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Set language without UI update (for programmatic use)
function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('schoolLanguage', lang);
        return true;
    }
    return false;
}

// Format text with language-specific formatting
function formatText(text, lang = null) {
    const language = lang || currentLanguage;
    
    // Add any language-specific text formatting here
    switch (language) {
        case 'ta':
            // Tamil-specific formatting
            return text;
        case 'si':
            // Sinhala-specific formatting
            return text;
        default:
            return text;
    }
}

// Export language functions for global use
window.languageSystem = {
    switchLanguage,
    updatePageLanguage,
    getTranslation,
    addTranslations,
    getCurrentLanguage,
    setLanguage,
    formatText,
    translations
};

// Make key functions globally available
window.switchLanguage = switchLanguage;
window.updatePageLanguage = updatePageLanguage;
window.getTranslation = getTranslation;
window.currentLanguage = currentLanguage;