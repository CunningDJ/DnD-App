'use client';

import { Button } from '@mui/material';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';


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