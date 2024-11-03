import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

type GlassSheetProps = {
  children: React.ReactNode;
  trigger: React.ReactNode;
  className?: string;
  triggerClass?: string;
};

const GlassSheet = ({
  children,
  trigger,
  className,
  triggerClass
}: GlassSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger className={cn(triggerClass)} asChild>
        {trigger}
      </SheetTrigger>
      <SheetContent
        className={cn(
          'backdrop--blur__safari bg-themeGray border-themeGray bg-opacity-20 bg-clip-padding backdrop-blur-3xl backdrop-filter',
          className
        )}
      >
        {children}
      </SheetContent>
    </Sheet>
  );
};

export default GlassSheet;
