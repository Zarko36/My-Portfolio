"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const Navigation = () => {
    return (
        <Navbar>
          <NavbarBrand>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Projects
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Skills
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Experience
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Education
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Contact
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            
          </NavbarContent>
        </Navbar>
      );
  };
  
  export default Navigation;
  
