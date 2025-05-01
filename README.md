```markdown
# 🚨 Modern Alert

## 📦 Fitur
- 🎨 Desain elegan & animasi halus
- 🔥 4 jenis alert: Success, Error, Warning, Info
- 🕐 Progress bar otomatis
- ❌ Tombol close manual
- ⚡️ Tanpa dependency (hanya `feather-icons` dari CDN)

---

## 🚀 Cara Implementasi via jsDelivr (CDN)

1. **Tambahkan CSS & JS ke HTML kamu:**

```html
<!-- Feather Icons -->
<script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>

<!-- Modern Alert -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/PesonaCoding/modern-alert@main/modern-alert.css">
<script src="https://cdn.jsdelivr.net/gh/PesonaCoding/modern-alert@main/modern-alert.js"></script>
```

---

2. **Panggil Alert di JavaScript:**

```html
<script>
  showAlert('success', 'Berhasil!', 'Data telah disimpan.');
</script>
```

---

## 🧠 Parameter Fungsi `showAlert()`

```js
showAlert(type, title, message, duration);
```

| Parameter | Tipe     | Keterangan                                  |
|-----------|----------|---------------------------------------------|
| `type`    | string   | Jenis alert: `'success'`, `'error'`, `'warning'`, `'info'` |
| `title`   | string   | Judul alert                                 |
| `message` | string   | Isi pesan                                   |
| `duration`| number   | Waktu tampil dalam milidetik (opsional, default 5000) |

---

## 📱 Responsif & Mobile-Friendly

Sudah dioptimalkan untuk tampil baik di layar kecil maupun besar.
