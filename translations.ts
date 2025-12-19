import { Ship, Globe, PackageCheck, Headphones, Truck, FileCheck } from 'lucide-react';

export const translations = {
  ar: {
    companyName: "MK Trade Hub",
    nav: {
      home: 'الرئيسية',
      about: 'عن الشركة',
      services: 'خدماتنا',
      stats: 'لماذا نحن',
      contact: 'تواصل معنا'
    },
    hero: {
      badge: '', 
      title: 'MK Trade Hub',
      tagline: 'نبتكر الحلول لتجارة عالمية أسهل',
      description: 'شريككم الاستراتيجي في خدمات الاستيراد والتصدير. نجمع بين الخبرة الطويلة والاحترافية العالية لضمان وصول تجارتكم إلى آفاق جديدة بفاعلية وأمان.',
      contactBtn: 'تحدث معنا',
      servicesBtn: 'خدماتنا'
    },
    about: {
      title: 'من نحن',
      heading: 'ريادة وخبرة تمتد لسنوات في السوق العالمي',
      description1: 'منذ عام 2016، ونحن نعمل في MK Trade Hub على تقديم مفهوم جديد للخدمات اللوجستية، حيث نضع مصلحة عملائنا وتوسع أعمالهم في مقدمة أولوياتنا.',
      description2: 'نتميز بشبكة علاقات دولية قوية وقدرة عالية على إدارة الصفقات التجارية المعقدة بكل سلاسة وشفافية.',
      points: [
        'حلول مخصصة تناسب حجم أعمالك.',
        'فريق عمل متخصص في القوانين الجمركية.',
        'سرعة فائقة في تنفيذ عمليات الشحن.',
        'تغطية واسعة تشمل أهم الموانئ العالمية.'
      ],
      imageBadge: {
        value: '', 
        label: ''
      }
    },
    services: {
      title: 'خدماتنا اللوجستية',
      heading: 'حلول متكاملة تغطي كافة احتياجاتك',
      description: 'نقدم منظومة شاملة من الخدمات المصممة بعناية لتسهيل حركة تجارتك الدولية وضمان كفاءة سلاسل الإمداد.',
      items: [
        { id: 1, title: 'الاستيراد والتصدير', description: 'تسهيل عمليات التبادل التجاري مع الموردين والمصانع العالمية.', icon: Ship },
        { id: 2, title: 'الشحن الدولي', description: 'شحن بحري وجوي سريع يربط مصر والإمارات بكافة أنحاء العالم.', icon: Globe },
        { id: 3, title: 'التخليص الجمركي', description: 'إنهاء كافة الإجراءات المستندية والجمركية بأعلى قدر من الكفاءة.', icon: FileCheck },
        { id: 4, title: 'التخزين واللوجستيات', description: 'مساحات تخزين آمنة وأنظمة إدارة مخزون حديثة ومتطورة.', icon: PackageCheck },
        { id: 5, title: 'النقل البري', description: 'أسطول نقل مجهز لنقل البضائع بين المدن والموانئ بسرعة وأمان.', icon: Truck },
        { id: 6, title: 'الاستشارات التجارية', description: 'توجيهات استراتيجية لمساعدتكم في فهم متغيرات السوق الدولي.', icon: Headphones }
      ]
    },
    stats: {
       items: [
        { id: 1, label: 'سنوات خبرة', value: '9', suffix: '+' },
        { id: 2, label: 'عملاء نعتز بهم', value: '500', suffix: '+' },
        { id: 3, label: 'وجهة دولية', value: '30', suffix: '+' },
      ]
    },
    quote: {
      title: 'حاسبة تكاليف الشحن',
      subtitle: 'احصل على تقدير فوري لتكلفة شحنتك القادمة',
      origin: 'نقطة الانطلاق (ميناء التحميل)',
      destination: 'وجهة الوصول (ميناء التفريغ)',
      containerType: 'نوع الحاوية',
      containerOptions: {
        bg20: 'حاوية 20 قدم عادية',
        bg40: 'حاوية 40 قدم عادية',
        hq40: 'حاوية 40 قدم High Cube',
        lcl: 'شحن جزئي (LCL)'
      },
      calculateBtn: 'احسب التكلفة التقديرية',
      calculating: 'جاري التحليل...',
      resultTitle: 'التكلفة التقديرية المتوقعة',
      currency: 'دولار أمريكي',
      note: 'هذا السعر تقديري وقد يختلف بناءً على أسعار السوق الحالية ونوع البضاعة.',
      contactUs: 'اطلب تسعيرة نهائية الآن'
    },
    contact: {
      title: 'اتصل بنا',
      heading: 'يسعدنا دائماً تواصلكم معنا',
      info: {
        address: { label: 'فرع مصر', value: 'الاسكندرية، شارع النصر، برج النصر الإداري' },
        addressUAE: { label: 'فرع الإمارات', value: 'دبي، المنطقة الحرة، مجمع الأعمال' },
        phone: { label: 'هاتف مصر', value: '+20 100 045 0590' },
        phoneUAE: { label: 'هاتف الإمارات', value: '+971 50 123 4567' },
        email: { label: 'البريد الإلكتروني', value: 'info@mktradehub.com' },
        hours: { label: 'ساعات العمل', value: 'الأحد - الخميس: 9:00 ص - 5:00 م' }
      },
      form: {
        title: 'أرسل استفسارك',
        name: 'الاسم الكامل',
        phone: 'رقم الجوال',
        email: 'البريد الإلكتروني',
        service: 'الخدمة المطلوبة',
        message: 'تفاصيل الرسالة',
        submit: 'إرسال الآن',
        sending: 'جاري الإرسال...',
        successMessage: 'شكراً لتواصلك! سنقوم بالرد عليك في أقرب وقت ممكن.',
        serviceOptions: {
          default: 'اختر الخدمة...',
          import: 'استيراد وتصدير',
          logistics: 'شحن ولوجستيات',
          consultancy: 'استشارات تجارية'
        }
      }
    },
    newsletter: {
      title: 'اشترك في نشرتنا',
      description: 'ابق على اطلاع بآخر أخبار التجارة العالمية والفرص المتاحة.',
      placeholder: 'بريدك الإلكتروني',
      button: 'اشتراك',
      submitting: 'جاري الحفظ...',
      success: 'تم بنجاح!'
    },
    footer: {
      description: 'MK Trade Hub .. جسركم الموثوق للعبور نحو الأسواق العالمية بكل ثقة واحترافية.',
      quickLinks: 'وصول سريع',
      servicesTitle: 'خدماتنا',
      serviceLinks: ['شحن بحري وجوي', 'تخليص جمركي', 'تخزين ولوجستيات', 'استشارات'],
      contact: 'بيانات التواصل',
      copyright: 'جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام'
    },
    whatsapp: {
      label: 'تواصل مباشرة عبر واتساب'
    }
  },
  en: {
    companyName: "MK Trade Hub",
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      stats: 'Why Us',
      contact: 'Contact'
    },
    hero: {
      badge: '',
      title: 'MK Trade Hub',
      tagline: 'Innovative Solutions for Easier Global Trade',
      description: 'Your strategic partner in import and export services. We combine long-standing experience with high professionalism to ensure your trade reaches new heights.',
      contactBtn: 'Talk to Us',
      servicesBtn: 'Our Services'
    },
    about: {
      title: 'About Us',
      heading: 'Leadership and Years of Global Market Expertise',
      description1: 'Since 2016, MK Trade Hub has been working on redefining logistics, putting our clients interests and business expansion at the forefront.',
      description2: 'We are characterized by a strong international network and a high capability to manage complex trade deals with transparency.',
      points: [
        'Custom solutions tailored to your business scale.',
        'Expert team in customs regulations.',
        'Exceptional speed in shipping execution.',
        'Wide coverage across major global ports.'
      ],
      imageBadge: {
        value: '',
        label: ''
      }
    },
    services: {
      title: 'Our Services',
      heading: 'Integrated Solutions for All Your Needs',
      description: 'We offer a comprehensive system of carefully designed services to facilitate your international trade and ensure supply chain efficiency.',
      items: [
        { id: 1, title: 'Import & Export', description: 'Facilitating trade exchanges with global suppliers and factories.', icon: Ship },
        { id: 2, title: 'Global Shipping', description: 'Fast sea and air freight connecting Egypt, UAE, and the world.', icon: Globe },
        { id: 3, title: 'Customs Clearance', description: 'Handling all documentary and customs procedures with high efficiency.', icon: FileCheck },
        { id: 4, title: 'Warehousing', description: 'Secure storage spaces with modern inventory management systems.', icon: PackageCheck },
        { id: 5, title: 'Land Transport', description: 'Modern fleet equipped to move goods between cities and ports.', icon: Truck },
        { id: 6, title: 'Trade Consultancy', description: 'Strategic guidance to help you understand global market variables.', icon: Headphones }
      ]
    },
    stats: {
       items: [
        { id: 1, label: 'Years Experience', value: '9', suffix: '+' },
        { id: 2, label: 'Valued Clients', value: '500', suffix: '+' },
        { id: 3, label: 'International Destinations', value: '30', suffix: '+' },
      ]
    },
    quote: {
      title: 'Freight Calculator',
      subtitle: 'Get an instant estimate for your next shipment',
      origin: 'Origin (Port of Loading)',
      destination: 'Destination (Port of Discharge)',
      containerType: 'Container Type',
      containerOptions: {
        bg20: '20ft Standard Container',
        bg40: '40ft Standard Container',
        hq40: '40ft High Cube Container',
        lcl: 'Less than Container Load (LCL)'
      },
      calculateBtn: 'Calculate Estimated Cost',
      calculating: 'Analyzing...',
      resultTitle: 'Estimated Shipping Cost',
      currency: 'USD',
      note: 'This is an estimated price and may vary based on market rates and cargo type.',
      contactUs: 'Request Final Quote'
    },
    contact: {
      title: 'Contact Us',
      heading: 'We Are Always Happy to Hear from You',
      info: {
        address: { label: 'Egypt Office', value: 'Alexandria, El Nasr St, Admin Tower' },
        addressUAE: { label: 'UAE Office', value: 'Dubai, Free Zone, Business Complex' },
        phone: { label: 'Egypt Phone', value: '+20 100 045 0590' },
        phoneUAE: { label: 'UAE Phone', value: '+971 50 123 4567' },
        email: { label: 'Email', value: 'info@mktradehub.com' },
        hours: { label: 'Working Hours', value: 'Sun - Thu: 9:00 AM - 5:00 PM' }
      },
      form: {
        title: 'Send an Inquiry',
        name: 'Full Name',
        phone: 'Mobile Number',
        email: 'Email Address',
        service: 'Requested Service',
        message: 'Message Details',
        submit: 'Send Now',
        sending: 'Sending...',
        successMessage: 'Thank you! We will get back to you as soon as possible.',
        serviceOptions: {
          default: 'Select Service...',
          import: 'Import & Export',
          logistics: 'Logistics & Shipping',
          consultancy: 'Trade Consultancy'
        }
      }
    },
    newsletter: {
      title: 'Our Newsletter',
      description: 'Stay updated with the latest global trade news and opportunities.',
      placeholder: 'Your email address',
      button: 'Subscribe',
      submitting: 'Saving...',
      success: 'Done!'
    },
    footer: {
      description: 'MK Trade Hub .. your trusted bridge to cross into global markets with confidence.',
      quickLinks: 'Quick Links',
      servicesTitle: 'Services',
      serviceLinks: ['Sea & Air Freight', 'Customs Clearance', 'Logistics', 'Consultancy'],
      contact: 'Contact Info',
      copyright: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions'
    },
    whatsapp: {
      label: 'WhatsApp Direct'
    }
  }
};