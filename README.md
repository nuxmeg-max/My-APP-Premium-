# KYYSTORE — Project Structure

```
zakistore/
├── index.html          ← Halaman utama (struktur HTML)
├── css/
│   ├── base.css        ← Reset, variabel warna, font, animasi global
│   ├── nav.css         ← Navbar & custom cursor
│   ├── hero.css        ← Hero section & marquee ticker
│   └── products.css    ← Card produk, kategori, footer
├── js/
│   ├── cursor.js       ← Logic smooth cursor
│   └── order.js        ← Render produk + redirect WhatsApp
└── data/
    └── products.js     ← ⭐ EDIT DI SINI untuk tambah/ubah produk
```

## Cara Tambah Produk

Buka `data/products.js`, tambah object baru di dalam array `products`:

```js
{
  id: "id-unik",
  name: "NAMA PRODUK",
  tag: "Sub Label",
  badge: "TIPE",
  price: "25.000",
  desc: ["Fitur 1", "Fitur 2"],
  waName: "Nama yang dikirim ke WA",
}
```

## Cara Tambah Kategori

Di `data/products.js`, tambah object baru di array `categories`:

```js
{
  category: "NAMA KATEGORI",
  badge: "LABEL",
  products: [ ...produk ]
}
```

## Cara Ganti Nomor WA

Di `data/products.js`, ubah baris:
```js
whatsapp: "6285188724658",
```
