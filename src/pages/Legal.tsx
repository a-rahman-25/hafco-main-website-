import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { formatPhone, phoneHref } from '@/lib/utils';
import PageTransition from '@/components/shared/PageTransition';
import hafcoLogo from '@/assets/hafco-logo.png';

interface Section {
  title: { en: string; ar: string };
  body: { en: string[]; ar: string[] };
}

interface LegalContent {
  kicker: { en: string; ar: string };
  title: { en: string; ar: string };
  updated: { en: string; ar: string };
  intro: { en: string; ar: string };
  sections: Section[];
}

const privacyContent: LegalContent = {
  kicker: { en: 'LEGAL', ar: 'قانوني' },
  title: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
  updated: { en: 'Last updated: August 2026', ar: 'آخر تحديث: أغسطس ٢٠٢٦' },
  intro: {
    en: 'HAFCO — Big Movers ("HAFCO", "we", "us") operates the "Hafco Driver Portal" mobile application and this website. This policy explains what information we collect, how we use it, and the choices you have. We keep data collection to the minimum required to operate our services.',
    ar: 'تعمل شركة هافكو — للنقل الثقيل («هافكو»، «نحن») على تشغيل تطبيق «بوابة سائق هافكو» (Hafco Driver Portal) وهذا الموقع. توضح هذه السياسة المعلومات التي نجمعها، وكيفية استخدامها، والخيارات المتاحة لك. نحصر جمع البيانات في الحد الأدنى اللازم لتشغيل خدماتنا.',
  },
  sections: [
    {
      title: { en: '1. App, Developer & Legal Entity', ar: '١. التطبيق والمطوّر والكيان القانوني' },
      body: {
        en: [
          'This policy applies to the "Hafco Driver Portal" mobile application published on Google Play, and to the HAFCO — Big Movers website.',
          'App title on Google Play: Hafco Driver Portal.',
          'Developer name on Google Play: HAFCO.',
          'Legal entity: شركة هادي سعيد فزعان القحطاني (Hadi Saeed Fazzaan Al-Qahtani), a heavy transport and logistics company based in Dammam, Eastern Province, Saudi Arabia, operating under the HAFCO — Big Movers brand and serving clients across the Kingdom since 1984.',
          'For any privacy question or request, contact us at info@hafcobigmover.com or call 0535557874.',
        ],
        ar: [
          'تنطبق هذه السياسة على تطبيق «بوابة سائق هافكو» (Hafco Driver Portal) المنشور على متجر Google Play، وعلى موقع هافكو — للنقل الثقيل.',
          'اسم التطبيق على متجر Google Play: Hafco Driver Portal (بوابة سائق هافكو).',
          'اسم المطوّر على متجر Google Play: HAFCO (هافكو).',
          'الكيان القانوني: شركة هادي سعيد فزعان القحطاني، شركة نقل ثقيل ولوجستيات مقرها الدمام، المنطقة الشرقية، المملكة العربية السعودية، تعمل تحت اسم «هافكو — للنقل الثقيل» وتخدم عملاءها في أنحاء المملكة منذ عام ١٩٨٤.',
          'لأي استفسار أو طلب متعلق بالخصوصية، تواصلوا معنا عبر info@hafcobigmover.com أو على الرقم ٠٥٣٥٥٥٧٨٧٤.',
        ],
      },
    },
    {
      title: { en: '2. Information We Collect', ar: '٢. المعلومات التي نجمعها' },
      body: {
        en: [
          'Contact details you provide voluntarily through our contact or quote forms: name, email address, phone number, and your message.',
          'We do not require user accounts, and we do not collect precise location, contacts, photos, or advertising identifiers.',
          'Anti-abuse verification: our forms are protected by hCaptcha, which may process limited technical data (such as IP address and browser information) to verify that submissions come from humans.',
          'Local preferences: we store your language choice (English or Arabic) in your browser\'s local storage so the site remembers it on your next visit.',
        ],
        ar: [
          'بيانات التواصل التي تقدمونها طوعاً عبر نماذج التواصل أو طلب عرض السعر: الاسم، البريد الإلكتروني، رقم الهاتف، ونص الرسالة.',
          'لا نطلب إنشاء حسابات مستخدمين، ولا نجمع الموقع الجغرافي الدقيق أو جهات الاتصال أو الصور أو معرّفات الإعلانات.',
          'التحقق من مكافحة الإساءة: نماذجنا محمية بخدمة hCaptcha، التي قد تعالج بيانات تقنية محدودة (مثل عنوان IP ومعلومات المتصفح) للتحقق من أن الإرسالات تأتي من أشخاص حقيقيين.',
          'التفضيلات المحلية: نخزّن اختياركم للغة (الإنجليزية أو العربية) في متصفحكم ليتمكن الموقع من تذكرها في الزيارة القادمة.',
        ],
      },
    },
    {
      title: { en: '3. How We Use Information', ar: '٣. كيف نستخدم المعلومات' },
      body: {
        en: [
          'To respond to your inquiries and prepare quotations.',
          'To contact you by phone or email regarding your request.',
          'To protect the website from spam and abuse.',
          'We do not sell or rent your personal information to anyone.',
        ],
        ar: [
          'للرد على استفساراتكم وإعداد عروض الأسعار.',
          'للتواصل معكم عبر الهاتف أو البريد الإلكتروني بخصوص طلبكم.',
          'لحماية الموقع من الرسائل المزعجة وسوء الاستخدام.',
          'لا نبيع بياناتكم الشخصية ولا نؤجرها لأي طرف آخر.',
        ],
      },
    },
    {
      title: { en: '4. Third-Party Services', ar: '٤. خدمات الطرف الثالث' },
      body: {
        en: [
          'Cloud infrastructure and email delivery: form submissions are processed and routed to our company email through our secure cloud backend.',
          'hCaptcha: used to prevent automated form submissions. hCaptcha\'s own privacy policy applies to its processing.',
          'Google Fonts: used to display typography on the website.',
          'These providers process data only as needed to deliver their services to us.',
        ],
        ar: [
          'البنية السحابية وإرسال البريد: تتم معالجة إرسالات النماذج وتوجيهها إلى بريد الشركة الإلكتروني عبر خدماتنا السحابية الآمنة.',
          'hCaptcha: تُستخدم لمنع الإرسالات الآلية، وتنطبق سياسة خصوصية hCaptcha الخاصة على معالجتها للبيانات.',
          'خطوط Google: تُستخدم لعرض تنسيق الخطوط في الموقع.',
          'يعالج هؤلاء المزودون البيانات فقط بالقدر اللازم لتقديم خدماتهم لنا.',
        ],
      },
    },
    {
      title: { en: '5. Data Sharing, Storage & Security', ar: '٥. مشاركة البيانات وتخزينها وأمنها' },
      body: {
        en: [
          'Your information is transmitted over encrypted connections (HTTPS/TLS) and stored on secured cloud servers. Access is restricted to authorized HAFCO staff.',
          'We retain contact-form correspondence only as long as needed to handle your inquiry and for our records, then delete or archive it in line with our internal retention practice.',
          'We share data only when required by law or to protect our rights, and with the service providers listed above strictly to operate the website.',
        ],
        ar: [
          'تُنقل معلوماتكم عبر اتصالات مشفّرة (HTTPS/TLS) وتُخزَّن على خوادم سحابية محمية، ويقتصر الوصول إليها على الموظفين المخوّلين في هافكو.',
          'نحتفظ بالمراسلات الواردة عبر نماذج التواصل للمدة اللازمة للرد على استفساركم ولأغراض سجلاتنا، ثم نحذفها أو نؤرشفها وفق سياسة الاحتفاظ الداخلية لدينا.',
          'لا نشارك البيانات إلا عند إلزام القانون بذلك، أو لحماية حقوقنا، أو مع مقدّمي الخدمات المذكورين أعلاه لتشغيل الموقع فقط.',
        ],
      },
    },
    {
      title: { en: '6. Your Choices & Data Deletion', ar: '٦. خياراتكم وحذف البيانات' },
      body: {
        en: [
          'Our website and apps do not use third-party advertising or tracking cookies.',
          'You may clear your language preference at any time by clearing your browser storage.',
          'To access, correct, or delete any personal data you have submitted to us, email info@hafcobigmover.com with your request and we will respond within a reasonable period.',
        ],
        ar: [
          'لا يستخدم موقعنا وتطبيقاتنا ملفات تعريف الإعلانات أو التتبع الخاصة بالطرف الثالث.',
          'يمكنكم مسح تفضيل اللغة في أي وقت عبر مسح بيانات المتصفح.',
          'للاطلاع على بياناتكم الشخصية المرسلة إلينا أو تصحيحها أو حذفها، أرسلوا طلبكم إلى info@hafcobigmover.com وسنستجيب خلال مدة معقولة.',
        ],
      },
    },
    {
      title: { en: '7. Children\'s Privacy', ar: '٧. خصوصية الأطفال' },
      body: {
        en: ['Our services are intended for businesses and adults. We do not knowingly collect personal information from children under 13.'],
        ar: ['خدماتنا موجهة للشركات والبالغين، ولا نجمع عن قصد أي معلومات شخصية من الأطفال دون سن ١٣ عاماً.'],
      },
    },
    {
      title: { en: '8. Changes to This Policy', ar: '٨. التعديلات على هذه السياسة' },
      body: {
        en: ['We may update this policy from time to time. The latest version will always be published on this page.'],
        ar: ['قد نقوم بتحديث هذه السياسة من وقت لآخر، وستكون النسخة الأحدث متاحة دائماً على هذه الصفحة.'],
      },
    },
    {
      title: { en: '9. Contact Us', ar: '٩. تواصلوا معنا' },
      body: {
        en: [
          'HAFCO — Big Movers, Dammam, Eastern Province, Saudi Arabia.',
          'Email: info@hafcobigmover.com · Phones: 0535557874 · 0560676302 · 0504826306 · Work line (24/7): 0599990239.',
        ],
        ar: [
          'هافكو — للنقل الثقيل، الدمام، المنطقة الشرقية، المملكة العربية السعودية.',
          'البريد الإلكتروني: info@hafcobigmover.com · الهواتف: ٠٥٣٥٥٥٧٨٧٤ · ٠٥٦٠٦٧٦٣٠٢ · ٠٥٠٤٨٢٦٣٠٦ · خط العمل (٢٤/٧): ٠٥٩٩٩٩٠٢٣٩.',
        ],
      },
    },
  ],
};

