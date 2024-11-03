'use client';

import { useNavigation } from '@/hooks/useNavigation';
import { Card, CardContent } from '@/components/ui/card';
import { GROUPLE_CONSTANTS } from '@/constans';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type MenuProps = {
  orientation: 'desktop' | 'mobile';
};

export default function LandingPageMenu({ orientation }: MenuProps) {
  const { section, onSetSection } = useNavigation();

  switch (orientation) {
    case 'desktop':
      return (
        <Card className='hidden rounded-2xl p-2 lg:flex'>
          <CardContent className='flex gap-2 p-0'>
            {GROUPLE_CONSTANTS.landingPageMenu.map(menuItem => (
              <Link
                key={menuItem.id}
                href={menuItem.path}
                {...(menuItem.section && {
                  onClick: () => onSetSection(menuItem.path)
                })}
                className={cn(
                  'flex items-center gap-2 rounded-xl px-4 py-2',
                  section == menuItem.path
                    ? 'text-themeBlack border-[#27272A] bg-white'
                    : ''
                )}
              >
                {section == menuItem.path && menuItem.icon}
                {menuItem.label}
              </Link>
            ))}
          </CardContent>
        </Card>
      );
    case 'mobile':
      return (
        <div className='mt-10 flex flex-col'>
          {GROUPLE_CONSTANTS.landingPageMenu.map(menuItem => (
            <Link
              key={menuItem.id}
              href={menuItem.path}
              {...(menuItem.section && {
                onClick: () => onSetSection(menuItem.path)
              })}
              className={cn(
                'flex items-center gap-2 rounded-xl px-4 py-2',
                section == menuItem.path ? 'bg-themeGray border-[#27272A]' : ''
              )}
            >
              {menuItem.icon}
              {menuItem.label}
            </Link>
          ))}
        </div>
      );
    default:
      return <></>;
  }
}
