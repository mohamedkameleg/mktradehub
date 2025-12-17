import { Ship, Globe, PackageCheck, Headphones, Truck, FileCheck } from 'lucide-react';

export const translations = {
  ar: {
    companyName: "MK Trade Hub",
    nav: {
      home: 'الرئيسية',
      about: 'عن الشركة',
      services: 'خدماتنا',
      stats: 'لماذا نحن',
      contact: 'تواصل معنا',
      requestQuote: 'طلب عرض سعر'
    },
    hero: {
      badge: 'مفهوم جديد للتجارة العالمية',
      title: 'MK Trade Hub',
      tagline: 'بوابتك نحو الأسواق العالمية',
      description: 'نحن نربط الأسواق العالمية ببعضها البعض. نقدم حلولاً لوجستية متكاملة لضمان وصول بضائعكم بأمان وسرعة وكفاءة عالية.',
      contactBtn: 'تواصل معنا',
      servicesBtn: 'خدماتنا'
    },
    about: {
      title: 'من نحن',
      heading: 'نحن نمهد الطريق لنجاح أعمالك عالمياً',
      description1: 'تأسست MK Trade Hub عام 2016 برؤية واضحة تهدف إلى تقديم خدمات لوجستية وتجارية بمستوى عالمي. نحن نؤمن بأن النجاح في التجارة الدولية يعتمد على الدقة، السرعة، والمصداقية.',
      description2: 'بفضل شبكتنا الواسعة من الشركاء حول العالم، نستطيع تلبية كافة احتياجات عملائنا سواء في مجال الاستيراد أو التصدير، مع ضمان أفضل الأسعار والجودة.',
      points: [
        'التزام تام بالمواعيد المحددة.',
        'شبكة علاقات دولية قوية.',
        'فريق عمل محترف وخبير.',
        'حلول مخصصة لكل عميل.'
      ],
      imageBadge: {
        value: '100%',
        label: 'التزام بالجودة'
      }
    },
    services: {
      title: 'خدماتنا',
      heading: 'حلول متكاملة لنمو أعمالك',
      description: 'نقدم مجموعة واسعة من الخدمات التي تغطي جميع مراحل سلسلة التوريد، مصممة خصيصاً لتلبية متطلبات السوق العالمية.',
      items: [
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
      ]
    },
    stats: {
       items: [
        { id: 1, label: 'سنة خبرة', value: '9', suffix: '+' },
        { id: 2, label: 'عميل سعيد', value: '500', suffix: '+' },
        { id: 3, label: 'دولة حول العالم', value: '30', suffix: '+' },
      ]
    },
    quote: {
      title: 'حاسبة الشحن التقديرية',
      subtitle: 'احصل على تقدير فوري لتكلفة الشحن',
      origin: 'ميناء الشحن (المصدر)',
      destination: 'ميناء الوصول (الوجهة)',
      containerType: 'نوع الحاوية / الشحنة',
      containerOptions: {
        bg20: 'حاوية 20 قدم',
        bg40: 'حاوية 40 قدم',
        hq40: 'حاوية 40 قدم عالي',
        lcl: 'شحن جزئي (LCL)'
      },
      calculating: 'جاري الحساب...',
      calculateBtn: 'حساب التكلفة',
      resultTitle: 'التكلفة التقديرية',
      currency: 'دولار أمريكي',
      note: '* هذه الأسعار تقديرية فقط وقد تتغير بناءً على تاريخ الشحن، تفاصيل البضاعة، والرسوم الإضافية. يرجى التواصل معنا للحصول على عرض سعر نهائي.',
      contactUs: 'تواصل معنا لتأكيد السعر'
    },
    contact: {
      title: 'تواصل معنا',
      heading: 'نحن هنا للإجابة على استفساراتك',
      info: {
        address: { label: 'العنوان', value: 'الاسكندريه شارع النصر برج النصر الاداري' },
        phone: { label: 'الهاتف', value: '+20 100 045 0590' },
        email: { label: 'البريد الإلكتروني', value: 'info@mktradehub.com' },
        hours: { label: 'ساعات العمل', value: 'الأحد - الخميس: 9:00 ص - 5:00 م' }
      },
      form: {
        title: 'أرسل لنا رسالة',
        name: 'الاسم بالكامل',
        phone: 'رقم الهاتف',
        email: 'البريد الإلكتروني',
        service: 'نوع الخدمة المطلوبة',
        message: 'الرسالة',
        submit: 'إرسال الطلب',
        sending: 'جاري الإرسال...',
        successMessage: 'شكراً لك! تم استلام رسالتك بنجاح وسنتواصل معك قريباً.',
        serviceOptions: {
          default: 'اختر الخدمة...',
          import: 'استيراد',
          export: 'تصدير',
          logistics: 'شحن ونقل',
          other: 'أخرى'
        }
      }
    },
    newsletter: {
      title: 'النشرة البريدية',
      description: 'اشترك لتصلك آخر أخبار الشحن والتجارة الدولية.',
      placeholder: 'أدخل بريدك الإلكتروني',
      button: 'اشتراك',
      success: 'تم الاشتراك بنجاح!',
      submitting: 'جاري الاشتراك...'
    },
    whatsapp: {
      label: 'تواصل معنا عبر واتساب'
    },
    footer: {
      description: 'شريكك الاستراتيجي في عالم التجارة الدولية. نقدم حلولاً مبتكرة لتنمية أعمالك وتوسيع نطاق تجارتك حول العالم.',
      quickLinks: 'روابط سريعة',
      servicesTitle: 'خدماتنا',
      serviceLinks: [
         'الشحن البحري والجوي',
         'التخليص الجمركي',
         'الاستيراد لحساب الغير',
         'الاستشارات التجارية',
         'التخزين اللوجستي'
      ],
      contact: 'معلومات الاتصال',
      copyright: 'جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام'
    }
  },
  en: {
    companyName: "MK Trade Hub",
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      stats: 'Why Us',
      contact: 'Contact',
      requestQuote: 'Request Quote'
    },
    hero: {
      badge: 'New Concept for Global Trade',
      title: 'MK Trade Hub',
      tagline: 'Your Gateway to Global Markets',
      description: 'We connect global markets together. We provide integrated logistics solutions to ensure your goods arrive safely, quickly, and efficiently.',
      contactBtn: 'Contact Us',
      servicesBtn: 'Our Services'
    },
    about: {
      title: 'About Us',
      heading: 'We Pave the Way for Your Global Success',
      description1: 'MK Trade Hub was founded in 2016 with a clear vision to provide world-class logistics and trade services. We believe success in international trade depends on precision, speed, and credibility.',
      description2: 'Thanks to our extensive network of partners worldwide, we can meet all our clients needs in import or export, ensuring the best prices and quality.',
      points: [
        'Full commitment to deadlines.',
        'Strong international network.',
        'Professional and experienced team.',
        'Customized solutions for every client.'
      ],
      imageBadge: {
        value: '100%',
        label: 'Quality Commitment'
      }
    },
    services: {
      title: 'Our Services',
      heading: 'Integrated Solutions for Your Business Growth',
      description: 'We offer a wide range of services covering all stages of the supply chain, specifically designed to meet global market requirements.',
      items: [
        {
          id: 1,
          title: 'Import & Export',
          description: 'Comprehensive solutions for importing and exporting goods to and from anywhere in the world with the highest quality standards.',
          icon: Ship
        },
        {
          id: 2,
          title: 'International Shipping',
          description: 'Integrated sea, air, and land freight services ensuring your goods arrive safely and on time.',
          icon: Globe
        },
        {
          id: 3,
          title: 'Customs Clearance',
          description: 'A specialized team to handle all customs procedures quickly and efficiently to avoid delays.',
          icon: FileCheck
        },
        {
          id: 4,
          title: 'Warehousing & Distribution',
          description: 'Equipped warehouses and modern distribution facilities to ensure the safety and professional management of your goods.',
          icon: PackageCheck
        },
        {
          id: 5,
          title: 'Land Transport',
          description: 'Modern fleet of trucks to transport goods domestically and across borders with high efficiency.',
          icon: Truck
        },
        {
          id: 6,
          title: 'Trade Consultancy',
          description: 'Specialized consultations to help you open new markets and understand international laws.',
          icon: Headphones
        }
      ]
    },
    stats: {
       items: [
        { id: 1, label: 'Years Experience', value: '9', suffix: '+' },
        { id: 2, label: 'Happy Clients', value: '500', suffix: '+' },
        { id: 3, label: 'Countries', value: '30', suffix: '+' },
      ]
    },
    quote: {
      title: 'Freight Calculator',
      subtitle: 'Get an instant shipping cost estimate',
      origin: 'Port of Loading (Origin)',
      destination: 'Port of Discharge (Destination)',
      containerType: 'Container / Shipment Type',
      containerOptions: {
        bg20: '20ft Container',
        bg40: '40ft Container',
        hq40: '40ft High Cube',
        lcl: 'Less than Container Load (LCL)'
      },
      calculating: 'Calculating...',
      calculateBtn: 'Calculate Cost',
      resultTitle: 'Estimated Cost',
      currency: 'USD',
      note: '* These prices are estimates only and may change based on shipping date, cargo details, and additional surcharges. Please contact us for a final quote.',
      contactUs: 'Contact us to confirm price'
    },
    contact: {
      title: 'Contact Us',
      heading: 'We Are Here to Answer Your Inquiries',
      info: {
        address: { label: 'Address', value: 'Alexandria, El Nasr St, El Nasr Administrative Tower' },
        phone: { label: 'Phone', value: '+20 100 045 0590' },
        email: { label: 'Email', value: 'info@mktradehub.com' },
        hours: { label: 'Working Hours', value: 'Sun - Thu: 9:00 AM - 5:00 PM' }
      },
      form: {
        title: 'Send Us a Message',
        name: 'Full Name',
        phone: 'Phone Number',
        email: 'Email Address',
        service: 'Service Required',
        message: 'Message',
        submit: 'Send Request',
        sending: 'Sending...',
        successMessage: 'Thank you! Your message has been received successfully.',
        serviceOptions: {
          default: 'Select Service...',
          import: 'Import',
          export: 'Export',
          logistics: 'Shipping & Logistics',
          other: 'Other'
        }
      }
    },
    newsletter: {
      title: 'Newsletter',
      description: 'Subscribe to get the latest news on international trade and shipping.',
      placeholder: 'Enter your email',
      button: 'Subscribe',
      success: 'Subscribed successfully!',
      submitting: 'Subscribing...'
    },
    whatsapp: {
      label: 'Chat with us on WhatsApp'
    },
    footer: {
      description: 'Your strategic partner in international trade. We offer innovative solutions to grow your business and expand your trade scope worldwide.',
      quickLinks: 'Quick Links',
      servicesTitle: 'Our Services',
      serviceLinks: [
        'Sea & Air Freight',
        'Customs Clearance',
        'Import for Others',
        'Trade Consultancy',
        'Logistics Warehousing'
      ],
      contact: 'Contact Info',
      copyright: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use'
    }
  }
};