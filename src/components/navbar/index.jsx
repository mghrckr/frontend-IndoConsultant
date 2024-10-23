/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import logo from "../../assets/images/indo-consultant.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { HiChevronDown } from "react-icons/hi2";

const serviceList = [
  { title: "Pemeriksaan & Penilaian TKDN Ketenagalistrikan", href: "/pemeriksaan-dan-penilaian-tingkat-komponen-dalam-negeri" },
  { title: "Sistem Manajemen Keselamatan Ketenagakerjaan", href: "/pemeriksaan-dan-penilaian-penerapan-sistem-manajemen-keselamatan-ketenagalistrikan" },
  { title: "Pengelolaan Lingkungan Ketenagalistrikan", href: "/pengelolaan-lingkungan-ketenagalistrikan" },
  { title: "Greenhouse Gas (GHG)", href: "/green-house-gas" },
  { title: "Survey and Mapping", href: "/pemeriksaan-dan-penilaian-kompensasi-tanah" },
];

const menus = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About Us", href: "/about-us" },
  {
    id: 3,
    name: "Services",
    href: "/services",
    hasDropdown: true,
  },
  { id: 4, name: "Portofolio", href: "/portofolio" },
  {id: 1, name: "News", href: "/news" },
  { id: 5, name: "Team", href: "/team" },
  { id: 6, name: "Contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Disclosure
        as="nav"
        className={`w-full transition-all duration-500 ${isScrolled ? "bg-white" : "bg-transparent"}`}
      >
        {({ open }) => (
          <div className="px-4 py-4 md:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo Section */}
              <div className="flex lg:flex-1">
                <a href="/" className="flex items-center p-1 transition-transform transform hover:scale-105">
                  <span className="sr-only">Logo Indo Consultant</span>
                  <img alt="Logo Indo Consultant" src={logo} className="w-40 h-40 object-contain rounded-lg " />
                </a>
              </div>
              {/* Navigation Links for Desktop */}
              <div className="hidden xl:flex lg:gap-x-12">
                <NavigationMenu>
                  <NavigationMenuList>
                    {menus.map((menu) => (
                      <NavigationMenuItem key={menu.id}>
                        <Link to={menu.href}>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <NavigationMenuTrigger>
                              {menu.name}
                            </NavigationMenuTrigger>
                          </NavigationMenuLink>
                        </Link>
                        {menu.hasDropdown && (
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 bg-white">
                              {serviceList.map((service) => (
                                <ListItem key={service.title} title={service.title} href={service.href} />
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <div className="flex xl:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button className="rounded flex bg-[#265093]">
                      <Bars3Icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    {/* Logo */}
                    <div className="py-5 px-2">
                      <a href="/">
                        <span className="sr-only">Logo Indo Consultant</span>
                        <img alt="Logo Indo Consultant" src={logo} className="h-auto w-auto object-contain" />
                      </a>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-3">
                      {menus.map((item) => (
                        <div key={item.id}>
                          <a href={item.href} className="block py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition duration-300">
                            {item.name}
                          </a>
                          {item.hasDropdown && (
                            <div className="pl-4">
                              {serviceList.map((service) => (
                                <a key={service.title} href={service.href} className="block py-1 text-gray-600 hover:bg-gray-100 rounded-lg transition duration-300">
                                  {service.title}
                                </a>
                              ))}
                            </div>
                          )}
                          <div className="h-px w-full bg-gray-300" />
                        </div>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        )}
      </Disclosure>
    </header>
  );
};

function ListItem({ title, href }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100" href={href}>
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

export default Header;
