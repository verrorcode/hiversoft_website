// app/page.tsx or app/faq/page.tsx
import FAQContent from './FAQContent';

export default function Page() {
  return (
    <div id="faq-section" className='mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg'>
      <FAQContent />
    </div>
  );
}