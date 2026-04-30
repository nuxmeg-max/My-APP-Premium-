// ============================================================
//  KYYSTORE — DATA PRODUK
//  Edit file ini untuk tambah / ubah / hapus produk
// ============================================================

const STORE_DATA = {
  whatsapp: "6285188724658",
  storeName: "KYYSTORE",
  tagline: "// akses tools premium tanpa ribet.\nharga terjangkau, kualitas ga murahan.",

  categories: [

    // ── CHATGPT PLUS ──────────────────────────────────────────
    {
      category: "CHATGPT PLUS",
      badge: "AI TOOLS",
      products: [
        {
          id: "cgpt-sharing",
          name: "1 BULAN SHARING",
          tag: "ChatGPT Plus",
          badge: "SHARING",
          price: "15.000",
          desc: ["Garansi 25 Hari", "Akun Seller", "Janjian OTP"],
          waName: "ChatGPT Plus 1 Bulan Sharing",
        },
        {
          id: "cgpt-privat",
          name: "1 BULAN PRIVAT",
          tag: "ChatGPT Plus",
          badge: "PRIVAT",
          price: "15.000",
          desc: ["Akun Seller", "No Garansi", "Full Privat Access"],
          waName: "ChatGPT Plus 1 Bulan Privat",
        },
      ],
    },

    // ── GEMINI AI PRO ─────────────────────────────────────────
    {
      category: "GEMINI AI PRO",
      badge: "AI TOOLS",
      products: [
        {
          id: "gemini-head",
          name: "1 BULAN HEAD",
          tag: "Gemini AI Pro",
          badge: "HEAD",
          price: "9.000",
          desc: ["Bergaransi", "Akses Veo 3", "Bonus GDrive 2TB"],
          waName: "Gemini AI Pro 1 Bulan Head",
        },
        {
          id: "gemini-jaspay",
          name: "1 BULAN JASPAY",
          tag: "Gemini AI Pro",
          badge: "JASPAY",
          price: "6.000",
          desc: ["Bergaransi", "Akses Veo 3", "Bonus GDrive 2TB"],
          waName: "Gemini AI Pro 1 Bulan Jaspay",
        },
        {
          id: "gemini-invite",
          name: "1 BULAN INVITE",
          tag: "Gemini AI Pro",
          badge: "INVITE",
          price: "6.000",
          desc: ["Bergaransi", "Akses Veo 3", "Bonus GDrive 2TB"],
          waName: "Gemini AI Pro 1 Bulan Invite",
        },
      ],
    },

    // ── ALIGHT MOTION PRO ─────────────────────────────────────
    {
      category: "ALIGHT MOTION PRO",
      badge: "EDITING",
      products: [
        {
          id: "am-1tahun",
          name: "1 TAHUN",
          tag: "Alight Motion Pro",
          badge: "TAHUNAN",
          price: "500p",
          desc: ["Akses Penuh Fitur Pro", "Tanyakan stok dulu"],
          waName: "Alight Motion Pro 1 Tahun",
        },
      ],
    },

    // ── WETV VIP ──────────────────────────────────────────────
    {
      category: "WETV VIP",
      badge: "STREAMING",
      products: [
        {
          id: "wetv-sharing-6u",
          name: "1 BULAN SHARING",
          tag: "WeTV VIP — 6 User",
          badge: "6U",
          price: "5.000",
          desc: ["Akun Seller", "Full Garansi", "Bisa Login TV", "Tanyakan stok dulu"],
          waName: "WeTV VIP 1 Bulan Sharing 6U",
        },
        {
          id: "wetv-sharing-3u",
          name: "1 BULAN SHARING",
          tag: "WeTV VIP — 3 User",
          badge: "3U",
          price: "8.000",
          desc: ["Akun Seller", "Full Garansi", "Bisa Login TV", "Tanyakan stok dulu"],
          waName: "WeTV VIP 1 Bulan Sharing 3U",
        },
        {
          id: "wetv-sharing-3bln",
          name: "3 BULAN SHARING",
          tag: "WeTV VIP",
          badge: "SHARING",
          price: "9.000",
          desc: ["Akun Seller", "Full Garansi", "Bisa Login TV", "Tanyakan stok dulu"],
          waName: "WeTV VIP 3 Bulan Sharing",
        },
        {
          id: "wetv-privat",
          name: "1 BULAN PRIVAT",
          tag: "WeTV VIP",
          badge: "PRIVAT",
          price: "25.000",
          desc: ["Akun Seller", "Full Garansi", "Bisa Login TV", "Tanyakan stok dulu"],
          waName: "WeTV VIP 1 Bulan Privat",
        },
      ],
    },

    // ── APPLE MUSIC ───────────────────────────────────────────
    {
      category: "APPLE MUSIC",
      badge: "MUSIK",
      products: [
        {
          id: "amusic-famhead",
          name: "FAM HEAD 1 BULAN",
          tag: "Apple Music",
          badge: "FAMHEAD",
          price: "4.000",
          desc: [
            "Privat",
            "Andro Only",
            "Bisa Undang 5 Member Andro/iOS",
            "Akun Seller",
            "Garansi 6 Bulan",
            "Bisa All Device",
          ],
          waName: "Apple Music Fam Head 1 Bulan",
        },
      ],
    },

    // ── CANVA PRO ─────────────────────────────────────────────
    {
      category: "CANVA PRO",
      badge: "DESAIN",
      products: [
        {
          id: "canva-member-1bln",
          name: "MEMBER 1 BULAN",
          tag: "Canva Pro",
          badge: "MEMBER",
          price: "500p",
          desc: ["Bisa Request Designer +500p", "Renew tiap bulan"],
          waName: "Canva Pro Member 1 Bulan",
        },
        {
          id: "canva-member-1thn",
          name: "MEMBER 1 TAHUN",
          tag: "Canva Pro",
          badge: "MEMBER",
          price: "3.000",
          desc: ["Garansi 6 Bulan", "Bisa Request Designer +500p", "Renew tiap bulan"],
          waName: "Canva Pro Member 1 Tahun",
        },
        {
          id: "canva-head-1bln",
          name: "HEAD/OWNER 1 BULAN",
          tag: "Canva Pro",
          badge: "HEAD",
          price: "3.000",
          desc: ["Bisa Request Designer +500p", "Renew tiap bulan"],
          waName: "Canva Pro Head 1 Bulan",
        },
      ],
    },

    // ── CANVA EDU ─────────────────────────────────────────────
    {
      category: "CANVA EDU",
      badge: "DESAIN",
      products: [
        {
          id: "canvaedu-lf-1bln",
          name: "MEMBER LIFETIME",
          tag: "Canva Edu — Garansi 1 Bulan",
          badge: "LIFETIME",
          price: "3.500",
          desc: ["Garansi 1 Bulan", "Akses Fitur Edu"],
          waName: "Canva Edu Member Lifetime Garansi 1 Bulan",
        },
        {
          id: "canvaedu-lf-6bln",
          name: "MEMBER LIFETIME",
          tag: "Canva Edu — Garansi 6 Bulan",
          badge: "LIFETIME",
          price: "5.000",
          desc: ["Garansi 6 Bulan", "Akses Fitur Edu"],
          waName: "Canva Edu Member Lifetime Garansi 6 Bulan",
        },
      ],
    },

    // ── CAPCUT PRO ────────────────────────────────────────────
    {
      category: "CAPCUT PRO",
      badge: "EDITING",
      products: [
        {
          id: "capcut-1bln",
          name: "1 BULAN",
          tag: "CapCut Pro",
          badge: "FULLGAR",
          price: "3.500",
          desc: ["Full Garansi sesuai SNK", "Akun Seller"],
          waName: "CapCut Pro 1 Bulan",
        },
      ],
    },

    // ── YOUTUBE PREMIUM ───────────────────────────────────────
    {
      category: "YOUTUBE PREMIUM",
      badge: "STREAMING",
      products: [
        {
          id: "yt-invite-1bln",
          name: "1 BULAN INVITE",
          tag: "YouTube Premium",
          badge: "INVITE",
          price: "1.500",
          desc: ["Max 2 Bulan", "Support Semua Device", "Termasuk YT Music", "Tanya stok dulu"],
          waName: "YouTube Premium 1 Bulan Via Invite",
        },
        {
          id: "yt-bypass",
          name: "BYPASS INVITE LIMIT",
          tag: "YouTube Premium — 1 Bulan",
          badge: "BYPASS",
          price: "5.000",
          desc: ["Support Semua Device", "Termasuk YT Music", "Tanya stok dulu"],
          waName: "YouTube Premium Bypass Invite Limit 1 Bulan",
        },
        {
          id: "yt-famhead-1bln",
          name: "1 BULAN FAMHEAD",
          tag: "YouTube Premium",
          badge: "FAMHEAD",
          price: "5.000",
          desc: ["Support Semua Device", "Termasuk YT Music", "Tanya stok dulu"],
          waName: "YouTube Premium 1 Bulan Famhead",
        },
        {
          id: "yt-indp-3bln",
          name: "3 BULAN INDIVIDUAL",
          tag: "YouTube Premium — Email Seller — Full Garansi",
          badge: "FULLGAR",
          price: "21.000",
          desc: ["Email Seller", "Full Garansi", "Support Semua Device", "Termasuk YT Music"],
          waName: "YouTube Premium 3 Bulan Individual Full Garansi",
        },
        {
          id: "yt-mix-emailcust",
          name: "3 BULAN MIXPLAN",
          tag: "YouTube Premium — Email Cust",
          badge: "FULLGAR",
          price: "7.000",
          desc: ["Email Customer", "Full Garansi", "Support Semua Device", "Termasuk YT Music"],
          waName: "YouTube Premium 3 Bulan Mixplan Email Cust",
        },
        {
          id: "yt-mix-emailseller",
          name: "3 BULAN MIXPLAN",
          tag: "YouTube Premium — Email Seller",
          badge: "FULLGAR",
          price: "9.000",
          desc: ["Email Seller", "Full Garansi", "Support Semua Device", "Termasuk YT Music"],
          waName: "YouTube Premium 3 Bulan Mixplan Email Seller",
        },
        {
          id: "yt-jaspay",
          name: "1 BULAN JASPAY",
          tag: "YouTube Premium — Indp/Famhead",
          badge: "JASPAY",
          price: "2.000",
          desc: ["Support Semua Device", "Termasuk YT Music", "Tanya stok dulu"],
          waName: "YouTube Premium Jaspay 1 Bulan",
        },
      ],
    },

    // ── SPOTIFY PREMIUM ───────────────────────────────────────
    {
      category: "SPOTIFY PREMIUM",
      badge: "MUSIK",
      products: [
        {
          id: "spotify-student",
          name: "PAKET STUDENT 1 BULAN",
          tag: "Spotify Premium",
          badge: "STUDENT",
          price: "5.000",
          desc: ["Akun Seller", "No Garansi", "Privat Acc"],
          waName: "Spotify Premium Paket Student 1 Bulan",
        },
      ],
    },

    // ── NETFLIX PREMIUM ───────────────────────────────────────
    {
      category: "NETFLIX PREMIUM",
      badge: "STREAMING",
      products: [
        {
          id: "nflx-1p1u",
          name: "1P1U 1 BULAN",
          tag: "Netflix Premium Sharing",
          badge: "SHARING",
          price: "28.000",
          desc: [
            "Premium Plan",
            "Full Garansi",
            "Support All Device",
            "Fast Fix 1-3 Hari",
            "Bisa PPJ",
          ],
          waName: "Netflix Premium Sharing 1P1U 1 Bulan",
        },
        {
          id: "nflx-1p2u",
          name: "1P2U 1 BULAN",
          tag: "Netflix Premium Sharing",
          badge: "SHARING",
          price: "16.000",
          desc: [
            "Premium Plan",
            "Full Garansi",
            "Support All Device",
            "Fast Fix 1-3 Hari",
            "Bisa PPJ",
          ],
          waName: "Netflix Premium Sharing 1P2U 1 Bulan",
        },
      ],
    },

    // ── REMINI PRO ────────────────────────────────────────────
    {
      category: "REMINI PRO",
      badge: "FOTO",
      products: [
        {
          id: "remini-1bln-web",
          name: "1 BULAN VIA WEB",
          tag: "Remini Pro",
          badge: "WEB",
          price: "8.000",
          desc: ["Akun Seller", "Login 1 Device", "Tanya dulu sebelum TF"],
          waName: "Remini Pro 1 Bulan Via Web",
        },
        {
          id: "remini-1bln-lite",
          name: "1 BULAN LITE APK",
          tag: "Remini Pro",
          badge: "LITE",
          price: "12.000",
          desc: ["Akun Seller", "Login 1 Device", "Tanya dulu sebelum TF"],
          waName: "Remini Pro 1 Bulan Lite APK",
        },
        {
          id: "remini-1bln-pro",
          name: "1 BULAN PRO APK",
          tag: "Remini Pro",
          badge: "PRO",
          price: "14.000",
          desc: ["Akun Seller", "Login 1 Device", "Tanya dulu sebelum TF"],
          waName: "Remini Pro 1 Bulan Pro APK",
        },
        {
          id: "remini-1thn-web",
          name: "1 TAHUN VIA WEB",
          tag: "Remini Pro",
          badge: "WEB",
          price: "20.000",
          desc: ["Akun Seller", "Login 1 Device", "Tanya dulu sebelum TF"],
          waName: "Remini Pro 1 Tahun Via Web",
        },
        {
          id: "remini-1thn-lite",
          name: "1 TAHUN LITE APK",
          tag: "Remini Pro",
          badge: "LITE",
          price: "16.000",
          desc: ["Akun Seller", "Login 1 Device", "Tanya dulu sebelum TF"],
          waName: "Remini Pro 1 Tahun Lite APK",
        },
        {
          id: "remini-1thn-pro",
          name: "1 TAHUN PRO APK",
          tag: "Remini Pro",
          badge: "PRO",
          price: "23.000",
          desc: ["Akun Seller", "Login 1 Device", "Tanya dulu sebelum TF"],
          waName: "Remini Pro 1 Tahun Pro APK",
        },
      ],
    },

  ],
};
