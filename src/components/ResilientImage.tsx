import { useState } from 'react';
import { Monitor } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
  containerClassName?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  fallbackTitle,
  className,
  containerClassName,
  loading = 'lazy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'flex flex-col items-center justify-center gap-3 bg-graphite-gradient p-6 text-center text-secondary-foreground',
          containerClassName,
        )}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-graphite bg-surface-graphite-soft text-primary">
          <Monitor className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="font-display text-sm font-semibold text-secondary-foreground">
          {fallbackTitle}
        </p>
      </div>
    );
  }

  return (
    <div className={cn('overflow-hidden bg-surface-subtle', containerClassName)}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={cn('h-full w-full object-cover', className)}
      />
    </div>
  );
}
