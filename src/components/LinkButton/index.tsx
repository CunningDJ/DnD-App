'use client';

import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import { Button } from '@mui/material';

interface LinkButtonProps {
  href: string;
}

const LinkButton: FC<PropsWithChildren<LinkButtonProps>> = ({
  children,
  href
}) => {
  return (
    <Link href={href}>
      <Button>
        {children}
      </Button>
    </Link>
  );
}

export default LinkButton;