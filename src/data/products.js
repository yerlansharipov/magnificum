import heritage1 from '../assets/art/heritage_1.png';
import pop1 from '../assets/art/pop_1.png';
import civic1 from '../assets/art/civic_1.png';

export const products = [
  {
    id: 'p1',
    title: 'Қазақ Қызы (Heritage Print)',
    subtitle: 'Limited Edition Digital Print',
    price: 15000,
    currency: '₸',
    usdApprox: '~$33',
    size: 'High-res PDF/PNG (300 DPI)',
    image: heritage1,
    mockColor: 'from-emerald-900 to-teal-800',
    popular: true,
    stock: 12,
  },
  {
    id: 'p2',
    title: 'Ninety One — Zaq Portrait',
    subtitle: 'Fan Art Digital Download',
    price: 12000,
    currency: '₸',
    usdApprox: '~$26',
    size: 'High-res JPEG (4000x4000px)',
    image: pop1,
    mockColor: 'from-blue-900 to-indigo-800',
    popular: false,
    stock: 45,
  },
  {
    id: 'p3',
    title: 'Women of the Shanyrak',
    subtitle: 'Civic Stance Series',
    price: 18000,
    currency: '₸',
    usdApprox: '~$40',
    size: 'Artistic Print (Digital Delivery)',
    image: civic1,
    mockColor: 'from-rose-900 to-rose-800',
    popular: true,
    stock: 8,
  },
];

export const paymentMethods = [
  { id: 'halyk', name: 'Halyk Bank', nameRu: 'Платеж через Halyk', logo: '🏦', color: '#009640', url: 'https://epay.homebank.kz/' },
  { id: 'freedom', name: 'Freedom Pay', nameRu: 'Оплата Freedom Pay', logo: '💳', color: '#000000', url: 'https://freedompay.kz/' },
  { id: 'kaspi', name: 'Kaspi.kz', nameRu: 'Kaspi QR / Перевод', logo: '📱', color: '#f52222', url: 'https://kaspi.kz/' },
];
