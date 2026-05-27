const SLIDE_TEMPLATES = [
  {
    id: 'blank',
    label: 'Boş Slayt',
    description: 'Temiz tuval, sıfırdan başla',
    icon: 'square',
    category: 'temel',
    tags: ['bos', 'temiz', 'baslangic'],
    color: '#1a1a1a',
    elements: []
  },
  {
    id: 'title-only',
    label: 'Sadece Başlık',
    description: 'Büyük başlık, ortada',
    icon: 'type',
    category: 'temel',
    tags: ['baslik', 'giris', 'bolum'],
    color: '#1a2a3a',
    elements: [
      { type: 'title', content: 'Hoş Geldiniz', x: 60, y: 180,
        width: 840, height: 80, fontSize: 52,
        textAlign: 'center', bold: true }
    ]
  },
  {
    id: 'title-text',
    label: 'Başlık + Metin',
    description: 'Klasik sunum düzeni',
    icon: 'layout-list',
    category: 'temel',
    tags: ['baslik', 'metin', 'klasik'],
    color: '#1a1a2a',
    elements: [
      { type: 'title', content: 'Gündem', x: 60, y: 60,
        width: 840, height: 70, fontSize: 40, bold: true },
      { type: 'text', content: '• Proje durumu ve kilometre taşları\n• Bütçe değerlendirmesi\n• Sonraki adımlar ve hedefler\n• Soru-cevap bölümü',
        x: 60, y: 150, width: 840, height: 300, fontSize: 20 }
    ]
  },
  {
    id: 'two-column',
    label: 'İki Sütun',
    description: 'Karşılaştırma ve liste için ideal',
    icon: 'columns',
    category: 'düzen',
    tags: ['karsilastirma', 'sutun', 'liste'],
    color: '#1a2a1a',
    elements: [
      { type: 'title', content: 'Artılar ve Eksiler', x: 60, y: 40,
        width: 840, height: 60, fontSize: 36, bold: true },
      { type: 'text', content: '✓ Artı 1\n✓ Artı 2\n✓ Artı 3',
        x: 60, y: 120, width: 390, height: 340, fontSize: 18, color: '#2e7d32' },
      { type: 'text', content: '✗ Eksi 1\n✗ Eksi 2\n✗ Eksi 3',
        x: 510, y: 120, width: 390, height: 340, fontSize: 18, color: '#c62828' }
    ]
  },
  {
    id: 'section',
    label: 'Bölüm Başlığı',
    description: 'Sunum içi geçiş slaydı',
    icon: 'bookmark',
    category: 'düzen',
    tags: ['bolum', 'gecis', 'baslik'],
    color: '#2a1a1a',
    elements: [
      { type: 'title', content: 'Bölüm 1', x: 60, y: 200,
        width: 840, height: 80, fontSize: 56,
        textAlign: 'center', bold: true },
      { type: 'text', content: 'Konuya genel bakış',
        x: 60, y: 300, width: 840, height: 40,
        fontSize: 22, textAlign: 'center' }
    ]
  },
  {
    id: 'quote',
    label: 'Alıntı',
    description: 'Büyük alıntı veya slogan',
    icon: 'quote',
    category: 'içerik',
    tags: ['alinti', 'slogan', 'vurgu'],
    color: '#2a2a1a',
    elements: [
      { type: 'text', content: '"Başarının sırrı, \nhenüz yapılmamış \nşeyleri yapmaktır."',
        x: 80, y: 140, width: 800, height: 160,
        fontSize: 34, textAlign: 'center', italic: true, color: '#e8e8e8' },
      { type: 'text', content: '— John Whitmore',
        x: 80, y: 310, width: 800, height: 40,
        fontSize: 18, textAlign: 'center', color: '#aaa' }
    ]
  },
  {
    id: 'thank-you',
    label: 'Teşekkürler',
    description: 'Kapanış slaydı',
    icon: 'heart',
    category: 'içerik',
    tags: ['kapanis', 'tesekkur', 'soru'],
    color: '#1a1a2a',
    elements: [
      { type: 'title', content: 'Teşekkürler!', x: 60, y: 160,
        width: 840, height: 80, fontSize: 60,
        textAlign: 'center', bold: true, color: '#ffd700' },
      { type: 'text', content: 'Sorularınız için hazırım.',
        x: 60, y: 260, width: 840, height: 40,
        fontSize: 22, textAlign: 'center', color: '#ccc' },
      { type: 'text', content: '📧 email@sirket.com\n📞 +90 555 123 45 67',
        x: 60, y: 340, width: 840, height: 60,
        fontSize: 16, textAlign: 'center', color: '#999' }
    ]
  },
  {
    id: 'bullet-list',
    label: 'Madde Listesi',
    description: 'Maddeler halinde içerik',
    icon: 'list',
    category: 'içerik',
    tags: ['liste', 'madde', 'detay'],
    color: '#1a2a2a',
    elements: [
      { type: 'title', content: 'Ana Başlıklar', x: 60, y: 50,
        width: 840, height: 60, fontSize: 38, bold: true },
      { type: 'text', content: '• Birinci madde — açıklama metni\n• İkinci madde — açıklama metni\n• Üçüncü madde — açıklama metni\n• Dördüncü madde — açıklama metni\n• Beşinci madde — açıklama metni',
        x: 60, y: 130, width: 840, height: 360, fontSize: 18 }
    ]
  },
  {
    id: 'numbered-list',
    label: 'Numaralı Liste',
    description: 'Adım adım açıklamalar',
    icon: 'list-ordered',
    category: 'içerik',
    tags: ['sira', 'adim', 'numarali'],
    color: '#2a1a2a',
    elements: [
      { type: 'title', content: 'Yapılacaklar', x: 60, y: 50,
        width: 840, height: 60, fontSize: 38, bold: true },
      { type: 'text', content: '1. Planlama ve hazırlık\n2. Tasarım aşaması\n3. Geliştirme süreci\n4. Test ve kalite kontrol\n5. Yayınlama',
        x: 60, y: 130, width: 840, height: 360, fontSize: 18 }
    ]
  },
  {
    id: 'cover',
    label: 'Kapak Slaydı',
    description: 'Sunum açılışı için etkileyici kapak',
    icon: 'crown',
    category: 'düzen',
    tags: ['kapak', 'giris', 'acilis'],
    color: '#1a1a2a',
    elements: [
      { type: 'title', content: 'Sunum Başlığı', x: 60, y: 120,
        width: 840, height: 100, fontSize: 64,
        textAlign: 'center', bold: true, color: '#ffd700' },
      { type: 'text', content: 'Alt başlık veya açıklama',
        x: 60, y: 240, width: 840, height: 50,
        fontSize: 24, textAlign: 'center', color: '#ccc' },
      { type: 'text', content: 'Ad Soyad — Şirket Adı',
        x: 60, y: 330, width: 840, height: 40,
        fontSize: 16, textAlign: 'center', color: '#999' }
    ]
  },
  {
    id: 'image-text',
    label: 'Görsel + Metin',
    description: 'Görsel ağırlıklı içerik düzeni',
    icon: 'image',
    category: 'düzen',
    tags: ['goruntu', 'gorsel', 'medya'],
    color: '#2a2a2a',
    elements: [
      { type: 'title', content: 'Görsel Başlık', x: 60, y: 40,
        width: 840, height: 50, fontSize: 32, bold: true },
      { type: 'text', content: 'Görselin yanında yer alacak açıklama metni. Bu alan görsel ile ilgili detaylı bilgi içerir.',
        x: 500, y: 110, width: 400, height: 380, fontSize: 16 },
      { type: 'rect', fill: '#333', borderColor: '#444', borderWidth: 1, borderRadius: 8,
        x: 40, y: 110, width: 440, height: 380 }
    ]
  }
]

const BUILT_IN_IDS = SLIDE_TEMPLATES.map(t => t.id)

window.SLIDE_TEMPLATES = SLIDE_TEMPLATES
window.BUILT_IN_IDS = BUILT_IN_IDS
