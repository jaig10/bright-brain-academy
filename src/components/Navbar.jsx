"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import { AcmeLogo } from "./AcmeLogo";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["HOME", "ABOUT_US", "ADMISSIONS", "PROGRAMS", "GALLERY"];
  const submenuItems = {
    ABOUT_US: ["ABOUT US", "MISSION AND VISION"],
    ADMISSIONS: ["ADMISSIONS", "ADMISSION PROCESS"],
    PROGRAMS: ["PROGRAMS", "PLAY GROUP", "NURSERY", "KINDERGARDEN", "PREP"],
    GALLERY: ["GALLERY"],
  };
  const formatLinkText = (text) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <Navbar
      isBordered
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="py-3"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex w-[100%]">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex font-medium">
        <NavbarItem>
          <Link
            className="cursor-pointer hover:bg-[#FE5D37] py-2 px-3 hover:text-white text-black hover:underline hover:underline-offset-2 hover:rounded-xl"
            href="/"
          >
            HOME
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem className="cursor-pointer hover:bg-[#FE5D37] hover:text-white hover:p-2 hover:px-3 hover:rounded-xl hover:underline hover:underline-offset-2">
            <DropdownTrigger>ABOUT US</DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            <DropdownItem
              className="hover:!bg-[#FE5D37] hover:!text-white"
              href={`${formatLinkText("ABOUT US")}`}
              key="home"
            >
              ABOUT US
            </DropdownItem>
            <DropdownItem
              className="hover:!bg-[#FE5D37] hover:!text-white"
              href={`${formatLinkText("MISSION AND VISION")}`}
              key="home"
            >
              MIISION AND VISION
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem className="cursor-pointer hover:bg-[#FE5D37] hover:text-white hover:p-2 hover:px-3 hover:rounded-xl hover:underline hover:underline-offset-2">
            <DropdownTrigger>ADMISSIONS</DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            <DropdownItem
              className="hover:!bg-[#FE5D37] hover:!text-white"
              href={`${formatLinkText("ADMISSIONS")}`}
              key="home"
            >
              ADMISSION
            </DropdownItem>
            <DropdownItem
              className="hover:!bg-[#FE5D37] hover:!text-white"
              href={`${formatLinkText("ADMISSION PROCESS")}`}
              key="home"
            >
              ADMISSION PROCESS
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem className="cursor-pointer hover:bg-[#FE5D37] hover:text-white hover:p-2 hover:px-3 hover:rounded-xl hover:underline hover:underline-offset-2">
            <DropdownTrigger>PROGRAMS</DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            <DropdownItem
              className="hover:!bg-[#FE5D37] hover:!text-white"
              href={`${formatLinkText("PROGRAMS")}`}
              key="home"
            >
              PROGRAMS
            </DropdownItem>
            <DropdownItem
              className="hover:!bg-[#FE5D37] hover:!text-white"
              href={`${formatLinkText("PLAYGROUP")}`}
              key="home"
            >
              PLAY GROUP
            </DropdownItem>
            <DropdownItem
              className="hover:!bg-[#FE5D37] hover:!text-white"
              href={`${formatLinkText("NURDERY")}`}
              key="home"
            >
              NURSERY
            </DropdownItem>
            <DropdownItem
              className="hover:!bg-[#FE5D37] hover:!text-white"
              href={`${formatLinkText("KINDERGARDEN")}`}
              key="home"
            >
              KINDERGARDEN
            </DropdownItem>
            <DropdownItem
              className="hover:!bg-[#FE5D37] hover:!text-white"
              href={`${formatLinkText("PREP")}`}
              key="home"
            >
              PREP
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem className="cursor-pointer hover:bg-[#FE5D37] hover:text-white hover:p-2 hover:px-3 hover:rounded-xl hover:underline hover:underline-offset-2">
            <DropdownTrigger>GALLERY</DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            <DropdownItem
              className="hover:!bg-[#FE5D37] hover:!text-white"
              href={`${formatLinkText("GALLERY")}`}
              key="home"
            >
              GALLERY
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="relative">
          <Button
            className="bg-[#FE5D37] text-white rounded-full font-medium pr-8"
            as={Link}
            href={`#${formatLinkText("CONTACT US")}`}
          >
            CONTACT US
          </Button>
          <FaArrowRight className="absolute top-[30%] right-2 text-white" />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="mt-10">
        <Accordion>
          {menuItems.map((item, index) => (
            <AccordionItem key={`${item}-${index}`} title={item}>
              {item === "HOME" ? (
                <NavbarMenuItem key={`${item}`}>
                  <Link className="w-full text-black" href="/" size="lg">
                    {item}
                  </Link>
                </NavbarMenuItem>
              ) : (
                <div className="ml-5">
                  {submenuItems[item] &&
                    submenuItems[item].map((subItem, subIndex) => (
                      <NavbarMenuItem key={`${item}-${subIndex}`}>
                        <Link
                          className="hover:text-[#FE5D37] w-full text-black"
                          href={`/${formatLinkText(subItem)}`} // Format the link text for other items
                          size="lg"
                        >
                          {subItem}
                        </Link>
                      </NavbarMenuItem>
                    ))}
                </div>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </NavbarMenu>
    </Navbar>
  );
}