const termsContent: LegalContent = {
  kicker: { en: 'LEGAL', ar: 'قانوني' },
  title: { en: 'Terms of Service', ar: 'شروط الخدمة' },
  updated: { en: 'Last updated: August 2026', ar: 'آخر تحديث: أغسطس ٢٠٢٦' },
  intro: {
    en: 'By using this website or contacting HAFCO — Big Movers through it, you agree to the following terms.',
    ar: 'باستخدامكم هذا الموقع أو التواصل مع هافكو — للنقل الثقيل من خلاله، فإنكم توافقون على الشروط التالية.',
  },
  sections: [
    {
      title: { en: '1. Use of This Website', ar: '١. استخدام الموقع' },
      body: {
        en: [
          'This website is provided for information about HAFCO\'s transport and logistics services and for submitting inquiries.',
          'You agree not to misuse the website, attempt unauthorized access, or submit false or abusive content through our forms.',
        ],
        ar: [
          'يوفر هذا الموقع معلومات عن خدمات النقل واللوجستيات المقدمة من هافكو، ووسيلة لإرسال الاستفسارات.',
          'توافقون على عدم إساءة استخدام الموقع أو محاولة اختراقه أو إرسال محتوى مضلل أو مسيء عبر نماذجنا.',
        ],
      },
    },
    {
      title: { en: '2. Quotations & Bookings', ar: '٢. عروض الأسعار والحجوزات' },
      body: {
        en: [
          'Content submitted through forms is a request for quotation, not a confirmed booking. A service is agreed only through a signed order or contract with HAFCO.',
          'Prices, routes, and schedules are confirmed per contract and may vary with load, distance, and permits.',
        ],
        ar: [
          'البيانات المرسلة عبر النماذج تمثل طلب عرض سعر وليست حجزاً مؤكداً، ولا يتم الاتفاق على الخدمة إلا عبر أمر شراء أو عقد موقّع مع هافكو.',
          'تُعتمد الأسعار والمسارات والجداول الزمنية وفق العقد، وقد تختلف حسب الحمولة والمسافة والتصاريح.',
        ],
      },
    },
    {
      title: { en: '3. Intellectual Property', ar: '٣. الملكية الفكرية' },
      body: {
        en: ['All content on this website — including text, photographs, the HAFCO logo, and design — is the property of HAFCO and may not be reproduced without written permission.'],
        ar: ['جميع محتويات هذا الموقع — بما فيها النصوص والصور وشعار هافكو والتصميم — ملك لهافكو ولا يجوز إعادة إنتاجها دون إذن كتابي.'],
      },
    },
    {
      title: { en: '4. Limitation of Liability', ar: '٤. حدود المسؤولية' },
      body: {
        en: ['While we strive for accuracy, the website is provided "as is" without warranties. Liability for transport services is governed exclusively by the applicable contract of carriage.'],
        ar: ['نسعى دائماً إلى الدقة، إلا أن الموقع يُقدَّم «كما هو» دون ضمانات، وتقتصر مسؤولية خدمات النقل على ما هو منصوص عليه في عقد النقل المعمول به.'],
      },
    },
    {
      title: { en: '5. Governing Law', ar: '٥. القانون المعمول به' },
      body: {
        en: ['These terms are governed by the laws of the Kingdom of Saudi Arabia. Any dispute is subject to the competent courts in the Eastern Province.'],
        ar: ['تخضع هذه الشروط لأنظمة المملكة العربية السعودية، وتختص المحاكم المختصة في المنطقة الشرقية بالنظر في أي نزاع.'],
      },
    },
    {
      title: { en: '6. Contact', ar: '٦. التواصل' },
      body: {
        en: [
          'For questions about these terms, contact info@hafcobigmover.com or call 0535557874.',
        ],
        ar: [
          'للاستفسار عن هذه الشروط، تواصلوا معنا على info@hafcobigmover.com أو على الرقم ٠٥٣٥٥٥٧٨٧٤.',
        ],
      },
    },
  ],
};

