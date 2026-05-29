import { img } from '#/data/content'

export interface Product {
  name: string
  desc: string
  price: string
  image: string
}

// Placeholder ürünler — gerçek ürün adı, fiyat ve görselleriyle değiştirin.
export const products: Product[] = [
  {
    name: 'Onarıcı Şampuan',
    desc: 'Yıpranmış saçlar için besleyici günlük bakım',
    price: '₺320',
    image: img('photo-1556228720-195a672e8a03', 700),
  },
  {
    name: 'Besleyici Saç Maskesi',
    desc: 'Haftalık derinlemesine onarım kürü',
    price: '₺420',
    image: img('photo-1608248543803-ba4f8c70ae0b', 700),
  },
  {
    name: 'Argan Saç Serumu',
    desc: 'Parlaklık ve elektriklenme karşıtı',
    price: '₺380',
    image: img('photo-1612817288484-6f916006741a', 700),
  },
  {
    name: 'Renk Koruyucu Şampuan',
    desc: 'Boyalı saçlarda canlı renk için',
    price: '₺350',
    image: img('photo-1571875257727-256c39da42af', 700),
  },
  {
    name: 'Isı Koruyucu Sprey',
    desc: 'Fön ve maşa öncesi koruma',
    price: '₺290',
    image: img('photo-1556228578-8c89e6adf883', 700),
  },
  {
    name: 'Saç Bakım Yağı',
    desc: 'Uçlar için yoğun nem ve onarım',
    price: '₺410',
    image: img('photo-1598452963314-b09f397a5c48', 700),
  },
]
