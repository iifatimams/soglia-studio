import type { Locale } from "@soglia/types";

export const locales = ["en", "ar"] as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export const dictionary = {
  en: {
    nav: {
      shop: "Shop",
      about: "About",
      journal: "Journal",
      loyalty: "Loyalty",
      contact: "Contact",
      menu: "Menu",
      bag: "Bag"
    },
    home: {
      eyebrow: "Soglia · Issue 01 · Sharjah",
      title: "The last white orchid, this week.",
      intro:
        "Editorial flowers for the moments at the door. Ready bouquets, stem bunches, paper, cards, vases, and the private launch loyalty card.",
      primary: "Shop flowers",
      secondary: "Read the journal",
      note: "Today’s ready pieces are limited by what the studio can make well.",
      featured: "Featured this week",
      issueNumber: "No. 01",
      proof: "Muwaileh, Sharjah. Delivery planned first for Sharjah, Dubai, and Ajman."
    },
    shop: {
      title: "Shop flowers",
      intro: "Choose the piece. The studio handles the composition.",
      add: "Add to bag",
      view: "View",
      empty: "No products are available in this view yet."
    },
    product: {
      add: "Add to bag",
      included: "Included",
      availability: "Studio note",
      addOns: "Add-ons",
      addVase: "Add a vase",
      messageCard: "Message card",
      messageCardNote: "Available with the order if you write a note.",
      back: "Back to shop"
    },
    collection: {
      back: "Back to shop"
    },
    journal: {
      title: "The journal",
      intro:
        "Write about the bouquet you received, the flowers you want, or a threshold worth marking.",
      published: "Published notes",
      empty: "No notes have been published here yet.",
      anonymousName: "Anonymous",
      name: "Name",
      namePlaceholder: "Your name",
      phone: "Phone",
      phoneCountry: "Country code",
      anonymous: "Publish anonymously",
      story: "Your note",
      storyPlaceholder: "The flowers I still remember...",
      submit: "Send for review",
      success: "Saved as a local preview. Founder approval comes in the content module."
    },
    loyalty: {
      title: "By invitation",
      eyebrow: "Soglia · private",
      intro:
        "The launch loyalty card began as a way to honor the people close to the founder. Each cardholder may gift one invitation to a person they appreciate.",
      reward:
        "For every 6 eligible purchases, the cardholder receives 30% off the next eligible purchase.",
      detail:
        "If you have a question about your card, your invitation, or how the reward works, contact the studio.",
      cta: "Contact us",
      nominationTitle: "Gift your invitation",
      cardId: "Card ID",
      recipientName: "Recipient name",
      recipientPhone: "Recipient phone",
      relationship: "Why this person",
      nominate: "Submit nomination",
      nominationSaved: "Nomination saved locally for now.",
      nominationNote:
        "Live card lookup and founder approval will be connected in the loyalty module."
    },
    contact: {
      title: "Contact the studio",
      intro:
        "For loyalty-card questions, custom bouquet requests, pickup timing, and order support.",
      whatsapp: "WhatsApp details will be added before launch.",
      visit: "Muwaileh, Sharjah"
    },
    about: {
      title: "About Soglia",
      intro:
        "This page is reserved for the founder story, studio point of view, and launch notes. Final copy will be written later."
    },
    cart: {
      title: "Bag",
      empty: "Your bag is empty.",
      checkout: "Continue",
      remove: "Remove",
      total: "Total",
      clear: "Clear bag"
    },
    checkout: {
      title: "Checkout preview",
      intro:
        "Payment, delivery slots, and inventory reservation arrive in later modules. For now, this confirms the buying path."
    }
  },
  ar: {
    nav: {
      shop: "المتجر",
      about: "عن سوغليا",
      journal: "المجلة",
      loyalty: "الولاء",
      contact: "التواصل",
      menu: "القائمة",
      bag: "السلة"
    },
    home: {
      eyebrow: "سوغليا · العدد 01 · الشارقة",
      title: "آخر أوركيد أبيض هذا الأسبوع.",
      intro:
        "زهور بطابع تحريري للحظات التي تصل إلى الباب. باقات جاهزة، ربطات ورد، ورق، بطاقات، مزهريات، وبطاقة ولاء خاصة بالإطلاق.",
      primary: "تسوقي الزهور",
      secondary: "اقرئي المجلة",
      note: "قطع اليوم الجاهزة محدودة بما يستطيع الاستوديو تنفيذه بإتقان.",
      featured: "مختارات هذا الأسبوع",
      issueNumber: "العدد 01",
      proof: "مويلح، الشارقة. التوصيل يبدأ غالبا في الشارقة ودبي وعجمان."
    },
    shop: {
      title: "تسوقي الزهور",
      intro: "اختاري القطعة. الاستوديو يتولى التكوين.",
      add: "أضيفي للسلة",
      view: "عرض",
      empty: "لا توجد منتجات في هذا العرض بعد."
    },
    product: {
      add: "أضيفي للسلة",
      included: "المحتوى",
      availability: "ملاحظة الاستوديو",
      addOns: "إضافات",
      addVase: "إضافة مزهرية",
      messageCard: "بطاقة رسالة",
      messageCardNote: "متاحة مع الطلب إذا كتبتِ رسالة.",
      back: "العودة للمتجر"
    },
    collection: {
      back: "العودة للمتجر"
    },
    journal: {
      title: "المجلة",
      intro: "اكتبي عن الباقة التي وصلتك، الزهور التي تتمنينها، أو لحظة تستحق العلامة.",
      published: "ملاحظات منشورة",
      empty: "لا توجد ملاحظات منشورة هنا بعد.",
      anonymousName: "بدون اسم",
      name: "الاسم",
      namePlaceholder: "اسمك",
      phone: "رقم الهاتف",
      phoneCountry: "رمز الدولة",
      anonymous: "النشر بدون اسم",
      story: "النص",
      storyPlaceholder: "الزهور التي أتذكرها...",
      submit: "إرسال للمراجعة",
      success: "حُفظت كمعاينة محلية. موافقة المؤسسة ستأتي في وحدة المحتوى."
    },
    loyalty: {
      title: "بدعوة",
      eyebrow: "سوغليا · خاص",
      intro:
        "بدأت بطاقة الولاء كتقدير للأشخاص القريبين من المؤسسة. كل حاملة بطاقة تستطيع إهداء دعوة واحدة لشخص تقدره.",
      reward: "بعد كل 6 مشتريات مؤهلة، تحصل حاملة البطاقة على خصم 30% على الشراء المؤهل التالي.",
      detail: "إذا كان لديك سؤال عن بطاقتك أو دعوتك أو طريقة عمل المكافأة، تواصلي مع الاستوديو.",
      cta: "تواصلي معنا",
      nominationTitle: "إهداء الدعوة",
      cardId: "رقم البطاقة",
      recipientName: "اسم الشخص",
      recipientPhone: "رقم الشخص",
      relationship: "لماذا هذا الشخص",
      nominate: "إرسال الترشيح",
      nominationSaved: "حُفظ الترشيح محليا الآن.",
      nominationNote: "التحقق من البطاقة وموافقة المؤسسة ستربط في وحدة الولاء."
    },
    contact: {
      title: "التواصل مع الاستوديو",
      intro: "لأسئلة بطاقة الولاء، طلبات الباقات الخاصة، مواعيد الاستلام، ودعم الطلبات.",
      whatsapp: "تفاصيل واتساب ستضاف قبل الإطلاق.",
      visit: "مويلح، الشارقة"
    },
    about: {
      title: "عن سوغليا",
      intro:
        "هذه الصفحة مخصصة لقصة المؤسسة، وجهة نظر الاستوديو، وملاحظات الإطلاق. النص النهائي سيكتب لاحقا."
    },
    cart: {
      title: "السلة",
      empty: "السلة فارغة.",
      checkout: "المتابعة",
      remove: "إزالة",
      total: "الإجمالي",
      clear: "إفراغ السلة"
    },
    checkout: {
      title: "معاينة الدفع",
      intro: "الدفع، مواعيد التوصيل، وحجز المخزون ستأتي في وحدات لاحقة. الآن نثبت مسار الشراء فقط."
    }
  }
} satisfies Record<Locale, Record<string, unknown>>;

export function t(locale: Locale) {
  return dictionary[locale];
}
