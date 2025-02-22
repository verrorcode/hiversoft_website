// app/page.tsx or app/beliefs/page.tsx
import BeliefsContent from './BeliefsContent';

export default function Page() {
  return (
    <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
      <BeliefsContent />
    </div>
  );
}