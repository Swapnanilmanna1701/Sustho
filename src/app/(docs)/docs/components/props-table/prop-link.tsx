import Link, { LinkProps } from 'next/link';
import React from 'react';
import { cn } from '@/utils/functions/cn';

interface PropLinkProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
  target?: string | null;
}

export const PropLink = ({ className, href, target, ...props }: PropLinkProps) => {
  return (
    <Link
      {...props}
      href={href}
      className={cn('underline', className)}
      target={target === null ? undefined : '_blank'}
    />
  );
};
