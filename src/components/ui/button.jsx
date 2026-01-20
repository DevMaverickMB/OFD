/* eslint-disable react-refresh/only-export-components */
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-extrabold uppercase tracking-wide',
    'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primary-color)] focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ].join(' '),
  {
    variants: {
      variant: {
        default:
          'bg-[color:var(--primary-color)] text-[color:var(--white)] hover:bg-[color:var(--secondary-color)]',
        outline:
          'border border-[color:var(--gray-300)] bg-transparent text-[color:var(--secondary-color)] hover:border-[color:var(--secondary-color)]',
        ghost:
          'bg-transparent text-[color:var(--secondary-color)] hover:bg-[color:var(--gray-100)]',
        link:
          'bg-transparent p-0 text-[color:var(--primary-color)] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-6',
        sm: 'h-9 rounded-md px-4 text-xs',
        lg: 'h-12 rounded-md px-8',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
