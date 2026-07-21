import type { Locale } from "@soglia/types";

export type ProductKind = "bouquet" | "bunch" | "vase" | "wrap" | "oasis";

export interface Product {
  slug: string;
  kind: ProductKind;
  collection: "ready" | "stems" | "objects";
  price: number;
  limited: boolean;
  imageTone: "orchid" | "carnation" | "vase" | "paper" | "card" | "oasis";
  name: Record<Locale, string>;
  description: Record<Locale, string>;
  included: Record<Locale, string[]>;
  note: Record<Locale, string>;
}

export const products: Product[] = [
  {
    slug: "last-white-orchid",
    kind: "bouquet",
    collection: "ready",
    price: 300,
    limited: true,
    imageTone: "orchid",
    name: { en: "The last white orchid", ar: "آخر أوركيد أبيض" },
    description: {
      en: "A ready arrangement built around white orchid, anthurium, and a quiet wrap.",
      ar: "تنسيق جاهز حول الأوركيد الأبيض والأنثوريوم وورق هادئ."
    },
    included: {
      en: ["Ready bouquet", "Message card", "Care slip"],
      ar: ["باقة جاهزة", "بطاقة رسالة", "إرشادات العناية"]
    },
    note: {
      en: "Made after order. Limited by orchid availability.",
      ar: "تجهز بعد الطلب. الكمية مرتبطة بتوفر الأوركيد."
    }
  },
  {
    slug: "ten-carnations",
    kind: "bunch",
    collection: "stems",
    price: 90,
    limited: false,
    imageTone: "carnation",
    name: { en: "Ten carnations", ar: "عشر قرنفل" },
    description: {
      en: "A fixed bunch of ten carnations, wrapped for the table or the hand.",
      ar: "ربطة ثابتة من عشر قرنفل، مغلفة للطاولة أو اليد."
    },
    included: {
      en: ["10 stems", "Paper wrap"],
      ar: ["10 سيقان", "تغليف ورقي"]
    },
    note: {
      en: "Color may shift by market availability.",
      ar: "قد يتغير اللون حسب توفر السوق."
    }
  },
  {
    slug: "threshold-vase",
    kind: "vase",
    collection: "objects",
    price: 185,
    limited: false,
    imageTone: "vase",
    name: { en: "Threshold vase", ar: "مزهرية العتبة" },
    description: {
      en: "A narrow vase for weekly stems and small arrangements.",
      ar: "مزهرية ضيقة للسيقان الأسبوعية والتنسيقات الصغيرة."
    },
    included: {
      en: ["1 vase"],
      ar: ["مزهرية واحدة"]
    },
    note: {
      en: "Sold alone or with flowers.",
      ar: "تباع وحدها أو مع الزهور."
    }
  }
];

export const collections = [
  {
    slug: "ready",
    name: { en: "Ready arrangements", ar: "تنسيقات جاهزة" },
    description: {
      en: "The studio’s finished bouquet language, made after order.",
      ar: "لغة الاستوديو في الباقات الجاهزة، تنفذ بعد الطلب."
    }
  },
  {
    slug: "stems",
    name: { en: "Stem bunches", ar: "ربطات الورد" },
    description: {
      en: "Fixed-count flower bunches. No single loose stems.",
      ar: "ربطات بعدد ثابت من السيقان. لا تباع السيقان منفردة."
    }
  },
  {
    slug: "objects",
    name: { en: "Objects and paper", ar: "الأدوات والورق" },
    description: {
      en: "Vases, cards, wrap, ribbon, and floral foam.",
      ar: "مزهريات، بطاقات، ورق تغليف، شرائط، وفوم زهور."
    }
  }
] as const;

export function formatPrice(price: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "ar" ? "ar-AE" : "en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0
  }).format(price);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCollection(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}

export function getProductAddOns(productSlug: string) {
  const product = getProduct(productSlug);
  const vase = getProduct("threshold-vase");
  const addOns: Array<{
    type: "vase" | "message-card";
    name: Record<Locale, string>;
    note: Record<Locale, string>;
    product?: Product;
  }> = [
    {
      type: "message-card",
      name: { en: "Message card", ar: "بطاقة رسالة" },
      note: {
        en: "Available with the order if you write a note.",
        ar: "متاحة مع الطلب إذا كتبتِ رسالة."
      }
    }
  ];

  if (product && product.kind !== "vase" && vase) {
    addOns.unshift({
      type: "vase",
      name: vase.name,
      note: {
        en: "Add a vase for the arrangement or weekly stems.",
        ar: "أضيفي مزهرية للتنسيق أو للسيقان الأسبوعية."
      },
      product: vase
    });
  }

  return addOns;
}
