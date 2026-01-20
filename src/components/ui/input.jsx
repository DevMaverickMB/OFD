import * as React from 'react';

import { cn } from '../../lib/utils';

const Input = React.forwardRef(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      [
        'flex h-11 w-full rounded-md border border-[color:var(--gray-200)] bg-[color:var(--gray-100)] px-4 py-2 text-sm',
        'text-[color:var(--secondary-color)] placeholder:text-[color:var(--gray-700)]',
        'transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primary-color)] focus-visible:ring-offset-2 focus-visible:bg-[color:var(--white)]',
      ].join(' '),
      className,
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = 'Input';

export { Input };
