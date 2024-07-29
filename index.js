
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

const translations = {
    en: {
        Welcome: "Welcome To East Food Restaurant",
        description: "Here you can find the Most deliscious food in the world",
        main_course: "Main Course",
        salad: "Salad",
        appetizers: "Appetizers",
        drinks: "Drinks",
        rice: "Rice"
    },
    ar: {
        Welcome: " أهلاً وسهلاً بكم في مطعم الأكل الشرقي",
        description: "هنا تجدون أطيب وألذ المأكولات في العالم",
        main_course: "الطبق الرئيسي",
        salad: "السلطة",
        appetizers: "المقبلات",
        drinks: "المشروبات",
        rice: "الرز"
    },
    ms: {
        Welcome: "Selamat Datang Ke Restoran East Food",
        description: "Di sini anda boleh menemui makanan Paling lazat di dunia",
        main_course: "Main Course",
        salad: "Salad",
        appetizers: "Pembuka selera",
        drinks: "Minuman",
        rice: "Nasi"
    },
    zh: {
        Welcome: "欢迎光临东方美食餐厅",
        description: "在这里你可以找到世界上最美味的食物",
        main_course: "主菜",
        salad: "沙拉",
        appetizers: "开胃菜",
        drinks: "饮料",
        rice: "米饭"
    }
};

function changeLanguage() {
    const lang = document.getElementById('language-select').value;
    setLanguage(lang);
}

function setLanguage(lang) {
    document.getElementById('Welcome').innerText = translations[lang].Welcome;
    document.getElementById('description').innerText = translations[lang].description;
    document.getElementById('main_course').innerText = translations[lang].main_course;
    document.getElementById('salad').innerText = translations[lang].salad;
    document.getElementById('appetizers').innerText = translations[lang].appetizers;
    document.getElementById('language-select').value = lang;
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

function detectLanguage() {
    const browserLang = navigator.language.slice(0, 2);
    const supportedLangs = ['en', 'ar', 'ms', 'zh'];
    const defaultLang = 'en';
    const lang = supportedLangs.includes(browserLang) ? browserLang : defaultLang;
    setLanguage(lang);
}

window.onload = detectLanguage;