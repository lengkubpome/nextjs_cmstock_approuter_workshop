"use client"
import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react'
import theme from './theme';

type Props = { children: React.ReactNode };


export default function ThemeRegistry({ children }: Props) {
    // const theme = createTheme({
    //     spacing: 8
    // });
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}