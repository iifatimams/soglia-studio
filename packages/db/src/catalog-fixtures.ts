import type { CatalogCollection, CatalogProduct, Locale } from "@soglia/types";

export const catalogCollections: CatalogCollection[] = [
  {
    slug: "ready",
    name: { en: "Ready arrangements", ar: "تنسيقات جاهزة" },
    description: {
      en: "Soglia bouquet styles, made after order and guided by the studio's eye.",
      ar: "أنماط باقات سوغليا، تجهز بعد الطلب وتدار بعين الاستوديو."
    }
  },
  {
    slug: "stems",
    name: { en: "Flower bunches", ar: "ربطات الورد" },
    description: {
      en: "Fixed-count flower bunches. No single loose stems.",
      ar: "ربطات ورد بعدد ثابت من السيقان. لا تباع السيقان منفردة."
    }
  },
  {
    slug: "objects",
    name: { en: "Objects", ar: "الأدوات" },
    description: {
      en: "Vases, wrapping materials, ribbon, cards, and floral foam for studio orders.",
      ar: "مزهريات، مواد تغليف، شرائط، بطاقات، وفوم زهور لطلبات الاستوديو."
    }
  }
];

export const catalogProducts: CatalogProduct[] = [
  {
    slug: "last-white-orchid",
    kind: "bouquet",
    status: "published",
    collection: "ready",
    availability: "limited",
    limited: true,
    imageTone: "orchid",
    name: { en: "The last white orchid", ar: "آخر أوركيد أبيض" },
    description: {
      en: "A ready arrangement built around white orchid, sculptural lines, and a quiet wrap.",
      ar: "تنسيق جاهز حول الأوركيد الأبيض، خطوط نحتية، وتغليف هادئ."
    },
    seoTitle: {
      en: "White orchid bouquet in Sharjah | Soglia Studio",
      ar: "باقة أوركيد أبيض في الشارقة | سوغليا"
    },
    seoDescription: {
      en: "Order an editorial white orchid bouquet from Soglia Studio in Muwaileh, Sharjah.",
      ar: "اطلبي باقة أوركيد أبيض بطابع تحريري من سوغليا في مويلح، الشارقة."
    },
    styleSummary: {
      en: "White, sculptural, restrained. Built for a sharp table or a serious thank-you.",
      ar: "أبيض، نحتي، وهادئ. مناسب لطاولة واضحة أو شكر يحمل وزن."
    },
    included: {
      en: ["Ready bouquet", "Message card option", "Care slip"],
      ar: ["باقة جاهزة", "خيار بطاقة رسالة", "إرشادات العناية"]
    },
    note: {
      en: "Made after order. Limited by orchid availability.",
      ar: "تجهز بعد الطلب. الكمية مرتبطة بتوفر الأوركيد."
    },
    variants: [
      {
        slug: "standard",
        name: { en: "Standard", ar: "قياسي" },
        price: 300,
        stemCount: 18,
        isDefault: true
      },
      {
        slug: "large",
        name: { en: "Large", ar: "كبير" },
        price: 450,
        stemCount: 28,
        isDefault: false
      }
    ]
  },
  {
    slug: "ten-carnations",
    kind: "bunch",
    status: "published",
    collection: "stems",
    availability: "available",
    limited: false,
    imageTone: "carnation",
    name: { en: "Ten carnations", ar: "عشر قرنفل" },
    description: {
      en: "A fixed bunch of carnations, wrapped for the table or the hand.",
      ar: "ربطة ثابتة من القرنفل، مغلفة للطاولة أو اليد."
    },
    seoTitle: {
      en: "Carnation bunch in Sharjah | Soglia Studio",
      ar: "ربطة قرنفل في الشارقة | سوغليا"
    },
    seoDescription: {
      en: "Shop fixed-count carnation bunches from Soglia Studio in Sharjah.",
      ar: "تسوقي ربطات قرنفل بعدد ثابت من سوغليا في الشارقة."
    },
    styleSummary: {
      en: "Clean bunch, fixed count, wrapped without fuss.",
      ar: "ربطة واضحة، عدد ثابت، وتغليف بلا مبالغة."
    },
    included: {
      en: ["10 stems", "Paper wrap"],
      ar: ["10 سيقان", "تغليف ورقي"]
    },
    note: {
      en: "Color may shift by market availability.",
      ar: "قد يتغير اللون حسب توفر السوق."
    },
    variants: [
      {
        slug: "ten-stems",
        name: { en: "10 stems", ar: "10 سيقان" },
        price: 90,
        stemCount: 10,
        isDefault: true
      },
      {
        slug: "twenty-stems",
        name: { en: "20 stems", ar: "20 ساق" },
        price: 170,
        stemCount: 20,
        isDefault: false
      }
    ]
  },
  {
    slug: "threshold-vase",
    kind: "vase",
    status: "published",
    collection: "objects",
    availability: "available",
    limited: false,
    imageTone: "vase",
    name: { en: "Threshold vase", ar: "مزهرية العتبة" },
    description: {
      en: "A narrow vase for weekly stems and small arrangements.",
      ar: "مزهرية ضيقة للسيقان الأسبوعية والتنسيقات الصغيرة."
    },
    seoTitle: {
      en: "Flower vase in Sharjah | Soglia Studio",
      ar: "مزهرية زهور في الشارقة | سوغليا"
    },
    seoDescription: {
      en: "A narrow vase for Soglia flower bunches, weekly stems, and small arrangements.",
      ar: "مزهرية ضيقة لربطات سوغليا، السيقان الأسبوعية، والتنسيقات الصغيرة."
    },
    styleSummary: {
      en: "Narrow, practical, quiet enough to stay out.",
      ar: "ضيقة، عملية، وهادئة بما يكفي لتبقى ظاهرة."
    },
    included: {
      en: ["1 vase"],
      ar: ["مزهرية واحدة"]
    },
    note: {
      en: "Sold alone or with flowers.",
      ar: "تباع وحدها أو مع الزهور."
    },
    variants: [
      {
        slug: "one-size",
        name: { en: "One size", ar: "مقاس واحد" },
        price: 185,
        isDefault: true
      }
    ]
  },
  {
    slug: "studio-wrap",
    kind: "wrap",
    status: "draft",
    collection: "objects",
    availability: "made_to_order",
    limited: false,
    imageTone: "paper",
    name: { en: "Studio wrap", ar: "تغليف الاستوديو" },
    description: {
      en: "Wrapping paper used for Soglia bunches and custom bouquet work.",
      ar: "ورق تغليف يستخدم لربطات سوغليا والباقات الخاصة."
    },
    seoTitle: {
      en: "Soglia wrapping paper | Soglia Studio",
      ar: "ورق تغليف سوغليا | سوغليا"
    },
    seoDescription: {
      en: "Studio wrapping paper for flower bunches and bouquet orders.",
      ar: "ورق تغليف الاستوديو لربطات الورد وطلبات الباقات."
    },
    styleSummary: {
      en: "Paper with restraint. Used as part of the arrangement, not as decoration noise.",
      ar: "ورق هادئ. يستخدم كجزء من التكوين لا كزحمة حوله."
    },
    included: {
      en: ["1 wrapping sheet"],
      ar: ["ورقة تغليف واحدة"]
    },
    note: {
      en: "Usually sold as part of a flower order.",
      ar: "غالبا يباع كجزء من طلب زهور."
    },
    variants: [
      {
        slug: "sheet",
        name: { en: "Sheet", ar: "ورقة" },
        price: 20,
        isDefault: true
      }
    ]
  },
  {
    slug: "floral-foam-block",
    kind: "oasis",
    status: "draft",
    collection: "objects",
    availability: "available",
    limited: false,
    imageTone: "oasis",
    name: { en: "Floral foam block", ar: "قالب فوم زهور" },
    description: {
      en: "Oasis-style floral foam for arrangements and workshop preparation.",
      ar: "فوم زهور للتنسيقات والتحضير للورش."
    },
    seoTitle: {
      en: "Floral foam in Sharjah | Soglia Studio",
      ar: "فوم زهور في الشارقة | سوغليا"
    },
    seoDescription: {
      en: "Floral foam for arrangements, custom orders, and later workshop use.",
      ar: "فوم زهور للتنسيقات، الطلبات الخاصة، واستخدام الورش لاحقا."
    },
    styleSummary: {
      en: "Operational material for arrangements.",
      ar: "مادة تشغيلية للتنسيقات."
    },
    included: {
      en: ["1 foam block"],
      ar: ["قالب فوم واحد"]
    },
    note: {
      en: "Tracked as catalog and inventory material.",
      ar: "يتتبع كمنتج ومادة مخزون."
    },
    variants: [
      {
        slug: "standard-block",
        name: { en: "Standard block", ar: "قالب قياسي" },
        price: 25,
        isDefault: true
      }
    ]
  }
];

export function getDefaultVariant(product: CatalogProduct) {
  return product.variants.find((variant) => variant.isDefault) ?? product.variants[0];
}

export function getProductPrice(product: CatalogProduct) {
  return getDefaultVariant(product)?.price ?? 0;
}

export function getLocalizedProduct(product: CatalogProduct, locale: Locale) {
  const variant = getDefaultVariant(product);

  return {
    slug: product.slug,
    name: product.name[locale],
    description: product.description[locale],
    price: variant?.price ?? 0,
    status: product.status,
    availability: product.availability
  };
}
