import { Typography, TypographyProps } from '@mui/material';
import { FC } from 'react';

// Header
export const H1: FC<TypographyProps> = ({ children, ...props }) => (
    <Typography variant="h1" {...props}>{children}</Typography>
);
export const H2: FC<TypographyProps> = ({ children, ...props }) => (
    <Typography variant="h2" {...props}>{children}</Typography>
);
export const H3: FC<TypographyProps> = ({ children, ...props }) => (
    <Typography variant="h3" {...props}>{children}</Typography>
);
export const H4: FC<TypographyProps> = ({ children, ...props }) => (
    <Typography variant="h4" {...props}>{children}</Typography>
);
export const H5: FC<TypographyProps> = ({ children, ...props }) => (
    <Typography variant="h5" {...props}>{children}</Typography>
);
export const H6: FC<TypographyProps> = ({ children, ...props }) => (
    <Typography variant="h6" {...props}>{children}</Typography>
);

// Subtitle
export const Subtitle1: FC<TypographyProps> = ({ children, ...props }) => (
    <Typography variant="subtitle1" {...props}>{children}</Typography>
);
export const Subtitle2: FC<TypographyProps> = ({ children, ...props }) => (
    <Typography variant="subtitle2" {...props}>{children}</Typography>
);

// Body
export const Body1: FC<TypographyProps> = ({ children, ...props }) => (
    <Typography variant="body1" {...props}>{children}</Typography>
);
export const Body2: FC<TypographyProps> = ({ children, ...props }) => (
    <Typography variant="body2" {...props}>{children}</Typography>
);

// Button
export const Button: FC<TypographyProps> = ({ children, ...props }) => (
    <Typography variant="button" {...props}>{children}</Typography>
);

// Caption
export const Caption: FC<TypographyProps> = ({ children, ...props }) => (
    <Typography variant="caption" {...props}>{children}</Typography>
);

// Overline
export const Overline: FC<TypographyProps> = ({ children, ...props }) => (
    <Typography variant="overline" {...props}>{children}</Typography>
);
