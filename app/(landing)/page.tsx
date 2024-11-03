import CallToAction from '@/app/(landing)/_components/CallToAction';
import DashboardSnippet from '@/app/(landing)/_components/DashboardSnippet';
import PricingSection from '@/app/(landing)/_components/PricingSection';

export default function Page() {
  return (
    <main className='flex flex-col gap-36 py-20 md:px-10'>
      <div>
        <CallToAction />
        <DashboardSnippet />
      </div>
      <PricingSection />
    </main>
  );
}
