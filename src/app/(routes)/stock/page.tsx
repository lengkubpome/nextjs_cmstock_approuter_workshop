"use client"
import { Box } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';

export default function Stock() {

    return (
        <Box >
            <Image
                src={"https://www.codemobiles.com/biz/images/cm_logo.svg?ref=10"}
                width={64}
                height={64}
                alt='logo'
            />
        </Box>
    );
}
