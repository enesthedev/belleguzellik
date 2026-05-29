// Tek kaynak: işletme bilgileri ve iletişim. Gerçek değerlerle değiştirin.

const RAW_PHONE = '+90 543 896 65 43' // görünen telefon
const RAW_WHATSAPP = '905438966543' // wa.me için, ülke kodu + numara, boşluksuz

export const site = {
  name: 'Belle Güzellik',
  shortName: 'Belle',
  tagline: 'Saç Tasarım & Kuaför',
  // Kısa marka cümlesi (hero altı, footer)
  motto: 'Doğru kesim, doğru ellerde başlar.',

  phoneDisplay: RAW_PHONE,
  phoneHref: `tel:${RAW_PHONE.replace(/\s+/g, '')}`,

  whatsapp: RAW_WHATSAPP,
  whatsappMessage: 'Merhaba, randevu almak istiyorum.',

  email: 'merhaba@belleguzellik.com',

  address: {
    line: 'Yalıncak Mah. Üniversite Cad. No: 12',
    district: 'Ortahisar / Trabzon',
    full: 'Yalıncak Mah. Üniversite Cad. No: 12, Ortahisar / Trabzon',
  },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Trabzon',

  hours: [
    { days: 'Pazartesi – Cumartesi', time: '09:00 – 20:00' },
    { days: 'Pazar', time: '11:00 – 18:00' },
  ],
  hoursShort: 'Her gün 09:00 – 20:00',

  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },

  nav: [
    { label: 'Hizmetler', href: '#hizmetler' },
    { label: 'Hakkımızda', href: '#hakkimizda' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Yorumlar', href: '#yorumlar' },
    { label: 'S.S.S.', href: '#sss' },
    { label: 'İletişim', href: '#iletisim' },
  ],
} as const

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`
