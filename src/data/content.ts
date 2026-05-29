import {
  Award,
  Crown,
  Droplets,
  Eye,
  HandHeart,
  Palette,
  Scissors,
  ShieldCheck,
  Sparkles,
  Wind,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  icon: LucideIcon
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export interface GalleryImage {
  src: string
  alt: string
}

export interface Testimonial {
  name: string
  treatment: string
  rating: number
  quote: string
}

export interface FaqItem {
  q: string
  a: string
}

export const services: Service[] = [
  {
    icon: Scissors,
    title: 'Saç Kesimi & Şekillendirme',
    description:
      'Yüz hatlarınıza ve tarzınıza özel kesim, katlı şekillendirme ve uçların yenilenmesiyle taze bir görünüm.',
  },
  {
    icon: Palette,
    title: 'Saç Boyama',
    description:
      'Dip boya, komple renklendirme ve trend tonlarla saçınıza canlı, kalıcı ve sağlıklı bir renk kazandırıyoruz.',
  },
  {
    icon: Sparkles,
    title: 'Ombre & Balyaj',
    description:
      'Yüzünüzü aydınlatan doğal ışıltılı geçişler; bakımlı duran ombre, balyaj ve kül tonu çalışmaları.',
  },
  {
    icon: Wind,
    title: 'Fön & Şekillendirme',
    description:
      'Günlük, davet ve özel anlar için hacimli fön, maşa dalgaları ve kalıcı şekillendirme uygulamaları.',
  },
  {
    icon: Droplets,
    title: 'Keratin & Brezilya Fönü',
    description:
      'Elektriklenmeyi azaltan, saçı düzleştirip parlaklık kazandıran keratin ve Brezilya fönü bakımları.',
  },
  {
    icon: HandHeart,
    title: 'Saç Bakımı & Onarım Kürü',
    description:
      'Yıpranmış saçlara özel besleyici kür ve onarım protokolleriyle daha güçlü, canlı ve sağlıklı saçlar.',
  },
  {
    icon: Crown,
    title: 'Gelin Saçı & Topuz',
    description:
      'Düğün, nişan ve özel davetler için provası yapılan, gün boyu duran zarif topuz ve gelin saçı tasarımları.',
  },
  {
    icon: Eye,
    title: 'Kaş & Kirpik Tasarımı',
    description:
      'Yüz hatlarınıza özel kaş tasarımı, ipek kirpik ve lifting ile bakımlı ve etkileyici bir bakış.',
  },
]

export const stats: Stat[] = [
  { value: '10+', label: 'Yıllık Tecrübe' },
  { value: '5.000+', label: 'Mutlu Müşteri' },
  { value: '20+', label: 'Saç & Bakım Hizmeti' },
  { value: '4.9', label: 'Müşteri Puanı' },
]

export const features: Feature[] = [
  {
    icon: Award,
    title: 'Uzman Stilistler',
    description:
      'Alanında deneyimli, trendleri takip eden stilist ve kuaförlerimiz her kesim ve rengi titizlikle uygular.',
  },
  {
    icon: ShieldCheck,
    title: 'Hijyen & Güven',
    description:
      'Steril ekipman ve titiz hijyen standartlarıyla; sağlığınız ve konforunuz her zaman önceliğimizdir.',
  },
  {
    icon: HandHeart,
    title: 'Kişiye Özel Stil',
    description:
      'Yüz şeklinize, saç tipinize ve isteğinize özel planlanan kesim ve renklerle size en yakışanı buluyoruz.',
  },
]

// Görseller: dilediğiniz zaman /public klasörüne ekleyip yollarını buradan değiştirin.
export const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const heroImage = img('photo-1560066984-138dadb4c035', 1600)
export const aboutImage = img('photo-1521590832167-7bcbfaa6381f', 1000)
export const bannerImage = img('photo-1633681926022-84c23e8cb2d6', 1600)
export const contactImage = img('photo-1559599101-f09722fb4948', 1600)

export const gallery: GalleryImage[] = [
  { src: img('photo-1570172619644-dfd03ed5d881'), alt: 'Lazer epilasyon' },
  {
    src: img('photo-1605497788044-5a32c7078486'),
    alt: 'Saç boyama uygulaması',
  },
  {
    src: img('photo-1595476108010-b4d1f102b1b1'),
    alt: 'Şekillendirilmiş uzun saç',
  },
  { src: img('photo-1492106087820-71f1a00d2b11'), alt: 'Doğal dalgalı saç' },
  { src: img('photo-1559599101-f09722fb4948'), alt: 'Fön ve şekillendirme' },
  {
    src: img('photo-1633681926022-84c23e8cb2d6'),
    alt: 'Saç bakımı ve parlaklık',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Elif Yıldız',
    treatment: 'Saç Kesimi',
    rating: 5,
    quote:
      'Yıllardır gittiğim tek yer. Saçımın şeklini ve tarzımı çok iyi anlıyorlar, her seferinde dışarı mutlu çıkıyorum.',
  },
  {
    name: 'Merve Demir',
    treatment: 'Balyaj',
    rating: 5,
    quote:
      'Balyajım tam hayal ettiğim gibi, çok doğal bir geçiş oldu. Hijyene ve detaya verdikleri önem gerçekten fark yaratıyor.',
  },
  {
    name: 'Zeynep Kaya',
    treatment: 'Gelin Saçı',
    rating: 5,
    quote:
      'Düğün günümde saçım gün boyu hiç bozulmadı, herkes çok beğendi. Belle Güzellik’i tüm arkadaşlarıma gönül rahatlığıyla öneriyorum.',
  },
]

export const faq: FaqItem[] = [
  {
    q: 'Randevu nasıl alabilirim?',
    a: 'Telefon, WhatsApp ya da sayfadaki “Randevu Al” butonu üzerinden kolayca randevu oluşturabilirsiniz. Size en uygun gün ve saati birlikte planlıyoruz.',
  },
  {
    q: 'Bir işlem ne kadar sürer?',
    a: 'Hizmete göre değişir: kesim ortalama 30–45 dakika; boya, balyaj ve keratin gibi işlemler 1,5 ile 3 saat arasında sürebilir. Randevu sırasında tahmini süre hakkında sizi bilgilendiriyoruz.',
  },
  {
    q: 'İlk gelişimde ne olur?',
    a: 'Önce saçınızı ve beklentilerinizi konuşuyor; yüz şeklinize, saç tipinize ve isteğinize uygun kesim veya renk için size özel bir öneri sunuyoruz.',
  },
  {
    q: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
    a: 'Nakit, kredi kartı ve banka kartı ile ödeme yapabilirsiniz. Seçili hizmetlerde paket ve kampanya seçeneklerimiz mevcuttur.',
  },
  {
    q: 'Randevumu iptal edebilir miyim?',
    a: 'Randevunuzu en az 24 saat öncesinden bildirmeniz durumunda dilediğiniz gibi erteleyebilir veya iptal edebilirsiniz.',
  },
]
