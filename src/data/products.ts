// Mahsulotlarni shu yerda qo'shing - juda oson!
// Yangi mahsulot qo'shish uchun shunchaki ro'yxatga qo'shing
export interface Product {
  id: string;
  name: string;
  price: number; // Coin narxi
  images: string[]; // Birinchi rasm asosiy rasm bo'ladi
  description?: string;
  category?: string;
}

export const categories = [
  "Barchasi",
  "Smart soatlar",
  "Quloqchinlar",
  "Noutbuklar",
  "Kompyuterlar",
  "Planshetlar",
  "Kitoblar",
  "Aksessuarlar",
  "To'plamlar",
  "Telefonlar",
  "Futbol",
];

import product2 from "../astets/photo_2026-02-12_13-45-32.jpg";
import product4 from "../astets/photo_2026-02-12_13-45-40.jpg";
import product7 from "../astets/ij1.jpg";
import product8 from "../astets/ij2.jpg";

export const products: Product[] = [
  // === SMART SOATLAR ===
  {
    id: "1",
    name: "Smart Watch box",
    price: 870,
    images: [product2, product7, product8],
    description: "8 xil rangli band, 4 ta remishok va tetrs mavjud.",
    category: "Smart soatlar",
  },
  {
    id: "2",
    name: "Smart Watch X8 Pro",
    price: 400,
    images: [
      "https://images.uzum.uz/d535kv3s2tab83s7av8g/original.jpg",
      "https://images.uzum.uz/d535kurs2tab83s7av80/original.jpg",
    ],
    description:
      "Oddiy smart soat, o'quvchilar uchun qulay. Soat, xabarlar, qadamlar hisoblagich.",
    category: "Smart soatlar",
  },
  {
    id: "3",
    name: "Sport Smart Watch M5",
    price: 510,
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400",
      "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=400",
    ],
    description:
      "Qadam, yurak urishi, kaloriya hisoblagich. Sport uchun ideal.",
    category: "Smart soatlar",
  },
  {
    id: "4",
    name: "Бинафша шуласи 2 ",
    price: 460,
    images: [
      "https://images.uzum.uz/d8l7gti1146tv076rd0g/t_product_540_high.jpg",
    ],
    description:
      " Sirlar yanada chuqurlashadi, voqealar esa yanada hayajonli tus oladi! “Binafsha shu’lasi II”",
    category: "Smart soatlar",
  },
  {
    id: "5",
    name: "Kids Smart Watch Y1",
    price: 1030,
    images: [
      "https://cdn.mediapark.uz/imgs/32f831a8-19b8-4e44-b598-3ac4ff780e69_1.webp",
      "https://olcha.uz/image/original/products/2020-07-29/xiaomi-mi-band-5-black-xmsh10hm-global-version-14931-1.jpeg",
    ],
    description: "O'smirlar uchun smart soat, GPS tracker, SOS tugmasi.",
    category: "Smart soatlar",
  },
  {
    id: "6",
    name: "Smart Band M7 Pro",
    price: 3710,
    images: [
      "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/d82c8d1619ad8176d665453cfb2e55f02024061113413066673DCPRsTEHnT.jpg.webp",
      "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/9f61408e3afb633e50cdf1b20de6f4662024061113413168818r767XJ6v3p.jpg.webp",
    ],
    description:
      "Mi Band turidagi smart bilakuzuk. Engil, uzoq batareya, sport rejimlari.",
    category: "Smart soatlar",
  },

  // === QULOQCHINLAR ===
  {
    id: "7",
    name: "TWS Bluetooth Earbuds i12",
    price: 690,
    images: [
      "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/088294b9a7476455eadcda2ef90d6f3a2024022216310082860viJEPUPd2s.png.webp",
      "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/b5ffd023d0808516aaae2ab080d9b28120240222163350516391VP4UsMafm.png.webp",
    ],
    description:
      "AirPods uslubidagi Bluetooth quloqchin. Toza ovoz, kompakt dizayn.",
    category: "Quloqchinlar",
  },
  {
    id: "8",
    name: "P9",
    price: 690,
    images: [
      "https://images.uzum.uz/d4k87g6j76oneqan7t2g/t_product_540_high.jpg",
    ],
    description:
      "Bluetooth versiyasi: V4.1 + EDR chastota diapazoni: 20 Gts dan 20000 Gts gacha uzatish masofasi: 10 metrgacha.",
    category: "Quloqchinlar",
  },
  {
    id: "9",
    name: "Gaming Earbuds G20",
    price: 1680,
    images: [
      "https://images.uzum.uz/ct9fmcui4n3ehka2k8f0/original.jpg",
      "https://images.uzum.uz/ct9fmcviub3d1eokoitg/original.jpg",
    ],
    description: "Low latency gaming quloqchin. O'yinlar uchun tez ulanish.",
    category: "Quloqchinlar",
  },
  {
    id: "10",
    name: "Simsiz quloqchinlar TWS i18 Pods",
    price: 360,
    images: ["https://images.uzum.uz/ch0fpivhj8j9g69dv1rg/original.jpg"],
    description: "i18-TWS simsiz quloqchinlari ixcham.",
    category: "Quloqchinlar",
  },
  {
    id: "11",
    name: "Sennheiser PC 3 CHAT",
    price: 1110,
    images: [
      "https://asset.openshop.uz/storage/uploads/products/photos/202402/OQxcdolawnHZdQCfQwj58ABWtppI8k2hnSNsvmxk.jpg",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    ],
    description: "Katta naushnik (headband), chuqur bass, uzoq batareya.",
    category: "Quloqchinlar",
  },
  {
    id: "12",
    name: "Simsiz Bluetooth quloqchinlar P9",
    price: 340,
    images: [
      "https://images.uzum.uz/d4h9395sp2tr82i66r60/original.jpg",
      "https://images.uzum.uz/d4h93vej76ooegrmjs30/original.jpg",
    ],
    description:
      "Simsiz Bluetooth quloqchinlar P9 — mikrofonli, to‘liq o‘lchamli, kuchli bass, uzoq ishlash.",
    category: "Quloqchinlar",
  },
  {
    id: "13",
    name: "Noise Cancelling Earbuds NC300",
    price: 800,
    images: [
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
      "https://images.unsplash.com/photo-1631867675167-90a456a90863?w=400",
    ],
    description:
      "Shovqinni bekor qiluvchi quloqchin. Tinch muhitda ishlash uchun.",
    category: "Quloqchinlar",
  },
  {
    id: "14",
    name: "Sport Naushnik S880",
    price: 310,
    images: [
      "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=400",
    ],
    description:
      "Quloqdan tushmaydigan sport naushnik. Yugurish va mashq uchun.",
    category: "Quloqchinlar",
  },
  {
    id: "15",
    name: "Simsiz quloqchinlar Wireless MS-881 A",
    price: 1300,
    images: [product4],
    description:
      "Bluetooth versiyasi: V4.1 + EDR chastota diapazoni: 20 Gts dan 20000 Gts gacha uzatish masofasi: 10 metrgacha.",
    category: "Quloqchinlar",
  },

  // === NOUTBUKLAR ===
  {
    id: "16",
    name: "MacBook Air 13inch",
    price: 45830,
    images: [
      "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/c14f7a753888287112058264fa40b72d2025071215424298304F7KJjzbtra.webp",
      "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/737e25c07c3dfe29758e947257946a902025071215424264335rMqvr8lNWL.webp",
    ],
    description:
      "Apple MacBook Air 13 dyuymli noutbuk: Apple M4 protsessori, 16 GB operativ xotira, 256 GB SSD.",
    category: "Noutbuklar",
  },
  {
    id: "17",
    name: "Noutbuk HP AMD",
    price: 5260,
    images: [
      "https://images.uzum.uz/d4rrl33tqdhgicat60rg/original.jpg",
      "https://images.uzum.uz/d2eq5mfiub3brtuame1g/original.jpg",
    ],
    description:
      "Noutbuk HP AMD Ryzen 5-7520U, DDR5 8GB, SSD 512GB, Windows 11 Pro, 15.6 IPS.",
    category: "Noutbuklar",
  },

  // === TELEFONLAR ===
  {
    id: "18",
    name: "Apple iPhone 15",
    price: 36340,
    images: [
      "https://images.uzum.uz/csoa6834nkdp9akeius0/original.jpg",
      "https://images.uzum.uz/csq4hpbvgbkpg1nlvmqg/original.jpg",
    ],
    description:
      "Smartfon Apple iPhone 15, 128 GB, SIM + DualSIM, g'ilof sovg'a.",
    category: "Telefonlar",
  },
  {
    id: "19",
    name: "Smartfon Infinix Note 50 Pro",
    price: 3540,
    images: ["https://images.uzum.uz/cvub6plpb7fbmqmns8b0/original.jpg"],
    description:
      "Smartfon Infinix Note 50 Pro, 128 GB, SIM + DualSIM, g'ilof sovg'a.",
    category: "Telefonlar",
  },
  {
    id: "20",
    name: "Smartfon Xiaomi Poco C71",
    price: 5030,
    images: ["https://images.uzum.uz/d51rn2btqdhua1ut7tqg/original.jpg"],
    description:
      "Smartfon Xiaomi Poco C71, 4+128 GB, 32 Mp ikkita kamera, 6.88 displey.",
    category: "Telefonlar",
  },

  // === KOMPYUTERLAR ===
  {
    id: "21",
    name: "Monoblok Lenovo V50a-24IMB",
    price: 18400,
    images: [
      "https://cdn.mediapark.uz/imgs/0ff4640e-d985-4f97-87e4-2956ec55db4a_Artboard-1-(6).webp",
      "https://cdn.mediapark.uz/imgs/83d01cad-dc89-4759-88b4-1b80b6bc8403_Artboard-2.webp",
    ],
    description:
      "Monoblok Lenovo V50a-24IMB AIO Intel Core i3-10100T, DDR4 4GB, SSD 256GB, 23.8 FHD.",
    category: "Kompyuterlar",
  },
  {
    id: "22",
    name: "Klaviatura + Sichqoncha Komplekti",
    price: 340,
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
    ],
    description: "Simsiz klaviatura va sichqoncha komplekti. Ergonomik dizayn.",
    category: "Kompyuterlar",
  },

  // === PLANSHETLAR ===
  // {
  //   id: "19",
  //   name: "Android Planshet 10.1'",
  //   price: 1370,
  //   images: [
  //     "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
  //   ],
  //   description: "Android planshet 10.1'. O'qish va video ko'rish uchun ideal.",
  //   category: "Planshetlar",
  // },
  {
    id: "23",
    name: "Aqliy Planshet 17 Max",
    price: 4000,
    images: ["https://images.uzum.uz/d63palk3obpn7570dldg/original.jpg"],
    description:
      "Aqliy Planshet 17 Max Smart Tablet Android 15, 5G, UZIMEI, klaviatura, sichqoncha, g‘ilof.",
    category: "Planshetlar",
  },

  // === KITOBLAR ===
  {
    id: "24",
    name: "Mukammal dasturlash 1. HTML va CSS",
    price: 480,
    images: ["https://images.uzum.uz/d5vgjdnqkmamvfqs0edg/original.jpg"],
    description: "HTML va CSS asoslarini o'rganish uchun eng yaxshi kitob.",
    category: "Kitoblar",
  },
  {
    id: "25",
    name: "JavaScript",
    price: 460,
    images: ["https://images.uzum.uz/d3l64mrq345l7k05htug/original.jpg"],
    description: "JavaScript asoslari va eng yaxshi amaliyotlar kitobi.",
    category: "Kitoblar",
  },
  {
    id: "27",
    name: "Saodat Asri kitoblari",
    price: 1510,
    images: ["https://images.uzum.uz/d5uafp3q345o6s40krlg/original.jpg"],
    description:
      "Saodat Asri nashriyotidan kitoblar, bilim va motivatsiya uchun.",
    category: "Kitoblar",
  },
  {
    id: "28",
    name: "Afg'on shamoli, 1-kitob",
    price: 330,
    images: ["https://images.uzum.uz/d39nb95r1spqpknja2kg/original.jpg"],
    description: "Isokzhon Nishonov - Afg'on shamoli, 1-kitob.",
    category: "Kitoblar",
  },
  {
    id: "29",
    name: "Binafsha shulasi",
    price: 530,
    images: ["https://images.uzum.uz/d61d72vqkmamvfqsn3lg/original.jpg"],
    description: "Binafsha shulasi - Usoma Muslim. Binafsha shu'lasi.",
    category: "Kitoblar",
  },
  {
    id: "30",
    name: "Abdulla Qodiriy - O‘tkan kunlar (roman)",
    price: 310,
    images: ["https://images.uzum.uz/d5fm48btqdhjp1vekuv0/original.jpg"],
    description: "Abdulla Qodiriy - O‘tkan kunlar (roman).",
    category: "Kitoblar",
  },

  // === AKSESSUARLAR ===
  {
    id: "31",
    name: "Voleybol to'pi",
    price: 590,
    images: ["https://images.uzum.uz/d7je5k21146ojv9gc0qg/original.jpg"],
    description:
      "Yuqori sifatli voleybol to'pi, o'quvchilar va sport jamoalari uchun.",
    category: "Aksessuarlar",
  },
  {
    id: "32",
    name: "Kino biletlari to'plami",
    price: 250,
    images: [
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=400",
    ],
    description:
      "Kino seansi uchun 2 ta chipta. Do'stlar bilan dam olish uchun ideal.",
    category: "Aksessuarlar",
  },
  {
    id: "33",
    name: "Bloknotlar",
    price: 670,
    images: ["https://images.uzum.uz/cvmflnk7fd1p445qpr2g/original.jpg"],
    description:
      "5 tasi 1 da ruchkali sovg‘a bloknot to'plami, erkaklar uchun.",
    category: "Aksessuarlar",
  },
  {
    id: "34",
    name: "Bloknotlar qizlar uchun",
    price: 450,
    images: ["https://images.uzum.uz/d8e2qbjsv8vo2t0iije0/original.jpg"],
    description:
      "Xarajatlaringizni tartib bilan boshqaring. Minimalistik dizaynli budjet daftari.",
    category: "Aksessuarlar",
  },
  {
    id: "35",
    name: "Kitob uchun podstavka (stend)",
    price: 340,
    images: ["https://images.uzum.uz/cq400pr5qt1gj8de7ja0/original.jpg"],
    description: "Kitobni qulay o'qish uchun metall stend.",
    category: "Aksessuarlar",
  },
  {
    id: "36",
    name: "Telefon g'ilofi (chexol)",
    price: 390,
    images: ["https://images.uzum.uz/d4v8kujtqdhua1usbvsg/original.jpg"],
    description:
      "Smartfon uchun himoyalovchi g'ilof. Kundalik foydalanish uchun ideal.",
    category: "Aksessuarlar",
  },
  {
    id: "37",
    name: "Qo'l brasletlari",
    price: 260,
    images: ["https://images.uzum.uz/d0er6p0n274j5sclvqr0/original.jpg"],
    description:
      "Ayollar bilakuzugi, qo'lga taqiladigan bilaguzuk, o'lchamsiz va har qanday kiyimga mos.",
    category: "Aksessuarlar",
  },
  {
    id: "38",
    name: "Stainless Steel Cartier",
    price: 610,
    images: ["https://images.uzum.uz/d79bst21146ojv9c6ts0/original.jpg"],
    description: "Ayollar bilakuzugi, zamonaviy dizayn va qulay o'lcham.",
    category: "Aksessuarlar",
  },
  {
    id: "39",
    name: "Qizlar uchun sumkalar",
    price: 740,
    images: ["https://images.uzum.uz/d6msp1a1146th72to1u0/original.jpg"],
    description: "Ayollar uchun yelka sumka, kross-bodi va klassik model.",
    category: "Aksessuarlar",
  },
  {
    id: "40",
    name: "Barsetka",
    price: 610,
    images: ["https://images.uzum.uz/d5gjl1rs2tab83sass60/original.jpg"],
    description: "Erkaklar uchun barsetka. Hujjat va telefon saqlash uchun.",
    category: "Aksessuarlar",
  },
  {
    id: "41",
    name: "Laptop Sumkasi 15.6'",
    price: 420,
    images: [
      "https://images.uzum.uz/d5obpn3q345softlgvl0/original.jpg",
      "https://images.uzum.uz/d5obpn3q345softlgvl0/original.jpg",
    ],
    description: "Himoyalangan noutbuk biznes sumkasi.",
    category: "Aksessuarlar",
  },
  {
    id: "42",
    name: "Laptop Stendi Aluminium",
    price: 320,
    images: ["https://images.uzum.uz/cs6jbmmfh2vj1qtkbjcg/original.jpg"],
    description: "Noutbuk va planshet ushlagichi, alyuminiy.",
    category: "Aksessuarlar",
  },
  {
    id: "43",
    name: "Mouse Pad XXL 80x30",
    price: 340,
    images: ["https://images.uzum.uz/d5ofiurq345softlj3jg/original.jpg"],
    description:
      "Katta o'lchamli geymer kovrik 40×90 sm – klaviatura va sichqoncha uchun.",
    category: "Aksessuarlar",
  },
  {
    id: "44",
    name: "USB Hub 4-port 3.0",
    price: 260,
    images: ["https://images.uzum.uz/d29dgs34eu2ok7138rng/original.jpg"],
    description: "USB Hub 4 ta portli USB 3.0 razvetvitel – 5 Gbit/s tezlik.",
    category: "Aksessuarlar",
  },
  {
    id: "45",
    name: "Kabel Tartiblagich (Organizer)",
    price: 290,
    images: [
      "https://images.uzum.uz/cf631tov1htd23al8eg0/original.jpg",
      "https://images.uzum.uz/cf63340l08k0o9qi66f0/original.jpg",
    ],
    description: "Kabellarni tartibga keltiruvchi. Ish stolini toza saqlang.",
    category: "Aksessuarlar",
  },
  {
    id: "46",
    name: "Powerbank 10000mAh",
    price: 610,
    images: ["https://images.uzum.uz/d5sbql7iub393sddpemg/original.jpg"],
    description: "Portativ quvvatlash qurilmasi. 10000mAh, 2 ta USB port.",
    category: "Aksessuarlar",
  },
  {
    id: "47",
    name: "Futbol to'pi Molten",
    price: 610,
    images: ["https://images.uzum.uz/d5vi6n6f4hvsl3r26nkg/original.jpg"],
    description: "Futbol to'pi Molten, AFC F5A5000-AC, o'lcham 5.",
    category: "Futbol",
  },
  {
    id: "48",
    name: "Dayson",
    price: 750,
    images: ["https://images.uzum.uz/d6c0537qkmal07p15ntg/original.jpg"],
    description:
      "Dayson soch quritgich-stayler 5 tasi 1 da, barcha soch turlari uchun.",
    category: "Aksessuarlar",
  },

  // === TO'PLAMLAR ===
  {
    id: "49",
    name: "Kitoblar uchun magnit xatcho'plar",
    price: 210,
    images: [
      "https://images.uzum.uz/ck88vekjvf2h3ge4nefg/original.jpg",
      "https://images.uzum.uz/ck88vejk9fq1var6fusg/original.jpg",
    ],
    description:
      "Kitoblar uchun magnit xatcho'plar, sahifalarni qulay belgilash uchun.",
    category: "To'plamlar",
  },
  {
    id: "491",
    name: "Stol tennisi raketkasi",
    price: 430,
    images: ["https://images.uzum.uz/d6epqoi1146jevjqgcd0/original.jpg"],
    description: "Stol tennisi raketkasi, o'yin uchun qulay.",
    category: "To'plamlar",
  },
  {
    id: "492",
    name: "kartxolder-RF ID",
    price: 320,
    images: ["https://images.uzum.uz/d68deefqkmalqfnbm2d0/original.jpg"],
    description:
      "Bank kartalari, o‘sha pasportlar va ID kartalar uchun metall kartxolder-RF ID himoyasi",
    category: "To'plamlar",
  },
  {
    id: "50",
    name: "Matnlarni belgilash uchun markerlar to'plami",
    price: 320,
    images: ["https://images.uzum.uz/d65bk8dsp2tk1m7hf49g/original.jpg"],
    description: "Markerlar to'plami. Talaba va o'qituvchilar uchun ideal.",
    category: "To'plamlar",
  },
  {
    id: "51",
    name: "10 ta rangli ruchka",
    price: 430,
    images: ["https://images.uzum.uz/csd64cdpq3ghb2qkqf1g/original.jpg"],
    description: "Rangli ruchkalar to'plami. Yozuv va kreativ ishlarda qulay.",
    category: "To'plamlar",
  },
  {
    id: "52",
    name: "Kanselyariya mollari, ruchka",
    price: 460,
    images: ["https://images.uzum.uz/d6fd7q0s9rfd9u93ra80/original.jpg"],
    description:
      "Kanselyariya to'plami: ruchka va yozish uchun kerakli aksessuarlar.",
    category: "To'plamlar",
  },
  {
    id: "53",
    name: "Bloknot Van Gog",
    price: 560,
    images: ["https://images.uzum.uz/cnmpc5lbl7rtgkb9neig/original.jpg"],
    description:
      "Bloknot Van Gog dizayni bilan. San'at va yozuvni birlashtiradi.",
    category: "To'plamlar",
  },
  {
    id: "54",
    name: "Telefon ushlagich",
    price: 320,
    images: ["https://images.uzum.uz/d7timj3sv8vo2t0ce130/original.jpg"],
    description: "Telefon va planshet uchun 360° aylanuvchi metall ushlagich.",
    category: "To'plamlar",
  },
  {
    id: "55",
    name: "Laptop Full Set (Sumka+Mouse+Pad)",
    price: 460,
    images: [
      "https://images.uzum.uz/d5fpq6gjsv1neactfc90/original.jpg",
      "https://images.uzum.uz/d44higlv2sjo4rvgb5kg/original.jpg",
    ],
    description: "Laptop uchun to'liq to'plam: sumka, sichqoncha, mouse pad.",
    category: "To'plamlar",
  },
  {
    id: "56",
    name: "AIRMESH G2 BLACK",
    price: 2780,
    images: ["https://images.uzum.uz/d39p4sq1146g78h3e99g/original.jpg"],
    description:
      "AIRMESH G2 BLACK – zamonaviy va yengil qurilma, qulaylik va ishonchlilik bilan.",
    category: "To'plamlar",
  },
  {
    id: "57",
    name: "Noutbuk sovutgichi NCP-063",
    price: 620,
    images: ["https://images.uzum.uz/d1vqf1t2llnbjcofdddg/original.jpg"],
    description:
      "Noutbuk sovutgichi NCP-063. Zamonaviy va yengil, samarali sovutish.",
    category: "To'plamlar",
  },
  {
    id: "58",
    name: "Izuchayem React. 2-ye izdaniye, Chinnatambi Kirupa",
    price: 1760,
    images: ["https://images.uzum.uz/cgrrr3ng49devoadogeg/original.jpg"],
    description:
      "Izuchayem React. 2-ye izdaniye, Chinnatambi Kirupa – React dasturlashni o'rganish uchun.",
    category: "To'plamlar",
  },
  {
    id: "59",
    name: "Garri Potter, to'plami, Joann Rouling, o'zbek tilida",
    price: 1300,
    images: ["https://images.uzum.uz/clf6mjt6sfhvbd1ik13g/original.jpg"],
    description:
      "Garri Potter to'plami, Joann Rouling – kitoblar seriyasini o'zbek tilida o'rganish uchun.",
    category: "To'plamlar",
  },
];
