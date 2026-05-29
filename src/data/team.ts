import { img } from '#/data/content'

export interface Member {
  name: string
  role: string
  image: string
}

// Placeholder ekip — gerçek isim, ünvan ve fotoğraflarla değiştirin.
export const team: Member[] = [
  {
    name: 'Harika Şahin',
    role: 'Kurucu & Saç Tasarımcısı',
    image: img('photo-1494790108377-be9c29b29330', 700),
  },
  {
    name: 'Deniz Aydın',
    role: 'Renk Uzmanı',
    image: img('photo-1438761681033-6461ffad8d80', 700),
  },
  {
    name: 'Cem Yılmaz',
    role: 'Kıdemli Stilist',
    image: img('photo-1507003211169-0a1dd7228f2d', 700),
  },
  {
    name: 'Selin Koç',
    role: 'Bakım & Keratin Uzmanı',
    image: img('photo-1534528741775-53994a69daeb', 700),
  },
  {
    name: 'Burak Demir',
    role: 'Gelin Saçı Tasarımcısı',
    image: img('photo-1500648767791-00dcc994a43e', 700),
  },
]
