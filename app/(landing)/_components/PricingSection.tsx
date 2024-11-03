import { Check } from '@/components/icons';
import BackdropGradient from '@/components/global/BackdropGradient';
import GradientText from '@/components/global/GradientText';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PricingSection() {
  return (
    <div className='flex w-full flex-col items-center gap-3 pt-20' id='pricing'>
      <BackdropGradient className='flex h-full w-8/12 flex-col items-center opacity-40'>
        <GradientText
          className='text-center text-4xl font-semibold'
          element='H2'
        >
          Pricing Plans That Fit Your Right
        </GradientText>
        <p className='text-left text-sm text-muted-foreground md:text-center'>
          Grouple is a vibrant online community platform that empowers people to
          connect, <br className='hidden md:block' />
          collaborate, and cultivate meaningful relationships
        </p>
      </BackdropGradient>
      <Card className='bg-themeBlack border-themeGray mt-10 w-full p-7 md:w-auto'>
        <div className='flex flex-col gap-2'>
          <CardTitle>99/m</CardTitle>
          <CardDescription className='text-[#B4B0AE]'>
            Great if you’re just getting started
          </CardDescription>
          <Link href='#' className='mt-3 w-full'>
            <Button
              variant='default'
              className='w-full rounded-2xl bg-[#333337] text-white hover:text-[#333337]'
            >
              Start for free
            </Button>
          </Link>
        </div>
        <div className='mt-5 flex flex-col gap-2 text-[#B4B0AE]'>
          <p>Features</p>
          <span className='mt-3 flex items-center gap-2'>
            <Check />
            Feature number 1
          </span>
          <span className='flex items-center gap-2'>
            <Check />
            Feature number 1
          </span>
          <span className='flex items-center gap-2'>
            <Check />
            Feature number 1
          </span>
          <span className='flex items-center gap-2'>
            <Check />
            Feature number 1
          </span>
          <span className='flex items-center gap-2'>
            <Check />
            Feature number 1
          </span>
        </div>
      </Card>
    </div>
  );
}
