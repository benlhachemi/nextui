'use client'

import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { Moon, Sun1 as Sun } from 'iconsax-react'
import { useEffect, useState } from 'react'
import Logo from './logo'

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <NextUINavbar maxWidth="full">
      <NavbarBrand className="gap-2">
        <Logo />
        <p className="font-bold text-inherit uppercase">Namerr</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        {/* <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Log In
          </Button>
        </NavbarItem> */}
        <NavbarItem>
          <Button
            isIconOnly
            endContent={theme === 'dark' ? <Sun variant="Bulk" /> : <Moon variant="Bulk" />}
            type="button"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  )
}
