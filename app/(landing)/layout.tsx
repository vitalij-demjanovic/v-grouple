import LandingPageNavbar from '@/app/(landing)/_components/Navbar';

export default function LandingPage({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='container relative flex flex-col'>
      <LandingPageNavbar />
      {children}
    </div>
  );
}
