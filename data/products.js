// ============================================================
//  KYYSTORE — DATA PRODUK
//  Edit file ini untuk tambah / ubah / hapus produk
//
//  Struktur 1 produk:
//  {
//    id: "unik-id",           ← bebas, asal unik
//    name: "Nama Produk",     ← nama yang tampil di card
//    tag: "Tag / Tipe",       ← label kecil di bawah nama
//    badge: "SHARING",        ← pill badge kanan atas
//    price: "15.000",         ← harga (string, tanpa Rp)
//    desc: [                  ← list deskripsi (array string)
//      "Garansi 25 Hari",
//      "Akun Seller",
//    ],
//    waName: "Nama buat WA",  ← teks yang dikirim ke WA: "Buy {waName}"
//  }
//
//  Untuk tambah KATEGORI baru, tambah object baru di array categories:
//  {
//    category: "Nama Kategori",
//    badge: "LABEL",
//    products: [ ...produk ]
//  }
// ============================================================

const STORE_DATA = {
  whatsapp: "6285188724658",   // ← Nomor WA kamu (format internasional)
  storeName: "KYYSTORE",
  tagline: "// akses tools premium tanpa ribet.\nharga terjangkau, kualitas ga murahan.",

  categories: [
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
          desc: [
            "Garansi 25 Hari",
            "Akun Seller",
            "Janjian OTP",
          ],
          waName: "ChatGPT Plus 1 Bulan Sharing",
        },
        {
          id: "cgpt-privat",
          name: "1 BULAN PRIVAT",
          tag: "ChatGPT Plus",
          badge: "PRIVAT",
          price: "15.000",
          desc: [
            "Akun Seller",
            "No Garansi",
            "Full Privat Access",
          ],
          waName: "ChatGPT Plus 1 Bulan Privat",
        },
      ],
    },

    // ── Contoh kategori baru (hapus komentar ini untuk aktifkan) ──
    // {
    //   category: "NETFLIX",
    //   badge: "STREAMING",
    //   products: [
    //     {
    //       id: "nflx-1bln",
    //       name: "1 BULAN PRIVAT",
    //       tag: "Netflix Premium",
    //       badge: "PRIVAT",
    //       price: "20.000",
    //       desc: ["Akun Privat", "Garansi 30 Hari"],
    //       waName: "Netflix Premium 1 Bulan Privat",
    //     },
    //   ],
    // },
  ],
};
