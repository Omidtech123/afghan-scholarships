/* ==========================================================================
   Rah — shared scholarship dataset (English)
   Extracted from the original scholarship-app.html so every page (finder,
   browse, individual pages) reads from one source of truth.
   ========================================================================== */

const SCHOLARSHIPS = [
  {
    "id": "uwc",
    "name": "UWC (United World Colleges) — Afghanistan National Committee",
    "country": "Various (16+ countries)",
    "countryTag": "Various / Multiple",
    "levels": [
      "secondary"
    ],
    "levelLabel": "Secondary / High School",
    "ageMin": 15,
    "ageMax": 17,
    "englishMin": 2,
    "fields": [
      "Open to most fields"
    ],
    "funding": "Fully funded",
    "deadline": "Applications open yearly — deadline typically late October",
    "summary": "A fully funded two-year international high school program (IB Diploma) at UWC campuses worldwide, run through a dedicated Afghanistan National Committee.",
    "facts": [
      "Fully funded: tuition, room & board, and travel support",
      "Two-year International Baccalaureate Diploma Programme",
      "Applications open yearly, deadline typically late October",
      "70% of UWC students receive full or partial financial aid"
    ],
    "eligibility": [
      "Afghan citizen, aged 15–17 at time of application",
      "Currently enrolled in or have completed middle/high school (including non-traditional paths like online or community-based learning)",
      "Living in Afghanistan or a neighboring country (Pakistan, Iran, Tajikistan, Uzbekistan, Turkmenistan), or as a refugee elsewhere",
      "Valid Tazkira and, ideally, a valid Afghan passport"
    ],
    "documents": [
      "Tazkira (and passport if available)",
      "School transcripts / records",
      "Personal essay(s) as required by the application",
      "Reference from a teacher or mentor"
    ],
    "tips": [
      "Show intellectual curiosity beyond grades — clubs, self-study, community projects all count",
      "Female applicants and those who studied through alternative means are specifically encouraged",
      "Write genuinely about your values and community involvement, not just achievements",
      "Apply well before the October 31 deadline — the process is fully online now"
    ],
    "officialUrl": "https://www.uwc.org/",
    "translations": {
      "prs": {
        "name": "یو‌دبلیو‌سی (کالج‌های متحد جهانی) — کمیته ملی افغانستان",
        "country": "کشورهای مختلف (بیشتر از ۱۶ کشور)",
        "summary": "یک برنامه دو ساله تحصیلات متوسطه بین‌المللی (دیپلوم آی‌بی) با تمویل کامل در کمپس‌های یو‌دبلیو‌سی در سراسر جهان، از طریق یک کمیته ملی مخصوص افغانستان.",
        "facts": [
          "تمویل کامل: شامل فیس تحصیلی، خوراک و اقامت، و کمک هزینه سفر",
          "برنامه دو ساله دیپلوم بین‌المللی بکلوریا (IB)",
          "درخواست‌ها هر سال باز می‌شود، ضرب‌الاجل معمولاً اواخر اکتوبر است",
          "۷۰٪ محصلان یو‌دبلیو‌سی کمک مالی کامل یا جزئی دریافت می‌کنند"
        ],
        "eligibility": [
          "تبعه افغانستان، سن ۱۵ تا ۱۷ سال در زمان درخواست",
          "در حال حاضر در مکتب متوسطه یا لیسه باشد یا آن را تمام کرده باشد (شامل راه‌های غیر رسمی مانند آموزش آنلاین یا اجتماعی)",
          "ساکن افغانستان یا یکی از کشورهای همسایه (پاکستان، ایران، تاجکستان، ازبکستان، ترکمنستان)، یا به عنوان مهاجر در جای دیگر",
          "تذکره معتبر و ترجیحاً پاسپورت معتبر افغانی"
        ],
        "tips": [
          "کنجکاوی فکری خود را فراتر از نمرات نشان دهید — کلوپ‌ها، خودآموزی، و پروژه‌های اجتماعی همه اهمیت دارند",
          "محصلان دختر و کسانی که از راه‌های غیر رسمی درس خوانده‌اند به طور خاص تشویق می‌شوند",
          "در مورد ارزش‌ها و مشارکت اجتماعی خود صادقانه بنویسید، نه فقط دستاوردها",
          "پیش از ضرب‌الاجل ۳۱ اکتوبر درخواست دهید — روند اکنون کاملاً آنلاین است"
        ],
        "levelLabel": "ثانوی / لیسه",
        "funding": "بورسیه کامل",
        "deadline": "درخواست‌ها هر سال باز می‌شود — ضرب‌الاجل معمولاً اواخر اکتوبر است",
        "documents": [
          "تذکره (و پاسپورت در صورت موجود بودن)",
          "ترانسکریپت‌ها / اسناد مکتب",
          "انشای شخصی طبق نیاز درخواست",
          "توصیه‌نامه از یک معلم یا مشاور"
        ]
      },
      "pus": {
        "name": "یو‌دبلیو‌سی (نړیوال متحد کالجونه) — د افغانستان ملي کمېټه",
        "country": "بېلابېل هېوادونه (له ۱۶ څخه ډېر)",
        "summary": "د یو‌دبلیو‌سی په نړیوالو کمپسونو کې بشپړ تمویل شوی دوه کلن نړیوال لیسه‌یی برنامه (د IB ډیپلوم)، چې د افغانستان لپاره ځانګړې ملي کمېټې له لارې چلېږي.",
        "facts": [
          "بشپړ تمویل: د زده‌کړې فیس، خواړه او استوګنه، او د سفر مرسته",
          "د نړیوال بکلوریا (IB) ډیپلوم دوه کلن پروګرام",
          "غوښتنلیکونه هر کال خلاصېږي، وروستۍ نېټه معمولا د اکتوبر په پای کې ده",
          "د یو‌دبلیو‌سی ۷۰٪ زده‌کوونکي بشپړه یا نیمه مالي مرسته ترلاسه کوي"
        ],
        "eligibility": [
          "د افغانستان تبعه، د غوښتنلیک په وخت کې ۱۵ تر ۱۷ کلن",
          "اوس مهال په منځنۍ ښوونځي یا لیسه کې وي یا یې پای ته رسولی وي (د آنلاین یا ټولنیزو زده‌کړو غیر رسمي لارې هم شاملې دي)",
          "په افغانستان یا ګاونډي هېواد (پاکستان، ایران، تاجکستان، ازبکستان، ترکمنستان) کې اوسېدونکی، یا په بل ځای کې د کډوال په توګه",
          "اعتبار لرونکې تذکره او په غوره توګه اعتبار لرونکی افغان پاسپورت"
        ],
        "tips": [
          "خپل فکري لېوالتیا له نمرو ور هاخوا وښایاست — کلبونه، خپلواک زده‌کړه، او ټولنیز پروژې ټول اهمیت لري",
          "ښځینه غوښتونکي او هغه چې د غیر رسمي لارو له مخې یې زده‌کړه کړې، په ځانګړي ډول هڅول کېږي",
          "د خپلو ارزښتونو او ټولنیز ونډې په اړه رښتیني ولیکئ، نه یوازې لاسته راوړنې",
          "د اکتوبر ۳۱ نېټې دمخه غوښتنلیک ورکړئ — بهیر اوس بشپړ آنلاین دی"
        ],
        "levelLabel": "لیسه / متوسطه",
        "funding": "بشپړ تمویل شوی",
        "deadline": "غوښتنلیکونه هر کال خلاصیږي — وروستۍ نېټه معمولا د اکتوبر په وروستیو کې ده",
        "documents": [
          "تذکره (او پاسپورت که شتون ولري)",
          "د ښوونځي ثبتونه / اسناد",
          "شخصي انشا لکه څنګه چې غوښتنلیک ورته اړتیا لري",
          "د یو ښوونکي یا مشاور توصیه لیک"
        ]
      }
    }
  },
  {
    "id": "opendoors",
    "name": "Open Doors — Russian Government Scholarship",
    "country": "Russia",
    "countryTag": "Russia",
    "levels": [
      "undergrad",
      "masters",
      "phd"
    ],
    "levelLabel": "Bachelor's, Master's, PhD",
    "ageMin": 17,
    "ageMax": 45,
    "englishMin": 1,
    "fields": [
      "Open to most fields"
    ],
    "funding": "Fully funded",
    "deadline": "Staged online Olympiad — opens across several months, check official site",
    "summary": "A Russian government-backed Olympiad-style competition offering fully funded bachelor's, master's, PhD, and postdoctoral study at top Russian universities, open to applicants worldwide.",
    "facts": [
      "Full tuition waiver plus a government stipend",
      "Free preparatory Russian-language course if needed",
      "Selection via an online Olympiad (portfolio, test, and interview stages)",
      "Thousands of Afghan students already study in Russia through similar programs"
    ],
    "eligibility": [
      "Any nationality, including Afghan citizens, is eligible",
      "Bachelor's track: completed high school",
      "Master's track: hold a bachelor's or specialist degree",
      "PhD track: hold a master's or specialist degree",
      "Proficiency in English or Russian (Russian courses provided if needed)"
    ],
    "documents": [
      "Passport",
      "Academic transcripts / diploma",
      "Portfolio of academic records and certificates",
      "Motivation statement"
    ],
    "tips": [
      "Build a strong portfolio early — academic records, certificates, and achievements are scored by a jury",
      "Practice the entrance test format in advance; you get a limited number of attempts",
      "If applying without Russian, double check which universities and programs offer English-taught tracks",
      "Register as early as the application window opens — it happens in stages over several months"
    ],
    "officialUrl": "https://education-in-russia.com/",
    "translations": {
      "prs": {
        "name": "اوپن دورز — بورس دولت روسیه",
        "country": "روسیه",
        "summary": "یک مسابقه المپیاد آنلاین با حمایت دولت روسیه که تحصیلات کاملاً تمویل شده در سطح لیسانس، ماستری، دوکتورا، و پسا-دوکتورا را در دانشگاه‌های برتر روسیه به متقاضیان از سراسر جهان ارائه می‌دهد.",
        "facts": [
          "معافیت کامل از فیس تحصیلی به همراه کمک هزینه دولتی",
          "دوره رایگان آماده‌سازی زبان روسی در صورت نیاز",
          "انتخاب از طریق مراحل المپیاد آنلاین (پورتفولیو، آزمون، و مصاحبه)",
          "هزاران محصل افغان از قبل از طریق برنامه‌های مشابه در روسیه درس می‌خوانند"
        ],
        "eligibility": [
          "هر ملیتی، از جمله اتباع افغانستان، واجد شرایط است",
          "مسیر لیسانس: تکمیل مکتب متوسطه",
          "مسیر ماستری: داشتن سند لیسانس یا معادل آن",
          "مسیر دوکتورا: داشتن سند ماستری یا معادل آن",
          "تسلط به انگلیسی یا روسی (در صورت نیاز، کورس‌های روسی ارائه می‌شود)"
        ],
        "tips": [
          "از همان ابتدا یک پورتفولیو قوی بسازید — سوابق تحصیلی، گواهینامه‌ها، و دستاوردها توسط هیئت داوران نمره‌گذاری می‌شوند",
          "از پیش فرمت آزمون ورودی را تمرین کنید؛ تعداد تلاش‌های شما محدود است",
          "اگر بدون زبان روسی درخواست می‌دهید، بررسی کنید کدام دانشگاه‌ها و برنامه‌ها به انگلیسی تدریس می‌شوند",
          "به محض باز شدن دوره درخواست، ثبت‌نام کنید — این روند در چند مرحله طی چند ماه انجام می‌شود"
        ],
        "levelLabel": "لیسانس، ماستری، دوکتورا",
        "funding": "بورسیه کامل",
        "deadline": "المپیاد آنلاین مرحله‌ای — در طول چندین ماه باز می‌شود، ویب‌سایت رسمی را بررسی کنید",
        "documents": [
          "پاسپورت",
          "ترانسکریپت‌های علمی / دیپلوم",
          "پورتفولیوی اسناد علمی و سرتیفیکیت‌ها",
          "بیانیه انگیزشی"
        ]
      },
      "pus": {
        "name": "اوپن ډورز — د روسیې حکومتي بورسیه",
        "country": "روسیه",
        "summary": "د روسیې حکومت لخوا ملاتړ شوی آنلاین اولمپیاډ ډول سیالۍ چې د نړۍ له غوښتونکو سره بشپړ تمویل شوی لیسانس، ماسترۍ، ډاکترا، او پوسټ-ډاکتورا زده‌کړه د روسیې په غوره پوهنتونونو کې وړاندې کوي.",
        "facts": [
          "د زده‌کړې فیس بشپړ معافیت او د حکومت میاشتنی مرستپیسه",
          "د اړتیا په صورت کې وړیا د روسیې ژبې چمتووالي کورس",
          "غوره کول د آنلاین اولمپیاډ (پورتفولیو، ازموینه، او مرکه) له لارې کېږي",
          "زرګونه افغان زده‌کوونکي دمخه د ورته برنامو له لارې په روسیه کې زده‌کړه کوي"
        ],
        "eligibility": [
          "هر ملیت، په شمول د افغانستان اتباع، وړ دي",
          "لیسانس لار: د منځنۍ ښوونځي بشپړول",
          "ماسترۍ لار: د لیسانس یا مساوي سند درلودل",
          "ډاکترا لار: د ماسترۍ یا مساوي سند درلودل",
          "په انګلیسي یا روسي ژبه کې مهارت (د اړتیا په صورت کې د روسیې کورسونه چمتو دي)"
        ],
        "tips": [
          "له پیل څخه یو قوي پورتفولیو جوړ کړئ — علمي سوابق، سندونه، او لاسته راوړنې د لارې د هیئت لخوا نمرې کېږي",
          "د ننوتلو ازموینې بڼه مخکې تمرین کړئ؛ ستاسو د هڅو شمېر محدود دی",
          "که پرته له روسي ژبې غوښتنلیک ورکوئ، وګورئ کوم پوهنتونونه او برنامې په انګلیسي ژبه تدریسېږي",
          "سمدلاسه چې غوښتنلیک دوره پرانیستل کېږي، نوم لیکنه وکړئ — دا بهیر په څو مرحلو کې د میاشتو په اوږدو کې پیښېږي"
        ],
        "levelLabel": "لیسانس، ماسترۍ، ډاکترا",
        "funding": "بشپړ تمویل شوی",
        "deadline": "مرحله‌یی آنلاین اولمپیاډ — په څو میاشتو کې خلاصیږي، رسمي ویب پاڼه وګورئ",
        "documents": [
          "پاسپورت",
          "علمي ثبتونه / سند",
          "د علمي اسنادو او سندونو پورتفولیو",
          "د انګیزې بیان"
        ]
      }
    }
  },
  {
    "id": "dafi",
    "name": "DAFI Tertiary Scholarship (UNHCR)",
    "country": "Country of asylum or home country",
    "countryTag": "Country of asylum",
    "levels": [
      "undergrad"
    ],
    "levelLabel": "Bachelor's",
    "ageMin": 18,
    "ageMax": 28,
    "englishMin": 0,
    "fields": [
      "Open to most fields"
    ],
    "funding": "Fully funded",
    "deadline": "Varies by country — check your local UNHCR office",
    "summary": "A UNHCR-run scholarship specifically for refugees, including many Afghan refugees, to complete an undergraduate degree in their country of asylum or home country.",
    "facts": [
      "Covers tuition, and often living costs and materials",
      "Specifically for refugees and, in some countries, returnees",
      "Study happens in the country of asylum (e.g. Iran, Pakistan, Tajikistan, Kazakhstan) rather than a Western country",
      "Thousands of Afghan students have completed degrees through DAFI"
    ],
    "eligibility": [
      "Must be a recognized refugee (registered with UNHCR) or, in some countries, a returnee",
      "Completed secondary school with good grades",
      "Intending to pursue a bachelor's degree",
      "Availability depends on which country you are currently living in — check your local UNHCR office"
    ],
    "documents": [
      "UNHCR refugee registration documents",
      "Secondary school transcripts (translated if needed)",
      "Proof of admission or intent to enroll",
      "Application form from your local UNHCR office"
    ],
    "tips": [
      "Register with your local UNHCR office first — this is usually a prerequisite",
      "Ask about DAFI specifically when you register; it is not always advertised widely",
      "Keep your school transcripts and refugee documentation organized and translated if needed",
      "Apply as soon as the local call opens — spots and funding are limited each year"
    ],
    "officialUrl": "https://www.unhcr.org/dafi-scholarships.html",
    "translations": {
      "prs": {
        "name": "بورس تحصیلات عالی دافی (کمیشنری عالی ملل متحد در امور پناهندگان)",
        "country": "کشور پناهندگی یا کشور اصلی",
        "summary": "یک بورس تحت نظر کمیشنری عالی ملل متحد در امور پناهندگان (UNHCR)، به طور خاص برای پناهندگان — از جمله بسیاری از پناهندگان افغان — برای تکمیل درجه لیسانس در کشور پناهندگی یا کشور اصلی خود.",
        "facts": [
          "شامل فیس تحصیلی و اغلب هزینه‌های زندگی و مواد درسی",
          "به طور خاص برای پناهندگان و، در برخی کشورها، بازگشت‌کنندگان",
          "تحصیل در کشور پناهندگی (مانند ایران، پاکستان، تاجکستان، قزاقستان) انجام می‌شود، نه یک کشور غربی",
          "هزاران محصل افغان از طریق دافی درجه تحصیلی خود را تکمیل کرده‌اند"
        ],
        "eligibility": [
          "باید پناهنده ثبت شده نزد UNHCR باشد یا، در برخی کشورها، بازگشت‌کننده",
          "تکمیل مکتب متوسطه با نمرات خوب",
          "قصد ادامه تحصیل در سطح لیسانس",
          "دسترسی بستگی به کشوری دارد که در حال حاضر در آن زندگی می‌کنید — با دفتر محلی UNHCR تماس بگیرید"
        ],
        "tips": [
          "ابتدا نزد دفتر محلی UNHCR ثبت‌نام کنید — این معمولاً یک پیش‌شرط است",
          "هنگام ثبت‌نام به طور مشخص در مورد دافی سوال کنید؛ همیشه به طور گسترده تبلیغ نمی‌شود",
          "اسناد مکتب و مدارک پناهندگی خود را منظم نگه دارید و در صورت نیاز ترجمه کنید",
          "به محض باز شدن فراخوان محلی درخواست دهید — بودجه و کرسی‌ها هر سال محدود است"
        ],
        "levelLabel": "لیسانس",
        "funding": "بورسیه کامل",
        "deadline": "بسته به کشور متفاوت است — دفتر محلی UNHCR خود را بررسی کنید",
        "documents": [
          "اسناد ثبت پناهندگی UNHCR",
          "ترانسکریپت‌های مکتب متوسطه (در صورت نیاز ترجمه شده)",
          "سند پذیرش یا نیت ثبت‌نام",
          "فورم درخواست از دفتر محلی UNHCR"
        ]
      },
      "pus": {
        "name": "د دافي لوړې زده‌کړې بورسیه (د ملګرو ملتونو د کډوالو کمیشنري)",
        "country": "د پناه‌ورتیا هېواد یا اصلي هېواد",
        "summary": "د ملګرو ملتونو د کډوالو کمیشنري (UNHCR) لخوا چلول شوې بورسیه، ځانګړې د کډوالو لپاره — په شمول ډېرو افغان کډوالو — چې د خپل پناه‌ورتیا هېواد یا اصلي هېواد کې لیسانس بشپړ کړي.",
        "facts": [
          "د زده‌کړې فیس او ډېری وخت د ژوند لګښتونه او مواد پوښي",
          "ځانګړی د کډوالو لپاره، او په ځینو هېوادونو کې د بېرته‌ستنېدونکو لپاره",
          "زده‌کړه د پناه‌ورتیا په هېواد (لکه ایران، پاکستان، تاجکستان، قزاقستان) کې پیښېږي، نه په لویدیځ هېواد کې",
          "زرګونه افغان زده‌کوونکو د دافي له لارې خپل سندونه بشپړ کړي دي"
        ],
        "eligibility": [
          "باید له UNHCR سره نومول شوی کډوال وي، یا په ځینو هېوادونو کې بېرته‌ستنېدونکی",
          "د منځنۍ ښوونځي بشپړول له ښو نمرو سره",
          "د لیسانس زده‌کړې پیل کولو اراده",
          "شتون ستاسو په اوسني استوګنځای پورې اړه لري — خپل سیمه‌ییز UNHCR دفتر سره اړیکه ونیسئ"
        ],
        "tips": [
          "لومړی له خپل سیمه‌ییز UNHCR دفتر سره نوم لیکنه وکړئ — دا معمولا مخکېنۍ اړتیا ده",
          "د نوم لیکنې پر مهال په ځانګړي ډول د دافي په اړه پوښتنه وکړئ؛ تل پراخه نه اعلانېږي",
          "خپل ښوونځي اسناد او د کډوالتوب اسناد سم وساتئ او د اړتیا په صورت کې ژباړه یې کړئ",
          "سمدلاسه چې سیمه‌ییز غوښتنلیک خلاصېږي، غوښتنلیک ورکړئ — بودیجه او ځایونه هر کال محدود دي"
        ],
        "levelLabel": "لیسانس",
        "funding": "بشپړ تمویل شوی",
        "deadline": "د هېواد له مخې توپیر لري — خپل سیمه‌ییز د UNHCR دفتر وګورئ",
        "documents": [
          "د UNHCR د کډوالۍ ثبت اسناد",
          "د لیسې زده‌کړې ثبتونه (که اړتیا وي ژباړل شوي)",
          "د منلو یا د ثبت نیت سند",
          "د خپل سیمه‌ییز UNHCR دفتر د غوښتنلیک فورمه"
        ]
      }
    }
  },
  {
    "id": "fulbright",
    "name": "Fulbright Foreign Student Program",
    "country": "United States",
    "countryTag": "United States",
    "levels": [
      "masters",
      "phd"
    ],
    "levelLabel": "Master's, PhD",
    "ageMin": 20,
    "ageMax": 45,
    "englishMin": 3,
    "fields": [
      "Open to most fields"
    ],
    "funding": "Fully funded",
    "deadline": "Varies by country — check your local Fulbright Commission / US Embassy",
    "summary": "A fully funded US government program for master's and PhD study, covering tuition, living stipend, airfare, and health insurance, with a strong focus on future leadership.",
    "facts": [
      "Fully funded: tuition, stipend, airfare, and insurance",
      "Master's and PhD only — no undergraduate track",
      "Very competitive; strong academic and leadership record expected",
      "Administered through the US Embassy or partner organizations in your region"
    ],
    "eligibility": [
      "Hold a bachelor's degree (for master's track) or relevant graduate work (for PhD track)",
      "Strong English proficiency — usually demonstrated via TOEFL or IELTS",
      "Clear plan to return and contribute to your home community after the program",
      "No formal age limit, but most awardees are early-to-mid career"
    ],
    "documents": [
      "Bachelor's degree transcript/diploma",
      "TOEFL or IELTS score",
      "Statement of purpose",
      "Letters of recommendation"
    ],
    "tips": [
      "Start your statement of purpose early — it should show leadership and a plan to give back",
      "Take an English proficiency test (TOEFL/IELTS) well ahead of the deadline",
      "Get strong academic and professional references who know your work well",
      "Be specific about why a US graduate program (not just 'studying abroad' generally) fits your goals"
    ],
    "officialUrl": "https://foreign.fulbrightonline.org/",
    "translations": {
      "prs": {
        "name": "برنامه فلبرایت برای محصلان خارجی",
        "country": "ایالات متحده امریکا",
        "summary": "یک برنامه کاملاً تمویل شده دولت امریکا برای تحصیل در سطح ماستری و دوکتورا، شامل فیس تحصیلی، کمک هزینه زندگی، بلیط طیاره، و بیمه صحی، با تمرکز قوی بر رهبری آینده.",
        "facts": [
          "تمویل کامل: فیس تحصیلی، کمک هزینه، بلیط طیاره، و بیمه",
          "فقط سطح ماستری و دوکتورا — بدون مسیر لیسانس",
          "بسیار رقابتی؛ سابقه قوی تحصیلی و رهبری انتظار می‌رود",
          "از طریق سفارت امریکا یا سازمان‌های همکار در منطقه شما اداره می‌شود"
        ],
        "eligibility": [
          "داشتن سند لیسانس (برای مسیر ماستری) یا کار تحصیلی مرتبط (برای مسیر دوکتورا)",
          "تسلط قوی به انگلیسی — معمولاً از طریق آزمون TOEFL یا IELTS نشان داده می‌شود",
          "برنامه روشن برای بازگشت و مشارکت در جامعه خود پس از اتمام برنامه",
          "محدودیت سنی رسمی وجود ندارد، اما اکثر برندگان در اوایل تا میانه دوره کاری خود هستند"
        ],
        "tips": [
          "بیانیه هدف خود را زود شروع کنید — باید رهبری و برنامه بازگشت را نشان دهد",
          "آزمون تسلط به انگلیسی (TOEFL/IELTS) را خیلی قبل از ضرب‌الاجل بگیرید",
          "معرفی‌نامه‌های قوی از افرادی که کار شما را خوب می‌شناسند بگیرید",
          "دقیق توضیح دهید چرا برنامه تحصیلات تکمیلی امریکا (نه فقط 'تحصیل در خارج' به طور کلی) با اهداف شما سازگار است"
        ],
        "levelLabel": "ماستری، دوکتورا",
        "funding": "بورسیه کامل",
        "deadline": "بسته به کشور متفاوت است — کمیسیون فولبرایت محلی / سفارت ایالات متحده خود را بررسی کنید",
        "documents": [
          "ترانسکریپت/دیپلوم سند لیسانس",
          "نمره TOEFL یا IELTS",
          "بیانیه هدف",
          "نامه‌های توصیه"
        ]
      },
      "pus": {
        "name": "د فولبرایټ د بهرنیو زده‌کوونکو پروګرام",
        "country": "متحده ایالات امریکا",
        "summary": "د امریکا حکومت بشپړ تمویل شوی پروګرام د ماسترۍ او ډاکترا زده‌کړې لپاره، چې د زده‌کړې فیس، د ژوند مرستپیسه، الوتنه، او روغتیایي بیمه پوښي، او پیاوړی تمرکز یې پر راتلونکي مشرتابه دی.",
        "facts": [
          "بشپړ تمویل: فیس، مرستپیسه، الوتنه، او بیمه",
          "یوازې ماسترۍ او ډاکترا کچه — د لیسانس لار نشته",
          "ډېر سیالي لرونکی؛ پیاوړی علمي او مشرتابه سابقه هیله کېږي",
          "د امریکا سفارت یا سیمه‌ییز شریک سازمانونو له لارې اداره کېږي"
        ],
        "eligibility": [
          "د لیسانس سند درلودل (د ماسترۍ لار لپاره) یا اړوند لوړ زده‌کړیز کار (د ډاکترا لار لپاره)",
          "په انګلیسي کې پیاوړی مهارت — معمولا د TOEFL یا IELTS له لارې ښودل کېږي",
          "د بېرته‌ستنېدو او په خپله ټولنه کې ونډې اخیستو روښانه پلان",
          "رسمي عمري برید نشته، خو ډېری ګټونکي د خپلې مسلکي دورې په لومړیو یا منځنیو کې دي"
        ],
        "tips": [
          "خپل د موخې بیان مخکې پیل کړئ — باید مشرتابه او د بېرته‌ستنېدو پلان وښایي",
          "د انګلیسي مهارت ازموینه (TOEFL/IELTS) د نیټې دمخه اخلئ",
          "پیاوړي علمي او مسلکي سپارښتنلیکونه له هغو کسانو ترلاسه کړئ چې ستاسو کار ښه پېژني",
          "روښانه وښایاست چې ولې د امریکا لوړه زده‌کړه (نه یوازې عمومي 'بهرنۍ زده‌کړه') ستاسو موخو سره برابره ده"
        ],
        "levelLabel": "ماسترۍ، ډاکترا",
        "funding": "بشپړ تمویل شوی",
        "deadline": "د هېواد له مخې توپیر لري — خپل سیمه‌ییز فلبرایټ کمیسیون / د امریکا سفارت وګورئ",
        "documents": [
          "د لیسانس سند ثبت/دیپلوم",
          "د TOEFL یا IELTS نمره",
          "د موخې بیان",
          "د توصیې لیکونه"
        ]
      }
    }
  },
  {
    "id": "sola",
    "name": "SOLA (School of Leadership Afghanistan)",
    "country": "Rwanda",
    "countryTag": "Rwanda",
    "levels": [
      "secondary"
    ],
    "levelLabel": "Secondary / High School",
    "ageMin": 13,
    "ageMax": 18,
    "englishMin": 0,
    "fields": [
      "Open to most fields"
    ],
    "funding": "Fully funded",
    "deadline": "Yearly admissions cycle — check SOLA's site for current openings",
    "summary": "A fully funded boarding school specifically for Afghan girls, relocated to Rwanda, offering a safe, supportive environment for secondary education.",
    "facts": [
      "Fully funded boarding school experience",
      "For Afghan girls specifically",
      "English support provided as part of the program",
      "Small, close-knit community focused on leadership development"
    ],
    "eligibility": [
      "Afghan girl of secondary school age",
      "Strong motivation to learn, even without prior strong English",
      "Willingness to relocate and board in Rwanda",
      "Admissions typically open on a yearly cycle — check SOLA's site for current openings"
    ],
    "documents": [
      "Proof of identity / family details",
      "School records if available",
      "Application form and any essays SOLA requests"
    ],
    "tips": [
      "Emphasize resilience and motivation in your application, not just grades",
      "Reach out early — the program has limited spots and works directly with families",
      "Highlight any leadership experience, even informal (helping in your community, mentoring siblings, etc.)"
    ],
    "officialUrl": "https://www.sola-afghanistan.org/",
    "translations": {
      "prs": {
        "name": "سولا (مکتب رهبری افغانستان)",
        "country": "روآندا",
        "summary": "یک مکتب شبانه‌روزی کاملاً تمویل شده مخصوص دختران افغان، که به روآندا منتقل شده، محیطی امن و حمایتی برای تحصیلات متوسطه فراهم می‌کند.",
        "facts": [
          "تجربه مکتب شبانه‌روزی کاملاً تمویل شده",
          "مخصوص دختران افغان",
          "حمایت زبان انگلیسی به عنوان بخشی از برنامه ارائه می‌شود",
          "جامعه کوچک و نزدیک با تمرکز بر توسعه رهبری"
        ],
        "eligibility": [
          "دختر افغان در سن مکتب متوسطه",
          "انگیزه قوی برای یادگیری، حتی بدون زبان انگلیسی قوی قبلی",
          "تمایل به نقل مکان و اقامت شبانه‌روزی در روآندا",
          "پذیرش معمولاً به صورت سالانه باز می‌شود — وب‌سایت سولا را برای فرصت‌های فعلی بررسی کنید"
        ],
        "tips": [
          "در درخواست خود بر پایداری و انگیزه تأکید کنید، نه فقط نمرات",
          "زود تماس بگیرید — این برنامه کرسی‌های محدود دارد و مستقیماً با خانواده‌ها کار می‌کند",
          "هرگونه تجربه رهبری، حتی غیر رسمی (کمک در جامعه، رهنمایی خواهر و برادر و غیره) را برجسته کنید"
        ],
        "levelLabel": "ثانوی / لیسه",
        "funding": "بورسیه کامل",
        "deadline": "چرخه پذیرش سالانه — ویب‌سایت سولا را برای فرصت‌های فعلی بررسی کنید",
        "documents": [
          "اثبات هویت / معلومات خانواده",
          "اسناد مکتب در صورت موجود بودن",
          "فورم درخواست و هر انشای که سولا بخواهد"
        ]
      },
      "pus": {
        "name": "سولا (د افغانستان د مشرتابه ښوونځی)",
        "country": "روانډا",
        "summary": "یو بشپړ تمویل شوی د لوېدو ښوونځی ځانګړی د افغان نجونو لپاره، چې روانډا ته لېږدول شوی، یو خوندي او ملاتړ کوونکی چاپېریال د منځنۍ زده‌کړې لپاره وړاندې کوي.",
        "facts": [
          "بشپړ تمویل شوی د لوېدو ښوونځي تجربه",
          "ځانګړی د افغان نجونو لپاره",
          "د انګلیسي ژبې ملاتړ د پروګرام برخه ده",
          "کوچنۍ، نږدې ټولنه چې پر مشرتابه پرمختګ تمرکز لري"
        ],
        "eligibility": [
          "د منځنۍ ښوونځي عمر لرونکې افغان نجلۍ",
          "د زده‌کړې پیاوړې هڅه، حتی پرته له مخکینۍ پیاوړې انګلیسي",
          "د روانډا ته د لېږد او د لوېدو لپاره چمتووالی",
          "منل معمولا په کلني دوره کې خلاصېږي — د اوسنیو فرصتونو لپاره د سولا ویب پاڼه وګورئ"
        ],
        "tips": [
          "په خپل غوښتنلیک کې پر زغم او هڅه ټینګار وکړئ، نه یوازې پر نمرو",
          "مخکې اړیکه ونیسئ — دا پروګرام محدود ځایونه لري او مستقیم له کورنیو سره کار کوي",
          "هر ډول د مشرتابه تجربه، حتی غیر رسمي (په ټولنه کې مرسته، د خویندو ورونو لارښوونه، او نور) وښایاست"
        ],
        "levelLabel": "لیسه / متوسطه",
        "funding": "بشپړ تمویل شوی",
        "deadline": "کلنی د منلو دوران — د اوسنیو فرصتونو لپاره د سولا ویب پاڼه وګورئ",
        "documents": [
          "د هویت اثبات / د کورنۍ معلومات",
          "د ښوونځي اسناد که شتون ولري",
          "د غوښتنلیک فورمه او هر هغه انشا چې سولا یې غواړي"
        ]
      }
    }
  },
  {
    "id": "mext",
    "name": "MEXT Scholarship (Japan)",
    "country": "Japan",
    "countryTag": "Japan",
    "levels": [
      "masters",
      "phd"
    ],
    "levelLabel": "Master's, PhD",
    "ageMin": 21,
    "ageMax": 34,
    "englishMin": 2,
    "fields": [
      "Open to most fields"
    ],
    "funding": "Fully funded",
    "deadline": "Varies by embassy — apply through your local Japanese Embassy",
    "summary": "A Japanese government scholarship covering master's and PhD study, with monthly stipend, tuition waiver, and often a Japanese-language preparation period.",
    "facts": [
      "Full tuition waiver plus monthly living stipend",
      "Round-trip airfare typically included",
      "Some programs taught in English, others require Japanese",
      "Application usually goes through your local Japanese embassy"
    ],
    "eligibility": [
      "Hold or be completing a bachelor's degree (for master's) or master's degree (for PhD)",
      "Generally under 35 years old at time of application",
      "English or Japanese proficiency depending on the specific program",
      "Apply through the Japanese Embassy in your country of residence"
    ],
    "documents": [
      "Bachelor's/Master's degree transcript",
      "Passport",
      "Research proposal (for graduate track)",
      "Embassy application forms"
    ],
    "tips": [
      "Check whether your target program is English-taught or requires Japanese from day one",
      "Contact the embassy education section directly — timelines can shift year to year",
      "A clear research proposal matters a lot for the graduate track — start drafting early",
      "Being open to a preparatory Japanese-language year can widen your options"
    ],
    "officialUrl": "https://www.studyinjapan.go.jp/en/",
    "translations": {
      "prs": {
        "name": "بورس میکست (جاپان)",
        "country": "جاپان",
        "summary": "یک بورس دولت جاپان که تحصیلات ماستری و دوکتورا را پوشش می‌دهد، همراه با کمک هزینه ماهانه، معافیت از فیس تحصیلی، و اغلب یک دوره آماده‌سازی زبان جاپانی.",
        "facts": [
          "معافیت کامل از فیس تحصیلی به همراه کمک هزینه ماهانه",
          "معمولاً شامل بلیط طیاره رفت و برگشت",
          "برخی برنامه‌ها به انگلیسی تدریس می‌شوند، برخی نیاز به زبان جاپانی دارند",
          "درخواست معمولاً از طریق سفارت جاپان در کشور محل اقامت شما انجام می‌شود"
        ],
        "eligibility": [
          "داشتن یا در حال تکمیل سند لیسانس (برای ماستری) یا سند ماستری (برای دوکتورا)",
          "عموماً زیر ۳۵ سال در زمان درخواست",
          "تسلط به انگلیسی یا جاپانی بسته به برنامه مشخص",
          "درخواست از طریق بخش تحصیلی سفارت جاپان در کشور محل اقامت شما"
        ],
        "tips": [
          "بررسی کنید که آیا برنامه مورد نظر شما به انگلیسی تدریس می‌شود یا از ابتدا به زبان جاپانی نیاز دارد",
          "مستقیماً با بخش تحصیلی سفارت تماس بگیرید — جدول زمانی می‌تواند هر سال تغییر کند",
          "پروپوزال تحقیقاتی روشن برای مسیر تحصیلات تکمیلی بسیار مهم است — زود شروع به نوشتن کنید",
          "باز بودن به گذراندن یک سال آماده‌سازی زبان جاپانی می‌تواند گزینه‌های شما را گسترش دهد"
        ],
        "levelLabel": "ماستری، دوکتورا",
        "funding": "بورسیه کامل",
        "deadline": "بسته به سفارت متفاوت است — از طریق سفارت ژاپن محلی خود درخواست دهید",
        "documents": [
          "ترانسکریپت سند لیسانس/ماستری",
          "پاسپورت",
          "پیشنهاد تحقیقاتی (برای مسیر تحصیلات تکمیلی)",
          "فورم‌های درخواست سفارت"
        ]
      },
      "pus": {
        "name": "د میکسټ بورسیه (جاپان)",
        "country": "جاپان",
        "summary": "د جاپان حکومت بورسیه چې ماسترۍ او ډاکترا زده‌کړه پوښي، د میاشتني مرستپیسې، د زده‌کړې فیس معافیت، او ډېری وخت د جاپاني ژبې چمتووالي دورې سره.",
        "facts": [
          "د زده‌کړې فیس بشپړ معافیت او میاشتنی مرستپیسه",
          "معمولا د تګ راتګ الوتنه پکې شامله ده",
          "ځینې برنامې په انګلیسي تدریسېږي، ځینو ته جاپاني ژبه اړینه ده",
          "غوښتنلیک معمولا د استوګنې هېواد کې د جاپان سفارت له لارې کېږي"
        ],
        "eligibility": [
          "د لیسانس سند درلودل یا بشپړول (د ماسترۍ لپاره) یا د ماسترۍ سند (د ډاکترا لپاره)",
          "معمولا د غوښتنلیک په وخت کې تر ۳۵ کلونو کم عمر",
          "د ځانګړي پروګرام له مخې په انګلیسي یا جاپاني ژبه کې مهارت",
          "غوښتنلیک د خپل استوګنې هېواد کې د جاپان سفارت د زده‌کړې برخې له لارې"
        ],
        "tips": [
          "وګورئ چې ایا ستاسو موخه‌ییز پروګرام په انګلیسي تدریسېږي یا له پیل څخه جاپاني ژبه ته اړتیا لري",
          "مستقیم د سفارت د زده‌کړې برخې سره اړیکه ونیسئ — مهالویش کولی شي هر کال بدلون وکړي",
          "د تحصیلي دورې لپاره روښانه څېړنیز وړاندیز ډېر اهمیت لري — یې لیکل مخکې پیل کړئ",
          "د جاپاني ژبې د چمتووالي یو کال ته چمتووالی ستاسو فرصتونه پراخولی شي"
        ],
        "levelLabel": "ماسترۍ، ډاکترا",
        "funding": "بشپړ تمویل شوی",
        "deadline": "د سفارت له مخې توپیر لري — د خپل سیمه‌ییز جاپاني سفارت له لارې غوښتنلیک ورکړئ",
        "documents": [
          "د لیسانس/ماسترۍ سند ثبت",
          "پاسپورت",
          "د څیړنې وړاندیز (د لوړو زده‌کړو لپاره)",
          "د سفارت غوښتنلیک فورمې"
        ]
      }
    }
  },
  {
    "id": "chevening",
    "name": "Chevening Scholarship",
    "country": "United Kingdom",
    "countryTag": "United Kingdom",
    "levels": [
      "masters"
    ],
    "levelLabel": "Master's",
    "ageMin": 23,
    "ageMax": 45,
    "englishMin": 3,
    "fields": [
      "Open to most fields"
    ],
    "funding": "Fully funded",
    "deadline": "Annual cycle — check chevening.org for current dates",
    "summary": "A UK government scholarship for one-year master's programs, aimed at emerging leaders, covering tuition, living costs, and travel.",
    "facts": [
      "Fully funded one-year master's degree in the UK",
      "Requires at least two years of work experience",
      "Strong emphasis on leadership and future impact",
      "Highly competitive — thousands of applicants annually"
    ],
    "eligibility": [
      "At least two years of relevant work experience",
      "Strong English proficiency (IELTS or equivalent usually required)",
      "A clear leadership story and plan to use the degree to create impact back home",
      "Must return to your home country for at least two years after the award"
    ],
    "documents": [
      "Passport",
      "CV detailing work experience",
      "IELTS or equivalent English test score",
      "Three UK master's course choices",
      "Reference letters"
    ],
    "tips": [
      "Work experience is non-negotiable — build it before applying if you're still a student",
      "Your essays matter more than your CV — practice telling a clear leadership story",
      "Apply to three different UK master's courses as required, and make sure they're realistic fits",
      "Take an English test early since scores can take weeks to arrange and receive"
    ],
    "officialUrl": "https://www.chevening.org/",
    "translations": {
      "prs": {
        "name": "بورس شیونینگ",
        "country": "بریتانیا",
        "summary": "یک بورس دولت بریتانیا برای برنامه‌های ماستری یک ساله، مخصوص رهبران نوظهور، شامل فیس تحصیلی، هزینه‌های زندگی، و سفر.",
        "facts": [
          "درجه ماستری یک ساله کاملاً تمویل شده در بریتانیا",
          "نیاز به حداقل دو سال تجربه کاری",
          "تمرکز قوی بر رهبری و تأثیرگذاری آینده",
          "بسیار رقابتی — هزاران متقاضی سالانه"
        ],
        "eligibility": [
          "حداقل دو سال تجربه کاری مرتبط",
          "تسلط قوی به انگلیسی (معمولاً IELTS یا معادل آن مورد نیاز است)",
          "داستان رهبری روشن و برنامه‌ای برای استفاده از این درجه جهت ایجاد تأثیر در وطن",
          "باید حداقل دو سال پس از دریافت بورس به کشور خود بازگردید"
        ],
        "tips": [
          "تجربه کاری قابل مذاکره نیست — اگر هنوز محصل هستید، قبل از درخواست آن را بسازید",
          "مقاله‌های شما مهم‌تر از سوابق کاری‌تان هستند — تمرین کنید داستان رهبری روشنی روایت کنید",
          "همان‌طور که لازم است به سه برنامه ماستری مختلف بریتانیا درخواست دهید، مطمئن شوید گزینه‌های واقع‌بینانه هستند",
          "زود آزمون انگلیسی بگیرید، زیرا دریافت نتایج ممکن است هفته‌ها طول بکشد"
        ],
        "levelLabel": "ماستری",
        "funding": "بورسیه کامل",
        "deadline": "چرخه سالانه — برای تاریخ‌های فعلی chevening.org را بررسی کنید",
        "documents": [
          "پاسپورت",
          "سی‌وی با جزئیات تجربه کاری",
          "نمره امتحان انگلیسی IELTS یا معادل آن",
          "انتخاب سه برنامه ماستری بریتانیا",
          "نامه‌های توصیه"
        ]
      },
      "pus": {
        "name": "د شیوننګ بورسیه",
        "country": "برتانیا",
        "summary": "د برتانیا حکومت بورسیه د یو کلن ماسترۍ برنامو لپاره، ځانګړې د راتلونکو مشرانو لپاره، چې د زده‌کړې فیس، د ژوند لګښتونه، او سفر پوښي.",
        "facts": [
          "بشپړ تمویل شوی یو کلن ماسترۍ سند په برتانیا کې",
          "لږترلږه دوه کاله د کار تجربې ته اړتیا لري",
          "پیاوړی تمرکز پر مشرتابه او راتلونکي اغېز",
          "ډېر سیالي لرونکی — کلنی زرګونه غوښتونکي"
        ],
        "eligibility": [
          "لږترلږه دوه کاله اړوند کاري تجربه",
          "په انګلیسي کې پیاوړی مهارت (معمولا IELTS یا مساوي اړین دی)",
          "روښانه د مشرتابه کیسه او د دې سند د کارولو پلان د خپل هېواد کې د اغېز لپاره",
          "باید د بورسیې ترلاسه کولو وروسته لږترلږه دوه کاله خپل هېواد ته ستون شئ"
        ],
        "tips": [
          "کاري تجربه د تړون وړ نه ده — که تاسو لا هم زده‌کوونکی یاست، غوښتنلیک ورکولو دمخه یې جوړه کړئ",
          "ستاسو انشاوې ستاسو له سي‌وي څخه ډېر اهمیت لري — د مشرتابه روښانه کیسه ویلو تمرین وکړئ",
          "لکه څنګه چې اړینه ده، درې مختلفو برتانیا ماسترۍ کورسونو ته غوښتنلیک ورکړئ، ډاډ ترلاسه کړئ چې واقعي انتخابونه دي",
          "د انګلیسي ازموینه مخکې واخلئ ځکه چې پایلې ترلاسه کول کولی شي څو اونۍ ونیسي"
        ],
        "levelLabel": "ماسترۍ",
        "funding": "بشپړ تمویل شوی",
        "deadline": "کلنی دوران — د اوسنیو نېټو لپاره chevening.org وګورئ",
        "documents": [
          "پاسپورت",
          "د کاري تجربې تفصیل لرونکی CV",
          "د IELTS یا معادل انګلیسي ازموینې نمره",
          "د بریتانیا درې ماسترۍ کورسونو غوراوی",
          "د توصیې لیکونه"
        ]
      }
    }
  },
  {
    "id": "daad",
    "name": "DAAD Scholarships (Germany)",
    "country": "Germany",
    "countryTag": "Germany",
    "levels": [
      "undergrad",
      "masters",
      "phd"
    ],
    "levelLabel": "Bachelor's, Master's, PhD",
    "ageMin": 18,
    "ageMax": 40,
    "englishMin": 2,
    "fields": [
      "Computer Science",
      "Software Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Economics",
      "Environmental Science",
      "Agriculture",
      "Data Science"
    ],
    "funding": "Fully funded",
    "deadline": "Varies by track — check the specific DAAD program",
    "summary": "A large German government-funded program with dozens of scholarship tracks across bachelor's, master's, and PhD levels, especially strong in engineering and technical fields.",
    "facts": [
      "Many tracks: development-related master's, research grants, PhD sandwich programs, and more",
      "Covers tuition, stipend, and often health insurance",
      "Programs available in English and German",
      "Especially strong for engineering, sciences, and development-related fields"
    ],
    "eligibility": [
      "Requirements vary by track — check the specific DAAD program you're applying to",
      "Generally need a completed degree at the level below the one you're applying for",
      "English or German proficiency depending on the program's teaching language",
      "Some IELTS/TOEFL requirements can be waived if your prior degree was taught in English"
    ],
    "documents": [
      "Prior degree transcript/diploma",
      "Language proof (English or German) or waiver letter",
      "Motivation letter tailored to the specific track",
      "CV / research proposal (for research tracks)"
    ],
    "tips": [
      "Browse DAAD's database by field — there are often more relevant tracks than people realize",
      "If your bachelor's was taught in English, get a letter from your university confirming this — it can waive language test requirements",
      "Reach out to potential supervisors early for research-based tracks",
      "Tailor your motivation letter to the specific track, not a generic 'study in Germany' pitch"
    ],
    "officialUrl": "https://www.daad.de/en/",
    "translations": {
      "prs": {
        "name": "بورس‌های داد (آلمان)",
        "country": "آلمان",
        "summary": "یک برنامه بزرگ با تمویل دولت آلمان با ده‌ها مسیر بورس در سطح لیسانس، ماستری، و دوکتورا، به ویژه قوی در رشته‌های انجینیری و تخنیکی.",
        "facts": [
          "مسیرهای متعدد: ماستری مرتبط با توسعه، کمک‌های تحقیقاتی، برنامه‌های ساندویچ دوکتورا، و بیشتر",
          "شامل فیس تحصیلی، کمک هزینه، و اغلب بیمه صحی",
          "برنامه‌ها به انگلیسی و آلمانی موجود است",
          "به ویژه قوی برای رشته‌های انجینیری، علوم، و مرتبط با توسعه"
        ],
        "eligibility": [
          "شرایط بسته به مسیر متفاوت است — برنامه مشخص داد که برای آن درخواست می‌دهید را بررسی کنید",
          "عموماً نیاز به تکمیل سند در سطح پایین‌تر از سطحی که درخواست می‌دهید",
          "تسلط به انگلیسی یا آلمانی بسته به زبان تدریس برنامه",
          "برخی الزامات IELTS/TOEFL در صورتی که سند قبلی شما به انگلیسی تدریس شده باشد، ممکن است لغو شود"
        ],
        "tips": [
          "پایگاه داده داد را بر اساس رشته مرور کنید — اغلب مسیرهای مرتبط بیشتری وجود دارد که مردم متوجه نمی‌شوند",
          "اگر سند لیسانس شما به انگلیسی تدریس شده، از دانشگاه خود نامه تاییدیه بگیرید — این می‌تواند الزامات آزمون زبان را لغو کند",
          "برای مسیرهای مبتنی بر تحقیق، زود با استادان راهنمای احتمالی تماس بگیرید",
          "نامه انگیزشی خود را برای مسیر مشخص تنظیم کنید، نه یک پیشنهاد کلی 'تحصیل در آلمان'"
        ],
        "levelLabel": "لیسانس، ماستری، دوکتورا",
        "funding": "بورسیه کامل",
        "deadline": "بسته به مسیر متفاوت است — برنامه مشخص DAAD را بررسی کنید",
        "documents": [
          "ترانسکریپت/دیپلوم سند قبلی",
          "اثبات زبان (انگلیسی یا آلمانی) یا نامه معافیت",
          "نامه انگیزشی متناسب با مسیر مشخص",
          "سی‌وی / پیشنهاد تحقیقاتی (برای مسیرهای تحقیقاتی)"
        ]
      },
      "pus": {
        "name": "د ډاد بورسیې (جرمني)",
        "country": "جرمني",
        "summary": "د جرمني حکومت لخوا تمویل شوی لوی پروګرام چې لسګونه بورسیه لارې د لیسانس، ماسترۍ، او ډاکترا کچو کې لري، په ځانګړي ډول په انجینري او تخنیکي ډګرونو کې پیاوړی.",
        "facts": [
          "ډېری لارې: د پرمختګ اړوند ماسترۍ، څېړنیزې مرستې، د ډاکترا سنڈویچ برنامې، او نور",
          "د زده‌کړې فیس، مرستپیسه، او ډېری وخت روغتیایي بیمه پوښي",
          "برنامې په انګلیسي او جرمني ژبو کې شتون لري",
          "په ځانګړي ډول د انجینري، ساینس، او پرمختګ اړوندو ډګرونو لپاره پیاوړی"
        ],
        "eligibility": [
          "اړتیاوې د لارې له مخې توپیر لري — هغه ځانګړی ډاد پروګرام وګورئ چې غوښتنلیک ورته ورکوئ",
          "معمولا د هغه کچې لاندې بشپړ سند ته اړتیا لري چې غوښتنلیک ورته ورکوئ",
          "د پروګرام د تدریس ژبې له مخې انګلیسي یا جرمني ژبه کې مهارت",
          "ځینې IELTS/TOEFL اړتیاوې کولی شي لغوه شي که ستاسو مخکینی سند په انګلیسي تدریس شوی وي"
        ],
        "tips": [
          "د ډاد ډیټابیس د ډګر له مخې وګورئ — اکثرا ډېرې اړونده لارې شتون لري چې خلک یې نه پوهېږي",
          "که ستاسو لیسانس سند په انګلیسي تدریس شوی، له خپل پوهنتون څخه تایید لیک ترلاسه کړئ — دا کولی شي د ژبې ازموینې اړتیاوې لغوه کړي",
          "د څېړنې پر بنسټ لارو لپاره، مخکې له احتمالي سرپرست استادانو سره اړیکه ونیسئ",
          "خپل د انګیزې لیک د ځانګړې لارې لپاره برابر کړئ، نه د جرمني کې د زده‌کړې لپاره عمومي وړاندیز"
        ],
        "levelLabel": "لیسانس، ماسترۍ، ډاکترا",
        "funding": "بشپړ تمویل شوی",
        "deadline": "د لارې له مخې توپیر لري — ځانګړی DAAD برنامه وګورئ",
        "documents": [
          "د پخوانی سند ثبت/دیپلوم",
          "د ژبې اثبات (انګلیسي یا الماني) یا د معافیت لیک",
          "د ځانګړې لارې سره سم انګیزې لیک",
          "CV / د څیړنې وړاندیز (د څیړنیزو لارو لپاره)"
        ]
      }
    }
  },
  {
    "id": "erasmus-mundus",
    "name": "Erasmus Mundus Joint Masters",
    "country": "Europe and partner countries",
    "countryTag": "Europe / Multiple",
    "levels": [
      "masters"
    ],
    "levelLabel": "Master's",
    "ageMin": 18,
    "ageMax": 45,
    "englishMin": 3,
    "fields": [
      "Open to most fields"
    ],
    "funding": "Fully funded",
    "deadline": "Usually October–January; each master's programme sets its own date",
    "summary": "International joint master's degrees delivered by university consortia, with full scholarships for the highest-ranked applicants worldwide.",
    "facts": [
      "Study at multiple universities in Europe and sometimes beyond",
      "Scholarships contribute to participation, travel, visa, and living costs",
      "Programmes last one or two academic years"
    ],
    "eligibility": [
      "Bachelor's degree or equivalent required",
      "Requirements and language evidence are set by each programme",
      "Applicants worldwide may apply directly to a programme consortium"
    ],
    "documents": [
      "Degree and transcript",
      "CV and motivation letter",
      "Language evidence if the programme requires it",
      "References or portfolio where required"
    ],
    "tips": [
      "Use the official catalogue and read every programme's requirements",
      "Apply early because programme deadlines vary",
      "Tailor your motivation letter to the joint programme, not Europe generally"
    ],
    "officialUrl": "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters",
    "translations": {
      "prs": {
        "name": "اراسموس موندوس (ماستری مشترک)",
        "country": "اروپا و کشورهای همکار",
        "summary": "بورسیه‌های تحصیلی کاملاً تمویل شده برای برنامه‌های ماستری مشترک که در چندین دانشگاه اروپایی تدریس می‌شود، برای بهترین درخواست‌دهندگان جهان از طریق یک رقابت مشترک اعطا می‌گردد.",
        "facts": [
          "بورسیه کامل شامل فیس تحصیلی، هزینه سفر، هزینه ویزه، و کمک هزینه ماهانه زندگی می‌شود",
          "تحصیل در دو یا چند دانشگاه در کشورهای مختلف صورت می‌گیرد",
          "برنامه‌ها معمولاً یک تا دو سال تحصیلی طول می‌کشد",
          "ضرب‌الاجل‌ها بسته به برنامه متفاوت است، معمولاً بین اکتوبر و جنوری"
        ],
        "eligibility": [
          "داشتن سند لیسانس یا معادل آن",
          "رعایت شرایط علمی و زبانی برنامه مشخص",
          "باز برای درخواست‌دهندگان از هر ملیتی، شامل محصلان افغان"
        ],
        "tips": [
          "مستقیماً از طریق ویب‌سایت کنسرسیوم برنامه مشترک مشخص درخواست دهید، نه یک پورتال عمومی",
          "برنامه‌ها بسیار متفاوت هستند — شرایط دقیق برنامه مورد نظر خود را بخوانید",
          "نامه انگیزشی خود را برای برنامه مشترک مشخص تنظیم کنید، نه فقط 'تحصیل در اروپا'"
        ],
        "levelLabel": "ماستری",
        "funding": "بورسیه کامل",
        "deadline": "معمولاً اکتوبر تا جنوری؛ هر برنامه ماستری تاریخ خود را تعیین می‌کند",
        "documents": [
          "سند و ترانسکریپت",
          "سی‌وی و نامه انگیزشی",
          "اثبات زبان در صورت نیاز برنامه",
          "توصیه‌نامه‌ها یا پورتفولیو در صورت نیاز"
        ]
      },
      "pus": {
        "name": "اېراسموس موندوس (ګډ ماسترۍ برنامه)",
        "country": "اروپا او همکار هېوادونه",
        "summary": "بشپړ تمویل شوي ګډ ماسترۍ درجې چې په اروپا کې په څو پوهنتونونو کې تدریسېږي، د نړۍ غوره غوښتونکو ته د یو رقابتي ګډ ټاکنې له لارې ورکول کېږي.",
        "facts": [
          "بشپړ بورسیه د زده‌کړې فیس، د سفر لګښت، د ویزې لګښت، او میاشتنۍ ژوند مرسته پوښي",
          "زده‌کړه په دوو یا ډېرو پوهنتونونو کې په بېلابېلو هېوادونو کې ترسره کېږي",
          "برنامې معمولا یو تر دوو تحصیلي کلونه دوام لري",
          "وروستۍ نېټې د برنامې له مخې توپیر لري، معمولا د اکتوبر او جنورۍ ترمنځ"
        ],
        "eligibility": [
          "د لیسانس سند یا معادل ولري",
          "د ځانګړې برنامې علمي او ژبني اړتیاوې پوره کړي",
          "د هرې ملیت لپاره پرانیستی، په شمول د افغان زده‌کوونکو"
        ],
        "tips": [
          "مستقیما د ځانګړې ګډې برنامې کنسرشیم ویب‌پاڼې له لارې غوښتنلیک ورکړئ، نه د عمومي پورتال له لارې",
          "برنامې ډېر توپیر لري — د خپلې غوره برنامې دقیق شرایط ولولئ",
          "خپل د انګیزې لیک د ځانګړې ګډې برنامې لپاره برابر کړئ، نه یوازې 'په اروپا کې زده‌کړه'"
        ],
        "levelLabel": "ماسترۍ",
        "funding": "بشپړ تمویل شوی",
        "deadline": "معمولا اکتوبر تر جنورۍ پورې؛ هره ماسترۍ برنامه خپله نېټه ټاکي",
        "documents": [
          "سند او ثبت",
          "CV او د انګیزې لیک",
          "د ژبې اثبات که برنامه ورته اړتیا لري",
          "د توصیې لیکونه یا پورتفولیو چې اړین وي"
        ]
      }
    }
  },
  {
    "id": "turkiye",
    "name": "Türkiye Scholarships",
    "country": "Türkiye",
    "countryTag": "Türkiye",
    "levels": [
      "undergrad",
      "masters",
      "phd"
    ],
    "levelLabel": "Bachelor's, Master's, PhD",
    "ageMin": 17,
    "ageMax": 34,
    "englishMin": 1,
    "fields": [
      "Open to most fields"
    ],
    "funding": "Fully funded",
    "deadline": "Annual call; check the official calendar",
    "summary": "A competitive Turkish government scholarship for international students, including university placement and support throughout study.",
    "facts": [
      "Covers tuition, accommodation, health insurance, stipend, flight, and a Turkish-language course",
      "International students can apply for undergraduate, master's, and PhD study",
      "Selection considers academic merit and the overall application"
    ],
    "eligibility": [
      "Citizens of all countries may apply, subject to programme criteria",
      "Minimum academic and age requirements vary by degree level",
      "Applicants currently enrolled at a Turkish university at the target level are ineligible"
    ],
    "documents": [
      "Identity document or passport",
      "Transcript and diploma or expected-graduation document",
      "Any required test results",
      "Motivation letter and programme-specific materials"
    ],
    "tips": [
      "Use the official application system only—applications are free",
      "Check programme language and admission requirements carefully",
      "Show a specific academic plan and community impact"
    ],
    "officialUrl": "https://turkiyeburslari.gov.tr/fulltimeprograms",
    "translations": {
      "prs": {
        "name": "بورسیه‌های ترکیه (Türkiye Scholarships)",
        "country": "ترکیه",
        "summary": "یک بورسیه دولت ترکیه برای محصلان بین‌المللی در سطح لیسانس، ماستری، و دوکتورا، شامل معرفی به دانشگاه و یک سال آماده‌گی زبان ترکی.",
        "facts": [
          "تمویل کامل: فیس تحصیلی، کمک هزینه ماهانه، اقامت، بیمه صحی، و تکت طیاره",
          "شامل یک دوره آماده‌گی زبان ترکی پیش از آغاز برنامه شما",
          "باز برای درخواست‌دهندگان سطح لیسانس، ماستری، و دوکتورا",
          "انتخاب بر اساس شایستگی علمی و مجموع درخواست شما صورت می‌گیرد"
        ],
        "eligibility": [
          "باز برای درخواست‌دهندگان از هر ملیتی، شامل محصلان افغان",
          "حد اقل نمرات و سن بسته به سطح تحصیلی متفاوت است",
          "محصلانی که در حال حاضر در همان سطح در یک دانشگاه ترکیه درس می‌خوانند واجد شرایط نیستند"
        ],
        "tips": [
          "فقط از طریق پورتال رسمی بورسیه‌های ترکیه درخواست دهید — درخواست رایگان است",
          "در مورد رشته مورد نظر خود و ارتباط آن با اهدافتان مشخص باشید",
          "تقویم سالانه را با دقت بررسی کنید، زیرا ممکن است هر سال تغییر کند"
        ],
        "levelLabel": "لیسانس، ماستری، دوکتورا",
        "funding": "بورسیه کامل",
        "deadline": "فراخوان سالانه؛ تقویم رسمی را بررسی کنید",
        "documents": [
          "سند هویت یا پاسپورت",
          "ترانسکریپت و دیپلوم یا سند فراغت مورد انتظار",
          "هر نتیجه امتحان مورد نیاز",
          "نامه انگیزشی و مواد مخصوص برنامه"
        ]
      },
      "pus": {
        "name": "د ترکیې بورسیې (Türkiye Scholarships)",
        "country": "ترکیه",
        "summary": "د ترکیې د حکومت بورسیه چې نړیوالو زده‌کوونکو ته د لیسانس، ماسترۍ، او ډاکترا په کچو کې ورکول کېږي، پکې د پوهنتون ځای پرځای کول او د ترکي ژبې چمتووالي کال شامل دي.",
        "facts": [
          "بشپړ تمویل: د زده‌کړې فیس، میاشتنۍ مرستپیسه، استوګنه، روغتیایي بیمه، او الوتنه",
          "د خپلې برنامې له پیل مخکې د ترکي ژبې چمتووالي کورس شامل دی",
          "د لیسانس، ماسترۍ، او ډاکترا غوښتونکو لپاره پرانیستی",
          "ټاکنه د علمي وړتیا او ستاسو د بشپړ غوښتنلیک پر بنسټ کېږي"
        ],
        "eligibility": [
          "د هرې ملیت لپاره پرانیستی، په شمول د افغان زده‌کوونکو",
          "لږترلږه نمرې او د عمر اړتیاوې د زده‌کړې کچې له مخې توپیر لري",
          "هغه زده‌کوونکي چې اوس مهال په ترکیه کې په همدې کچه زده‌کړه کوي، وړ نه دي"
        ],
        "tips": [
          "یوازې د ترکیې بورسیو رسمي پورتال له لارې غوښتنلیک ورکړئ — غوښتنلیک وړیا دی",
          "د خپل موخو ډګر او د هغه له موخو سره اړیکې په اړه ځانګړی اوسئ",
          "کلنی مهالویش په دقت سره وګورئ، ځکه چې کولی شي هر کال بدل شي"
        ],
        "levelLabel": "لیسانس، ماسترۍ، ډاکترا",
        "funding": "بشپړ تمویل شوی",
        "deadline": "کلنی غوښتنه؛ رسمي مهالویش وګورئ",
        "documents": [
          "د هویت سند یا پاسپورت",
          "ثبت او دیپلوم یا د فراغت تمه لرونکی سند",
          "هره اړینه ازموینه پایله",
          "انګیزې لیک او د برنامې ځانګړي مواد"
        ]
      }
    }
  },
  {
    "id": "isdb",
    "name": "Islamic Development Bank (IsDB) Scholarships",
    "country": "Partner universities in member countries",
    "countryTag": "Multiple",
    "levels": [
      "undergrad",
      "masters",
      "phd"
    ],
    "levelLabel": "Bachelor's, Master's, PhD",
    "ageMin": 17,
    "ageMax": 45,
    "englishMin": 1,
    "fields": [
      "Computer Science",
      "Software Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Medicine",
      "Public Health",
      "Environmental Science",
      "Agriculture",
      "Data Science"
    ],
    "funding": "Fully funded",
    "deadline": "Annual call; check the official IsDB scholarships page",
    "summary": "Development-focused scholarship programmes for eligible students from IsDB member countries, including Afghanistan, with tracks that vary by degree level.",
    "facts": [
      "Programme options include undergraduate, master's, and high-technology PhD tracks",
      "Master's study focuses on science, technology, engineering, and medical sciences",
      "Eligibility and benefits differ by scholarship track"
    ],
    "eligibility": [
      "Afghan citizens are from an IsDB member country",
      "Meet the specific programme's academic, field, and admission requirements",
      "Priority is commonly given to development-relevant study plans"
    ],
    "documents": [
      "Academic records",
      "Passport or identity document",
      "Admission evidence where requested",
      "Programme-specific forms and references"
    ],
    "tips": [
      "Choose a field connected to a clear development need",
      "Check the current annual call—not old social-media posts",
      "Read the relevant programme booklet before applying"
    ],
    "officialUrl": "https://www.isdb.org/scholarships",
    "translations": {
      "prs": {
        "name": "بورسیه‌های بانک اسلامی انکشاف (آی‌اس‌دی‌بی)",
        "country": "دانشگاه‌های همکار در کشورهای عضو",
        "summary": "بورسیه‌های متمرکز بر توسعه برای محصلان کشورهای عضو بانک اسلامی انکشاف، شامل افغانستان، از سطح لیسانس تا دوکتورا با تاکید بر علوم و تکنالوژی.",
        "facts": [
          "مسیرها از سطح لیسانس تا دوکتورا موجود است",
          "مسیرهای سطح ماستری اغلب بر علوم، تکنالوژی، انجینیری، و رشته‌های طبی تمرکز دارد",
          "مزایا و شرایط بسته به مسیر مشخص متفاوت است"
        ],
        "eligibility": [
          "اتباع افغانستان واجد شرایط هستند، زیرا افغانستان یک کشور عضو بانک اسلامی انکشاف است",
          "رعایت شرایط علمی و رشته‌ای مسیر مشخص",
          "اولویت اغلب به رشته‌های مرتبط با نیازهای انکشافی ملی داده می‌شود"
        ],
        "tips": [
          "رشته تحصیلی را انتخاب کنید که بتوانید آن را به وضوح با یک نیاز انکشافی در جامعه خود مرتبط سازید",
          "کتابچه رسمی برنامه سال جاری را بخوانید — جزئیات هر سال تغییر می‌کند",
          "یک پلان مشخص و واضح برای چگونگی استفاده از سند خود پس از فراغت آماده کنید"
        ],
        "levelLabel": "لیسانس، ماستری، دوکتورا",
        "funding": "بورسیه کامل",
        "deadline": "فراخوان سالانه؛ صفحه رسمی بورسیه‌های IsDB را بررسی کنید",
        "documents": [
          "اسناد علمی",
          "پاسپورت یا سند هویت",
          "اثبات پذیرش در صورت درخواست",
          "فورم‌ها و توصیه‌نامه‌های مخصوص برنامه"
        ]
      },
      "pus": {
        "name": "د اسلامي پرمختیایي بانک (IsDB) بورسیې",
        "country": "د غړو هېوادونو همکار پوهنتونونه",
        "summary": "د پرمختګ محوره بورسیې د اسلامي پرمختیایي بانک د غړو هېوادونو زده‌کوونکو لپاره، په شمول افغانستان، د لیسانس تر ډاکترا کچې پورې د ساینس او ټکنالوژۍ پر بنسټ.",
        "facts": [
          "لارې د لیسانس تر ډاکترا پورې شتون لري",
          "د ماسترۍ کچې لارې اکثرا په ساینس، ټکنالوژۍ، انجینري، او طبي ډګرونو تمرکز کوي",
          "ګټې او د وړتیا شرایط د ځانګړې لارې له مخې توپیر لري"
        ],
        "eligibility": [
          "افغان اتباع وړ دي، ځکه افغانستان د اسلامي پرمختیایي بانک غړی هېواد دی",
          "د ځانګړې لارې علمي او ډګر اړتیاوې پوره کړي",
          "لومړیتوب اکثرا هغو ډګرونو ته ورکول کېږي چې د ملي پرمختګ اړتیاو سره تړاو لري"
        ],
        "tips": [
          "هغه ډګر وټاکئ چې تاسو یې کولی شئ په ښکاره ډول له خپلې ټولنې د پرمختګ اړتیا سره وتړئ",
          "د اوسني کال رسمي برنامه کتابچه ولولئ — تفصیلات هر کال بدلېږي",
          "د فراغت وروسته د خپل سند کارولو لپاره یو روښانه، ځانګړی پلان چمتو کړئ"
        ],
        "levelLabel": "لیسانس، ماسترۍ، ډاکترا",
        "funding": "بشپړ تمویل شوی",
        "deadline": "کلنی غوښتنه؛ د IsDB رسمي بورسیو پاڼه وګورئ",
        "documents": [
          "علمي اسناد",
          "پاسپورت یا د هویت سند",
          "د منلو اثبات چې وغوښتل شي",
          "د برنامې ځانګړي فورمې او توصیې"
        ]
      }
    }
  },
  {
    "id": "stipendium-hungaricum",
    "name": "Stipendium Hungaricum",
    "country": "Hungary",
    "countryTag": "Hungary",
    "levels": [
      "undergrad",
      "masters",
      "phd"
    ],
    "levelLabel": "Bachelor's, Master's, PhD",
    "ageMin": 17,
    "ageMax": 45,
    "englishMin": 2,
    "fields": [
      "Open to most fields"
    ],
    "funding": "Fully funded",
    "deadline": "Annual call; country nomination rules may apply",
    "summary": "A Hungarian government programme offering degree study in Hungary through partner-country and institutional arrangements.",
    "facts": [
      "Study levels and available fields depend on the current call",
      "Applicants must meet both programme and sending-partner requirements",
      "The application portal lets applicants check citizenship-specific information"
    ],
    "eligibility": [
      "Availability depends on the current Afghanistan sending-partner arrangement",
      "Meet university entry and language requirements",
      "Follow the official call and nomination process"
    ],
    "documents": [
      "Academic records",
      "Passport",
      "Language proof if required",
      "Motivation letter and medical documents where requested"
    ],
    "tips": [
      "Confirm Afghanistan's current call before investing time",
      "Do not rely on older calls for deadline or funding details",
      "Apply through the official portal and required nominating body"
    ],
    "officialUrl": "https://apply.stipendiumhungaricum.hu/",
    "translations": {
      "prs": {
        "name": "استیپندیوم هنگاریکم (بورسیه هنگری)",
        "country": "هنگری",
        "summary": "یک بورسیه دولت هنگری برای محصلان بین‌المللی، که از طریق توافقات همکاری مخصوص هر کشور ارائه می‌شود، شامل تحصیل از سطح لیسانس تا دوکتورا.",
        "facts": [
          "رشته‌ها و سطوح تحصیلی موجود بسته به فراخوان سال جاری برای افغانستان متفاوت است",
          "بسیاری از درخواست‌دهندگان باید از طریق یک توافق همکاری معرفی شوند",
          "پورتال درخواست شرایط مخصوص هر ملیت را فهرست می‌کند"
        ],
        "eligibility": [
          "امکان دسترسی برای درخواست‌دهندگان افغان بسته به توافق همکاری سال جاری است",
          "رعایت شرایط علمی و زبانی پذیرش دانشگاه",
          "پیروی از روند رسمی معرفی که برای کشور شما لازم است"
        ],
        "tips": [
          "پیش از صرف وقت روی این درخواست، تایید کنید که آیا افغانستان فراخوان فعال دارد یا خیر",
          "به پست‌های قدیمی اعتماد نکنید — مستقیماً پورتال رسمی را بررسی کنید",
          "از طریق نهاد معرفی درست برای وضعیت خود درخواست دهید"
        ],
        "levelLabel": "لیسانس، ماستری، دوکتورا",
        "funding": "بورسیه کامل",
        "deadline": "فراخوان سالانه؛ قوانین معرفی کشوری ممکن است اعمال شود",
        "documents": [
          "اسناد علمی",
          "پاسپورت",
          "اثبات زبان در صورت نیاز",
          "نامه انگیزشی و اسناد طبی در صورت درخواست"
        ]
      },
      "pus": {
        "name": "سټايپنډيم هنګاریکم (د هنګري بورسیه)",
        "country": "هنګري",
        "summary": "د هنګري د حکومت بورسیه د نړیوالو زده‌کوونکو لپاره، چې د هېواد په کچه د همکارۍ تړونونو له لارې وړاندې کېږي، د لیسانس تر ډاکترا زده‌کړه پوښي.",
        "facts": [
          "شتون لرونکي ډګرونه او زده‌کړې کچې د افغانستان لپاره د اوسني کال غوښتنې پر بنسټ توپیر لري",
          "ډېری غوښتونکي باید د لیږونکي شریک تړون له لارې معرفي شي",
          "د غوښتنلیک پورتال د تابعیت پر بنسټ ځانګړي شرایط لیست کوي"
        ],
        "eligibility": [
          "د افغان غوښتونکو لپاره شتون د اوسني کال د همکارۍ تړون پورې اړه لري",
          "د پوهنتون علمي او ژبني د منلو اړتیاوې پوره کړي",
          "د خپل هېواد لپاره اړین رسمي معرفي بهیر تعقیب کړئ"
        ],
        "tips": [
          "مخکې له دې چې پدې غوښتنلیک وخت ولګوئ، تایید کړئ چې ایا افغانستان فعال غوښتنه لري",
          "پخوانیو پوسټونو ته تکیه مه کوئ — مستقیم رسمي پورتال وګورئ",
          "د خپلې دریځ لپاره د سمې معرفي کوونکې ادارې له لارې غوښتنلیک ورکړئ"
        ],
        "levelLabel": "لیسانس، ماسترۍ، ډاکترا",
        "funding": "بشپړ تمویل شوی",
        "deadline": "کلنی غوښتنه؛ د هېواد د معرفۍ قوانین ښایي پلي شي",
        "documents": [
          "علمي اسناد",
          "پاسپورت",
          "د ژبې اثبات که اړین وي",
          "انګیزې لیک او طبي اسناد چې وغوښتل شي"
        ]
      }
    }
  }
];

function matchLabel(score){
  if(score >= 7) return { text: "Strong match", strong:true };
  if(score >= 4) return { text: "Good match", strong:false };
  return { text: "Possible match", strong:false };
}
