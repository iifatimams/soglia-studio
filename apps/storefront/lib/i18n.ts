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
      journal: "Journal",
      loyalty: "Loyalty",
      contact: "Contact",
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
      phone: "Phone",
      anonymous: "Publish anonymously",
      story: "Your note",
      submit: "Send for review",
      success: "Saved as a local preview. Founder approval comes in the content module."
    },
    loyalty: {
      title: "By invitation",
      eyebrow: "Soglia · private",
      intro:
        "The launch loyalty card began as a way to honor the people close to the founder. Each cardholder may gift one invitation to a person they appreciate.",
      detail:
        "If you have a question about your card, your invitation, or how the reward works, contact the studio.",
      cta: "Contact us"
    },
    contact: {
      title: "Contact the studio",
      intro:
        "For loyalty-card questions, custom bouquet requests, pickup timing, and order support.",
      whatsapp: "WhatsApp details will be added before launch.",
      visit: "Muwaileh, Sharjah"
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
      journal: "المجلة",
      loyalty: "الولاء",
      contact: "التواصل",
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
      phone: "رقم الهاتف",
      anonymous: "النشر بدون اسم",
      story: "النص",
      submit: "إرسال للمراجعة",
      success: "حُفظت كمعاينة محلية. موافقة المؤسسة ستأتي في وحدة المحتوى."
    },
    loyalty: {
      title: "بدعوة",
      eyebrow: "سوغليا · خاص",
      intro:
        "بدأت بطاقة الولاء كتقدير للأشخاص القريبين من المؤسسة. كل حاملة بطاقة تستطيع إهداء دعوة واحدة لشخص تقدره.",
      detail: "إذا كان لديك سؤال عن بطاقتك أو دعوتك أو طريقة عمل المكافأة، تواصلي مع الاستوديو.",
      cta: "تواصلي معنا"
    },
    contact: {
      title: "التواصل مع الاستوديو",
      intro: "لأسئلة بطاقة الولاء، طلبات الباقات الخاصة، مواعيد الاستلام، ودعم الطلبات.",
      whatsapp: "تفاصيل واتساب ستضاف قبل الإطلاق.",
      visit: "مويلح، الشارقة"
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
