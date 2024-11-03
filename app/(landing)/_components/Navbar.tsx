import LandingPageMenu from '@/app/(landing)/_components/Menu';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logout } from '@/components/icons';
import GlassSheet from '@/components/global/GlassSheet';
import { MenuIcon } from 'lucide-react';

export default function LandingPageNavbar() {
  return (
    <div className='sticky top-0 z-50 flex w-full items-center justify-between py-5'>
      <p className='text-2xl font-bold'>V-Grouple.</p>
      <LandingPageMenu orientation='desktop' />
      <div className='flex gap-2'>
        <Link href='/sign-in'>
          <Button
            variant='outline'
            className='border-themGray hover:bg-themeGray flex gap-2 rounded-2xl'
          >
            <Logout />
            Login
          </Button>
        </Link>
        <GlassSheet
          triggerClass='lg:hidden'
          trigger={
            <Button variant='ghost' className='hover:bg-transparent'>
              <MenuIcon size={30} />
            </Button>
          }
        >
          <LandingPageMenu orientation='mobile' />
        </GlassSheet>
      </div>
    </div>
  );
}
