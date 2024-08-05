
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
        Welcome: "Welcome To East Food Restaurant 😊",
        description: "Here you can find the most delicious food in the world.",
        main_course: "Main Course",
        main_course_1: "Lasal Cheese",
        main_course_1d: "A savory blend of melted cheeses with a crispy top layer.",
        main_course_2: "Grilled Chicken",
        main_course_2d: "Juicy grilled chicken served with a side of vegetables.",
        salad: "Salad",
        salad_1: "Caesar Salad",
        salad_1d: "Fresh romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
        appetizers: "Appetizers",
        appetizers_1: "Bruschetta",
        appetizers_1d: "Toasted bread topped with fresh tomatoes, basil, and olive oil.",
        appetizers_2: "Stuffed Mushrooms",
        appetizers_2d: "Mushrooms stuffed with a savory cheese and herb filling.",
        drinks: "Drinks",
        drinks_1: "Fresh Lemonade",
        drinks_1d: "Refreshing lemonade made with fresh lemons and a hint of mint.",
        drinks_2: "Iced Tea",
        drinks_2d: "Chilled tea served with a slice of lemon.",
        rice: "Rice",
        rice_1: "Fried Rice",
        rice_1d: "Rice stir-fried with vegetables and a choice of chicken or shrimp."
    },
    ar: {
        Welcome: "أهلاً وسهلاً بكم في مطعم الأكل الشرقي 😊",
        description: "هنا تجدون أطيب وألذ المأكولات في العالم.",
        main_course: "الطبق الرئيسي",
        main_course_1: "جبنة لاسال",
        main_course_1d: "مزيج لذيذ من الجبن المذاب بطبقة مقرمشة.",
        main_course_2: "دجاج مشوي",
        main_course_2d: "دجاج مشوي طري يقدم مع الخضروات.",
        salad: "السلطة",
        salad_1: "سلطة سيزر",
        salad_1d: "خس روماني طازج مع صلصة سيزر وكروتون وجبنة بارميزان.",
        appetizers: "المقبلات",
        appetizers_1: "بروشيتا",
        appetizers_1d: "خبز محمص مع طماطم طازجة، ريحان وزيت زيتون.",
        appetizers_2: "فطر محشي",
        appetizers_2d: "فطر محشو بخليط لذيذ من الجبن والأعشاب.",
        drinks: "المشروبات",
        drinks_1: "ليموناضة طازجة",
        drinks_1d: "ليموناضة منعشة مصنوعة من الليمون الطازج وقليل من النعناع.",
        drinks_2: "شاي مثلج",
        drinks_2d: "شاي بارد يقدم مع شريحة ليمون.",
        rice: "الرز",
        rice_1: "أرز مقلي",
        rice_1d: "أرز مقلي مع الخضروات واختيارك من الدجاج أو الروبيان."
    },
    ms: {
        Welcome: "Selamat Datang Ke Restoran East Food 😊",
        description: "Di sini anda boleh menemui makanan paling lazat di dunia.",
        main_course: "Main Course",
        main_course_1: "Keju Lasal",
        main_course_1d: "Campuran keju cair yang enak dengan lapisan atas yang rangup.",
        main_course_2: "Ayam Panggang",
        main_course_2d: "Ayam panggang yang lembut dihidangkan dengan sayur-sayuran.",
        salad: "Salad",
        salad_1: "Salad Caesar",
        salad_1d: "Daun salad romaine segar dengan dressing Caesar, croutons, dan keju Parmesan.",
        appetizers: "Pembuka selera",
        appetizers_1: "Bruschetta",
        appetizers_1d: "Roti bakar yang disaluti dengan tomato segar, basil dan minyak zaitun.",
        appetizers_2: "Cendawan Berinti",
        appetizers_2d: "Cendawan yang diisi dengan campuran keju dan herba yang sedap.",
        drinks: "Minuman",
        drinks_1: "Lemonade Segar",
        drinks_1d: "Lemonade yang menyegarkan dibuat daripada lemon segar dengan sedikit pudina.",
        drinks_2: "Teh Ais",
        drinks_2d: "Teh sejuk dihidangkan dengan hirisan lemon.",
        rice: "Nasi",
        rice_1: "Nasi Goreng",
        rice_1d: "Nasi yang digoreng dengan sayur-sayuran dan pilihan ayam atau udang."
    },
    zh: {
        Welcome: "欢迎光临东方美食餐厅 😊",
        description: "在这里你可以找到世界上最美味的食物。",
        main_course: "主菜",
        main_course_1: "拉萨尔奶酪",
        main_course_1d: "美味的融化奶酪，上层酥脆。",
        main_course_2: "烤鸡",
        main_course_2d: "多汁的烤鸡，配以蔬菜。",
        salad: "沙拉",
        salad_1: "凯撒沙拉",
        salad_1d: "新鲜的罗马生菜配凯撒酱、面包丁和帕尔马干酪。",
        appetizers: "开胃菜",
        appetizers_1: "意式番茄烤面包",
        appetizers_1d: "烤面包，上面铺着新鲜番茄、罗勒和橄榄油。",
        appetizers_2: "酿蘑菇",
        appetizers_2d: "蘑菇酿入美味的奶酪和香草馅。",
        drinks: "饮料",
        drinks_1: "鲜榨柠檬水",
        drinks_1d: "用新鲜柠檬和薄荷制成的清爽柠檬水。",
        drinks_2: "冰茶",
        drinks_2d: "冰镇茶，配一片柠檬。",
        rice: "米饭",
        rice_1: "炒饭",
        rice_1d: "炒饭配以蔬菜，可以选择鸡肉或虾仁。"
    }
};

function changeLanguage() {
    const lang = document.getElementById('language-select').value;
    setLanguage(lang);
}

function setLanguage(lang) {
    // document.getElementById('Welcome').innerText = translations[lang].Welcome;
    // document.getElementById('description').innerText = translations[lang].description;
    // document.getElementById('main_course').innerText = translations[lang].main_course;
    // document.getElementById('salad').innerText = translations[lang].salad;
    // document.getElementById('appetizers').innerText = translations[lang].appetizers;
    // document.getElementById('drinks').innerText = translations[lang].drinks;
    // document.getElementById('rice').innerText = translations[lang].rice;
    // document.getElementById('language-select').value = lang;
    
    const elementsToTranslate = Object.keys(translations[lang]);
            elementsToTranslate.forEach(key => {
                const element = document.getElementById(key);
                if (element) {
                    if (element.tagName.toLowerCase() === 'h3') {
                        const priceSpan = element.querySelector('.primary-text');
                        const priceText = priceSpan ? priceSpan.outerHTML : '';
                        element.innerHTML = `${translations[lang][key]} ${priceText}`;
                    } else {
                        element.innerText = translations[lang][key];
                    }
                }
            });
    
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