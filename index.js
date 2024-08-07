
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
        Cat1: "Main Course",
        Cat1_Meal1: "Lasal Cheese",
        Cat1_Meal1d: "A savory blend of melted cheeses with a crispy top layer.",
        Cat1_Meal2: "Grilled Chicken",
        Cat1_Meal2d: "Juicy grilled chicken served with a side of vegetables.",
        Cat1_Meal3: "Spaghetti Bolognese",
        Cat1_Meal3d: "Classic Italian pasta with a rich meat sauce.",
        Cat1_Meal4: "Vegetable Stir-fry",
        Cat1_Meal4d: "Fresh vegetables stir-fried with a tangy sauce.",
        Cat2: "Appetizers",
        Cat2_Meal1: "Bruschetta",
        Cat2_Meal1d: "Grilled bread topped with fresh tomatoes, basil, and olive oil.",
        Cat2_Meal2: "Stuffed Mushrooms",
        Cat2_Meal2d: "Mushrooms filled with a creamy cheese and herb mixture.",
        Cat2_Meal3: "Spring Rolls",
        Cat2_Meal3d: "Crispy rolls filled with a mixture of vegetables.",
        Cat2_Meal4: "Garlic Bread",
        Cat2_Meal4d: "Toasted bread with a garlic and herb butter spread.",
        Cat3: "Salads",
        Cat3_Meal1: "Caesar Salad",
        Cat3_Meal1d: "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan.",
        Cat3_Meal2: "Greek Salad",
        Cat3_Meal2d: "Mixed greens with olives, feta cheese, tomatoes, and cucumbers.",
        Cat3_Meal3: "Caprese Salad",
        Cat3_Meal3d: "Sliced tomatoes, fresh mozzarella, and basil drizzled with balsamic glaze.",
        Cat3_Meal4: "Quinoa Salad",
        Cat3_Meal4d: "Quinoa mixed with vegetables and a light vinaigrette.",
        Cat4: "Soups",
        Cat4_Meal1: "Tomato Basil Soup",
        Cat4_Meal1d: "Creamy tomato soup with fresh basil.",
        Cat4_Meal2: "Chicken Noodle Soup",
        Cat4_Meal2d: "Classic soup with tender chicken, noodles, and vegetables.",
        Cat4_Meal3: "Minestrone",
        Cat4_Meal3d: "Hearty Italian vegetable soup with beans and pasta.",
        Cat4_Meal4: "Butternut Squash Soup",
        Cat4_Meal4d: "Smooth and creamy soup with a hint of nutmeg.",
        Cat5: "Desserts",
        Cat5_Meal1: "Chocolate Cake",
        Cat5_Meal1d: "Rich chocolate cake with a velvety frosting.",
        Cat5_Meal2: "Cheesecake",
        Cat5_Meal2d: "Creamy cheesecake with a graham cracker crust.",
        Cat5_Meal3: "Fruit Tart",
        Cat5_Meal3d: "Crisp pastry shell filled with custard and topped with fresh fruit.",
        Cat5_Meal4: "Tiramisu",
        Cat5_Meal4d: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.",
        Cat6: "Beverages",
        Cat6_Meal1: "Coffee",
        Cat6_Meal1d: "Freshly brewed coffee.",
        Cat6_Meal2: "Tea",
        Cat6_Meal2d: "A selection of black, green, and herbal teas.",
        Cat6_Meal3: "Lemonade",
        Cat6_Meal3d: "Refreshing lemonade made with real lemons.",
        Cat6_Meal4: "Smoothies",
        Cat6_Meal4d: "A variety of fruit and vegetable smoothies."
       },
    ar: {
        Welcome: "أهلاً وسهلاً بكم في مطعم الأكل الشرقي 😊",
        description: "هنا تجدون أطيب وألذ المأكولات في العالم.",
        Cat1: "الطبق الرئيسي",
        Cat1_Meal1: "جبن لاسال",
        Cat1_Meal1d: "مزيج لذيذ من الجبن المذاب مع طبقة علوية مقرمشة.",
        Cat1_Meal2: "دجاج مشوي",
        Cat1_Meal2d: "دجاج مشوي عصير يقدم مع جانب من الخضار.",
        Cat1_Meal3: "سباغيتي بولونيز",
        Cat1_Meal3d: "معكرونة إيطالية كلاسيكية مع صلصة اللحم الغنية.",
        Cat1_Meal4: "قلي الخضروات",
        Cat1_Meal4d: "خضروات طازجة مقلية بصلصة لاذعة.",
        Cat2: "المقبلات",
        Cat2_Meal1: "بروشيتا",
        Cat2_Meal1d: "خبز مشوي مغطى بالطماطم الطازجة والريحان وزيت الزيتون.",
        Cat2_Meal2: "فطر محشو",
        Cat2_Meal2d: "فطر محشو بمزيج كريمي من الجبن والأعشاب.",
        Cat2_Meal3: "لفائف الربيع",
        Cat2_Meal3d: "لفائف مقرمشة محشوة بمزيج من الخضار.",
        Cat2_Meal4: "خبز بالثوم",
        Cat2_Meal4d: "خبز محمص مغطى بزبدة الثوم والأعشاب.",
        Cat3: "السلطات",
        Cat3_Meal1: "سلطة سيزر",
        Cat3_Meal1d: "خس روماني مقرمش مع تتبيلة سيزر وقطع خبز محمص وبارميزان.",
        Cat3_Meal2: "سلطة يونانية",
        Cat3_Meal2d: "خضار مختلطة مع زيتون وجبنة فيتا وطماطم وخيار.",
        Cat3_Meal3: "سلطة كابريس",
        Cat3_Meal3d: "طماطم مقطعة وجبن موزاريلا طازجة وريحان مغطاة بصلصة البلسمك.",
        Cat3_Meal4: "سلطة الكينوا",
        Cat3_Meal4d: "كينوا مختلطة مع خضروات وتتبيلة خفيفة.",
        Cat4: "الشوربات",
        Cat4_Meal1: "شوربة الطماطم بالريحان",
        Cat4_Meal1d: "شوربة طماطم كريمية مع ريحان طازج.",
        Cat4_Meal2: "شوربة الدجاج بالنودلز",
        Cat4_Meal2d: "شوربة كلاسيكية مع دجاج طري ونودلز وخضار.",
        Cat4_Meal3: "مينستروني",
        Cat4_Meal3d: "شوربة خضروات إيطالية دسمة مع الفاصوليا والمعكرونة.",
        Cat4_Meal4: "شوربة القرع",
        Cat4_Meal4d: "شوربة ناعمة وكريمية مع لمسة من جوزة الطيب.",
        Cat5: "الحلويات",
        Cat5_Meal1: "كعكة الشوكولاتة",
        Cat5_Meal1d: "كعكة شوكولاتة غنية مع كريمة مخملية.",
        Cat5_Meal2: "تشيز كيك",
        Cat5_Meal2d: "تشيز كيك كريمي مع قشرة بسكويت غراهام.",
        Cat5_Meal3: "تارت الفواكه",
        Cat5_Meal3d: "قشرة معجنات مقرمشة مليئة بالكسترد ومغطاة بالفواكه الطازجة.",
        Cat5_Meal4: "تيراميسو",
        Cat5_Meal4d: "حلوى إيطالية كلاسيكية بطبقات من البسكويت المشبع بالقهوة وجبن الماسكاربوني.",
        Cat6: "المشروبات",
        Cat6_Meal1: "قهوة",
        Cat6_Meal1d: "قهوة طازجة.",
        Cat6_Meal2: "شاي",
        Cat6_Meal2d: "مجموعة مختارة من الشاي الأسود والأخضر والعشبي.",
        Cat6_Meal3: "ليمونادة",
        Cat6_Meal3d: "ليمونادة منعشة مصنوعة من الليمون الحقيقي.",
        Cat6_Meal4: "سموثي",
        Cat6_Meal4d: "مجموعة متنوعة من السموثي المصنوع من الفواكه والخضروات."
       },
    ms: {
        Welcome: "Selamat Datang Ke Restoran East Food 😊",
        description: "Di sini anda boleh menemui makanan paling lazat di dunia.",
        Cat1: "Hidangan Utama",
  Cat1_Meal1: "Keju Lasal",
  Cat1_Meal1d: "Gabungan keju cair yang enak dengan lapisan atas yang rangup.",
  Cat1_Meal2: "Ayam Bakar",
  Cat1_Meal2d: "Ayam bakar yang berjus disajikan dengan sayur-sayuran.",
  Cat1_Meal3: "Spaghetti Bolognese",
  Cat1_Meal3d: "Pasta Itali klasik dengan sos daging yang kaya.",
  Cat1_Meal4: "Goreng Sayur",
  Cat1_Meal4d: "Sayur-sayuran segar yang digoreng dengan sos masam.",
  Cat2: "Pembuka Selera",
  Cat2_Meal1: "Bruschetta",
  Cat2_Meal1d: "Roti panggang yang ditutup dengan tomato segar, selasih, dan minyak zaitun.",
  Cat2_Meal2: "Cendawan Berinti",
  Cat2_Meal2d: "Cendawan yang diisi dengan campuran keju dan herba yang berkrim.",
  Cat2_Meal3: "Popia",
  Cat2_Meal3d: "Popia rangup yang diisi dengan campuran sayur-sayuran.",
  Cat2_Meal4: "Roti Bawang Putih",
  Cat2_Meal4d: "Roti bakar yang disapu dengan mentega bawang putih dan herba.",
  Cat3: "Salad",
  Cat3_Meal1: "Salad Caesar",
  Cat3_Meal1d: "Salad romaine yang rangup dengan sos Caesar, crouton, dan Parmesan.",
  Cat3_Meal2: "Salad Greek",
  Cat3_Meal2d: "Sayur-sayuran campur dengan zaitun, keju feta, tomato, dan timun.",
  Cat3_Meal3: "Salad Caprese",
  Cat3_Meal3d: "Tomato yang dihiris, mozzarella segar, dan selasih yang ditaburi dengan cuka balsamik.",
  Cat3_Meal4: "Salad Quinoa",
  Cat3_Meal4d: "Quinoa yang dicampur dengan sayur-sayuran dan vinaigrette ringan.",
  Cat4: "Sup",
  Cat4_Meal1: "Sup Tomato Basil",
  Cat4_Meal1d: "Sup tomato berkrim dengan basil segar.",
  Cat4_Meal2: "Sup Ayam dengan Mi",
  Cat4_Meal2d: "Sup klasik dengan ayam yang lembut, mi, dan sayur-sayuran.",
  Cat4_Meal3: "Minestrone",
  Cat4_Meal3d: "Sup sayur Itali yang mengenyangkan dengan kacang dan pasta.",
  Cat4_Meal4: "Sup Labu Butternut",
  Cat4_Meal4d: "Sup yang halus dan berkrim dengan sedikit buah pala.",
  Cat5: "Pencuci Mulut",
  Cat5_Meal1: "Kek Coklat",
  Cat5_Meal1d: "Kek coklat yang kaya dengan frosting baldu.",
  Cat5_Meal2: "Kek Keju",
  Cat5_Meal2d: "Kek keju yang berkrim dengan kerak biskut graham.",
  Cat5_Meal3: "Tart Buah",
  Cat5_Meal3d: "Kerak pastri yang rangup diisi dengan kastard dan dihiasi buah segar.",
  Cat5_Meal4: "Tiramisu",
  Cat5_Meal4d: "Pencuci mulut Itali klasik dengan lapisan biskut yang direndam dalam kopi dan keju mascarpone.",
  Cat6: "Minuman",
  Cat6_Meal1: "Kopi",
  Cat6_Meal1d: "Kopi yang baru dibrew.",
  Cat6_Meal2: "Teh",
  Cat6_Meal2d: "Pilihan teh hitam, hijau, dan herba.",
  Cat6_Meal3: "Limun",
  Cat6_Meal3d: "Limun yang menyegarkan dibuat dengan limau sebenar.",
  Cat6_Meal4: "Smoothie",
  Cat6_Meal4d: "Pelbagai jenis smoothie buah dan sayur."
 },
    zh: {
        Welcome: "欢迎光临东方美食餐厅 😊",
        description: "在这里你可以找到世界上最美味的食物。",
        Cat1: "主菜",
        Cat1_Meal1: "奶酪拉萨尔",
        Cat1_Meal1d: "美味的融化奶酪混合，顶部酥脆。",
        Cat1_Meal2: "烤鸡",
        Cat1_Meal2d: "多汁的烤鸡，配以蔬菜。",
        Cat1_Meal3: "意大利肉酱面",
        Cat1_Meal3d: "经典的意大利面配丰富的肉酱。",
        Cat1_Meal4: "炒蔬菜",
        Cat1_Meal4d: "新鲜蔬菜用酸甜酱炒制。",
        Cat2: "开胃菜",
        Cat2_Meal1: "意式烤面包",
        Cat2_Meal1d: "烤面包片上铺有新鲜番茄、罗勒和橄榄油。",
        Cat2_Meal2: "酿蘑菇",
        Cat2_Meal2d: "蘑菇中填满了奶酪和香草混合物。",
        Cat2_Meal3: "春卷",
        Cat2_Meal3d: "脆皮春卷，内有蔬菜混合物。",
        Cat2_Meal4: "蒜蓉面包",
        Cat2_Meal4d: "烤面包上抹有蒜蓉和香草黄油。",
        Cat3: "沙拉",
        Cat3_Meal1: "凯撒沙拉",
        Cat3_Meal1d: "脆生菜配凯撒酱、面包丁和帕尔马干酪。",
        Cat3_Meal2: "希腊沙拉",
        Cat3_Meal2d: "混合蔬菜配橄榄、羊奶酪、番茄和黄瓜。",
        Cat3_Meal3: "卡普雷塞沙拉",
        Cat3_Meal3d: "切片番茄、新鲜马苏里拉奶酪和罗勒，淋上香醋。",
        Cat3_Meal4: "藜麦沙拉",
        Cat3_Meal4d: "藜麦与蔬菜混合，配以清淡的油醋汁。",
        Cat4: "汤",
        Cat4_Meal1: "番茄罗勒汤",
        Cat4_Meal1d: "奶油番茄汤配新鲜罗勒。",
        Cat4_Meal2: "鸡肉面汤",
        Cat4_Meal2d: "经典的鸡肉汤，内有嫩鸡肉、面条和蔬菜。",
        Cat4_Meal3: "意大利杂菜汤",
        Cat4_Meal3d: "丰盛的意大利蔬菜汤，内有豆类和意面。",
        Cat4_Meal4: "南瓜汤",
        Cat4_Meal4d: "细腻的南瓜汤，带有肉豆蔻的香气。",
        Cat5: "甜点",
        Cat5_Meal1: "巧克力蛋糕",
        Cat5_Meal1d: "浓郁的巧克力蛋糕，配丝滑的糖霜。",
        Cat5_Meal2: "芝士蛋糕",
        Cat5_Meal2d: "奶油芝士蛋糕，配有全麦饼干底。",
        Cat5_Meal3: "水果挞",
        Cat5_Meal3d: "酥脆的挞皮，内有奶油馅，顶部铺有新鲜水果。",
        Cat5_Meal4: "提拉米苏",
        Cat5_Meal4d: "经典意大利甜点，层层浸有咖啡的手指饼和马斯卡彭奶酪。",
        Cat6: "饮料",
        Cat6_Meal1: "咖啡",
        Cat6_Meal1d: "新鲜煮制的咖啡。",
        Cat6_Meal2: "茶",
        Cat6_Meal2d: "多种选择的红茶、绿茶和花草茶。",
        Cat6_Meal3: "柠檬水",
        Cat6_Meal3d: "清爽的柠檬水，由新鲜柠檬制成。",
        Cat6_Meal4: "奶昔",
        Cat6_Meal4d: "多种水果和蔬菜奶昔。"
    }
};

function changeLanguage() {
    const lang = document.getElementById('language-select').value;
    setLanguage(lang);
}

function setLanguage(lang) {
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