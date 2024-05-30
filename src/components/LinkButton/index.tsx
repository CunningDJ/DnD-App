"use client";

import Link from "next/link";
import { FC, PropsWithChildren } from "react";

import { Button, ButtonTypeMap } from '@mui/material';

interface LinkButtonProps {
  href: string;
  variant?: ButtonTypeMap['props']['variant'];
}

const LinkButton: FC<PropsWithChildren<LinkButtonProps>> = ({
  children,
  href,
  variant = "outlined"
}) => {
  return (
    <Link href={href}>
      <Button variant={variant}>
        {children}
      </Button>
    </Link>
  );
}

export default LinkButton;