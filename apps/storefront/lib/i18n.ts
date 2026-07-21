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
      back: "Back to shop"
    },
    collection: {
      back: "Back to shop"
    },
    journal: {
      title: "The journal",
      intro:
        "Write about the bouquet you received, the flowers you want, or a threshold worth marking.",
      name: "Name",
      phone: "Phone",
      anonymous: "Publish anonymously",
      story: "Your note",
      submit: "Send for review",
      success: "Received. The studio will review it before anything appears."
    },
    loyalty: {
      title: "By invitation",
      intro:
        "The launch loyalty card starts privately. A small first circle receives cards, and each cardholder may nominate one person.",
      cta: "Ask about your card"
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
      bag: "السلة"
    },
    home: {
      eyebrow: "Soglia · العدد 01 · الشارقة",
      title: "آخر أوركيد أبيض هذا الأسبوع.",
      intro:
        "زهور بطابع تحريري للحظات التي تصل إلى الباب. باقات جاهزة، ربطات ورد، ورق، بطاقات، مزهريات، وبطاقة ولاء خاصة بالإطلاق.",
      primary: "تسوقي الزهور",
      secondary: "اقرئي المجلة",
      note: "قطع اليوم الجاهزة محدودة بما يستطيع الاستوديو تنفيذه بإتقان.",
      featured: "مختارات هذا الأسبوع",
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
      back: "العودة للمتجر"
    },
    collection: {
      back: "العودة للمتجر"
    },
    journal: {
      title: "المجلة",
      intro: "اكتبي عن الباقة التي وصلتك، الزهور التي تتمنينها، أو لحظة تستحق العلامة.",
      name: "الاسم",
      phone: "رقم الهاتف",
      anonymous: "النشر بدون اسم",
      story: "النص",
      submit: "إرسال للمراجعة",
      success: "وصلت. سيراجعها الاستوديو قبل النشر."
    },
    loyalty: {
      title: "بدعوة",
      intro:
        "بطاقة الولاء تبدأ بشكل خاص. دائرة صغيرة تحصل على البطاقات أولا، وكل حاملة بطاقة تستطيع ترشيح شخص واحد.",
      cta: "اسألي عن بطاقتك"
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
