'use client'
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar className="mt-0 sm:-mt-16">
      <NavbarContent>
        <NavbarBrand>
          <p className="font-bold text-inherit">João Victor</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            About me
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="#">
            My work
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Experience
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="success" href="#" variant="flat">
            Get in touch
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
