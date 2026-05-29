export interface PriceItem {
  name: string
  desc: string
  price: string
}

// Placeholder fiyatlar — güncel fiyat listenizle değiştirin.
export const pricing: PriceItem[] = [
  {
    name: 'Saç Kesimi & Fön',
    desc: 'Yıkama, kesim ve şekillendirme',
    price: '₺450',
  },
  {
    name: 'Fön & Şekillendirme',
    desc: 'Günlük veya özel anlar için',
    price: '₺300',
  },
  {
    name: 'Saç Boyama',
    desc: 'Dip boya veya komple renklendirme',
    price: '₺900',
  },
  {
    name: 'Ombre & Balyaj',
    desc: 'Doğal ışıltılı renk geçişleri',
    price: '₺1.800',
  },
  {
    name: 'Keratin & Brezilya Fönü',
    desc: 'Düzleştirici bakım uygulaması',
    price: '₺2.200',
  },
  {
    name: 'Gelin Saçı & Topuz',
    desc: 'Provalı, gün boyu kalıcı tasarım',
    price: '₺1.500',
  },
]
