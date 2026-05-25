# oSlide2

Electron tabanlı, modern bir slide/sunum hazırlama uygulaması.

## Özellikler

- **Proje Yönetimi** — Ana ekrandan proje oluşturma, açma, yeniden adlandırma, kopyalama ve silme
- **DOM Tabanlı Editör** — Slayt düzenleme, öğe ekleme (metin, başlık, resim, dikdörtgen, daire, ok)
- **Özellik Paneli** — Seçili öğenin konum, boyut, dönüş, opaklık, yazı tipi ve renk ayarları
- **Sürükle-Bırak** — Öğeleri taşıma ve yeniden boyutlandırma, dosyaları sürükleyerek resim ekleme
- **slayt Yönetimi** — Slayt ekleme, çoğaltma, silme ve sürükleme ile yeniden sıralama
- **Geri Al / İleri Al** — Sınırsız geri alma desteği
- **Sunum Modu** — Tam ekran sunum, geçiş efektleri (fade/slide/zoom), zamanlayıcı
- **Dışa Aktar** — PDF ve PNG olarak dışa aktarma
- **Klavye Kısayolları** — Ctrl+Z/Y (geri/ileri al), Ctrl+C/V (kopyala/yapıştır), Ctrl+B/I/U (yazı stilleri), F5 (sunum)
- **Sağ Tık Menüsü** — Ana ekranda proje kartları ve editörde öğeler için bağlam menüsü

## Kullanılan Teknolojiler

- [Electron](https://www.electronjs.org/) — Masaüstü uygulama çatısı
- [Lucide](https://lucide.dev/) — İkon kütüphanesi
- Vanilla JavaScript (framework yok)

## Kurulum

```bash
npm install
npm start
```

## Kullanım

1. Uygulama açıldığında ana ekran görüntülenir
2. "Yeni Proje" ile yeni bir sunum oluşturun veya mevcut projeyi açın
3. Editörde araç çubuğunu kullanarak slaytlara öğe ekleyin
4. F5 tuşu ile sunum modunu başlatın
5. Ctrl+S ile projenizi kaydedin

## Proje Yapısı

```
├── main.js              # Electron ana işlem
├── preload.js           # IPC bağlantıları
├── home.html            # Ana ekran
├── editor.html          # Slayt editörü
├── presentation.html    # Sunum modu
├── css/
│   ├── home.css
│   ├── editor.css
│   └── presentation.css
├── js/
│   ├── home.js          # Ana ekran mantığı
│   ├── projectManager.js # Proje CRUD işlemleri
│   ├── editorState.js   # Uygulama durumu
│   ├── editorActions.js # Slayt/öğe CRUD
│   ├── editorUI.js      # Arayüz render işlemleri
│   ├── editor.js        # Editör başlatma ve olay yönetimi
│   ├── canvas.js        # Tuval etkileşimleri
│   ├── fileManager.js   # Dosya işlemleri
│   └── presentation.js  # Sunum mantığı
└── package.json
```

## Lisans

ISC