interface LegalPageProps {
  kind: 'privacy' | 'terms';
}

const LegalPage = ({ kind }: LegalPageProps) => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const content = kind === 'privacy' ? privacyContent : termsContent;
  const serif = isAr ? "'HafcoDigits', 'Amiri', serif" : "'HafcoDigits', 'Playfair Display', serif";

  return (
    <PageTransition>
      {/* Page hero band */}
      <div className="relative bg-primary text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.10] pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--gold)) 0 1px, transparent 1px 14px)' }}
        />
        <div className="container mx-auto px-4 pt-32 pb-14 relative z-10">
          <div className="flex items-center gap-3 text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
            <ShieldCheck className="h-4 w-4" />
            <span style={{ fontFamily: serif }}>
              {isAr ? 'هافكو · للنقل الثقيل' : 'HAFCO · BIG MOVERS'}
            </span>
          </div>
          <h1 className="font-serif-display text-4xl md:text-5xl font-bold" style={{ fontFamily: serif }}>
            {isAr ? content.title.ar : content.title.en}
          </h1>
          <p className="mt-3 text-primary-foreground/70 text-sm" style={{ fontFamily: serif }}>
            {isAr ? content.updated.ar : content.updated.en}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="bg-background">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <p className="text-[15px] leading-relaxed text-foreground/85 border-s-4 border-gold ps-5 mb-10 italic" style={{ fontFamily: serif }}>
            {isAr ? content.intro.ar : content.intro.en}
          </p>

          <div className="space-y-10">
            {content.sections.map((section) => (
              <section key={section.title.en}>
                <h2 className="text-xl font-bold text-primary mb-3 font-serif-display" style={{ fontFamily: serif }}>
                  {isAr ? section.title.ar : section.title.en}
                </h2>
                <div className="space-y-3">
                  {(isAr ? section.body.ar : section.body.en).map((para, i) => (
                    <p key={i} className="text-[15px] leading-relaxed text-foreground/80" style={{ fontFamily: serif }}>
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Contact card */}
          <div className="mt-12 rounded-sm border-2 border-gold/50 bg-primary/5 p-6">
            <h2 className="text-lg font-bold text-primary mb-4 font-serif-display">
              {isAr ? 'استفسارات الخصوصية' : 'Privacy Inquiries'}
            </h2>
            <ul className="space-y-3 text-[15px] text-foreground/85" style={{ fontFamily: serif }}>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <a href="mailto:info@hafcobigmover.com" className="hover:text-gold transition-colors">
                  info@hafcobigmover.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <a href={phoneHref('0535557874')} className="font-phone hover:text-gold transition-colors">
                  {formatPhone('0535557874')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-1" />
                <span>{isAr ? 'الدمام، المنطقة الشرقية، المملكة العربية السعودية' : 'Dammam, Eastern Province, Saudi Arabia'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default LegalPage;
