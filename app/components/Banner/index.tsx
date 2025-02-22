// app/page.tsx or app/banner/page.tsx
import BannerContent from './BannerContent';

export default function Page() {
  return (
    <div className='mx-auto max-w-7xl mt-[120px] sm:py-10 px-6 lg:px-8' id='banner'>
      <BannerContent />
    </div>
  );
}