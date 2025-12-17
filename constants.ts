import { Ship, Globe, PackageCheck, Headphones, Truck, FileCheck } from 'lucide-react';
import { ServiceItem, StatItem, NavLink, ContactInfo } from './types';

export const COMPANY_NAME = "MK Trade Hub";
export const TAGLINE = "شريكك الموثوق في التجارة العالمية";

export const NAV_LINKS: NavLink[] = [
  { id: 'home', name: 'الرئيسية', href: '#home', type: 'page' },
  { id: 'about', name: 'عن الشركة', href: '#about', type: 'page' },
  { id: 'services', name: 'خدماتنا', href: '#services', type: 'page' },
  { id: 'stats', name: 'لماذا نحن', href: '#stats', type: 'page' },
  { id: 'contact', name: 'تواصل معنا', href: '#contact', type: 'page' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'الاستيراد والتصدير',
    description: 'نوفر حلولاً شاملة لاستيراد وتصدير البضائع من وإلى جميع أنحاء العالم بأعلى معايير الجودة.',
    icon: Ship
  },
  {
    id: 2,
    title: 'الشحن الدولي',
    description: 'خدمات شحن بحري، جوي، وبري متكاملة تضمن وصول بضائعكم بأمان وفي الوقت المحدد.',
    icon: Globe
  },
  {
    id: 3,
    title: 'التخليص الجمركي',
    description: 'فريق متخصص لإنهاء كافة الإجراءات الجمركية بسرعة وكفاءة لتجنب أي تأخير.',
    icon: FileCheck
  },
  {
    id: 4,
    title: 'التخزين والتوزيع',
    description: 'مستودعات مجهزة ومرافق توزيع حديثة لضمان سلامة بضائعكم وإدارتها باحترافية.',
    icon: PackageCheck
  },
  {
    id: 5,
    title: 'النقل البري',
    description: 'أسطول حديث من الشاحنات لنقل البضائع داخل البلاد وعبر الحدود بكفاءة عالية.',
    icon: Truck
  },
  {
    id: 6,
    title: 'استشارات تجارية',
    description: 'نقدم استشارات متخصصة لمساعدتك في فتح أسواق جديدة وفهم القوانين الدولية.',
    icon: Headphones
  }
];

export const STATS: StatItem[] = [
  { id: 1, label: 'سنة خبرة', value: '9', suffix: '+' },
  { id: 2, label: 'عميل سعيد', value: '500', suffix: '+' },
  { id: 3, label: 'دولة حول العالم', value: '30', suffix: '+' },
];

export const CONTACT_INFO: ContactInfo = {
  address: 'الاسكندريه شارع النصر برج النصر الاداري',
  phone: '+20 100 045 0590',
  email: 'info@mktradehub.com',
  workingHours: 'الأحد - الخميس: 9:00 ص - 5:00 م'
};