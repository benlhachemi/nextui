'use client';

import { NextUIProvider as NextUI } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function NextUIProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider defaultTheme="dark" enableSystem>
      <NextUI>
        {children}
      </NextUI>
    </NextThemesProvider>
  )
}
