# Website Desa Wisata Tegalrejo

Website statis (HTML, CSS, JS, Bootstrap 5) untuk mempromosikan wisata Desa Tegalrejo, Kecamatan Ngadirejo, Kabupaten Temanggung.

## Struktur Folder

```
tegalrejo-wisata/
├── index.html                     -> Beranda
├── tentang.html                   -> Profil Desa Tegalrejo
├── wisata.html                    -> Daftar 3 destinasi wisata
├── wisata-umbul-jumprit.html       -> Detail Umbul Jumprit
├── wisata-titik0-kaliprogo.html    -> Detail Titik 0 KM Kali Progo
├── wisata-wapitt.html              -> Detail Wapitt
├── kontak.html                    -> Info Kontak
├── css/
│   └── style.css                  -> Semua styling kustom
├── js/
│   └── script.js                  -> Navbar scroll, animasi, form
└── images/                        -> Taruh foto asli Anda di sini
```

## Cara Membuka di VS Code

1. Ekstrak/salin folder `tegalrejo-wisata` ke komputer Anda.
2. Buka folder tersebut di Visual Studio Code (`File > Open Folder`).
3. Install ekstensi **Live Server** (by Ritwick Dey) jika belum ada.
4. Klik kanan pada `index.html` → **Open with Live Server**.

## Mengganti Foto Placeholder dengan Foto Asli

Semua foto saat ini masih berupa placeholder dari `placehold.co` (kotak warna dengan teks) agar Anda tidak perlu menunggu koneksi internet untuk melihat tata letak. Silakan ganti dengan foto asli:

1. Simpan foto asli Anda ke dalam folder `images/` (contoh: `images/hero-desa.jpg`).
2. Di file HTML, cari atribut `src="https://placehold.co/..."` lalu ganti dengan path lokal, misalnya:
   ```html
   <img src="images/hero-desa.jpg" alt="Pemandangan Desa Tegalrejo">
   ```
3. Untuk hero/background, cari `style="background-image:url('https://placehold.co/...')"` dan ganti url-nya dengan path foto Anda, misalnya:
   ```html
   style="background-image:url('images/hero-desa.jpg')"
   ```

## Mengganti Peta (Google Maps)

Setiap halaman detail wisata dan halaman kontak memakai `<iframe>` Google Maps sederhana berbasis pencarian nama tempat. Untuk hasil yang lebih akurat:

1. Buka [Google Maps](https://maps.google.com), cari lokasi yang tepat.
2. Klik **Bagikan → Sematkan peta**, salin kode `<iframe>` yang diberikan.
3. Ganti `<iframe src="...">` yang ada di file HTML dengan kode tersebut.

## Mengganti Nomor Telepon / Kontak
         
Cari teks `+62 812-3456-7890` dan `+62 812-9876-5432` di seluruh file HTML (gunakan fitur **Find in Files** / `Ctrl+Shift+F` di VS Code), lalu ganti dengan nomor telepon pengelola yang sesungguhnya. Jangan lupa juga memperbarui:
- Link `tel:+62...` dan `https://wa.me/62...`
- Alamat email `info@tegalrejowisata.id`

## Catatan

- Formulir kontak di `kontak.html` masih bersifat demo (belum terhubung ke server/database). Untuk fungsi kirim email sungguhan, Anda perlu menghubungkannya ke layanan backend/form seperti Formspree, Google Forms, atau server PHP/Node.js sendiri.
- Semua styling kustom (warna, font, kartu wisata, gelombang pembatas seksi, dsb.) ada di `css/style.css` — dijelaskan dengan komentar per bagian agar mudah dimodifikasi.
