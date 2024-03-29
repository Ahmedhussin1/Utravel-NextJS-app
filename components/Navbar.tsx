"use client"
import Link from "next/link"
import Image from "next/image"
import logo from '@/public/hilink-logo.svg'
import buttonLogo from '@/public/user.svg'
import menu from '@/public/menu.svg'
import { NAV_LINKS } from "@/constant"
import Button from "./Button"
import { useState } from "react"

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href='/'>
            <Image src={logo} alt="logo" height={29} width={74}/>
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link)=>(
              <Link 
              href={link.href} 
              key={link.key} 
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                {link.label}
              </Link>
            ))}
        </ul>
        <div className="lg:flexCenter hidden">
            <Button
              type="button"
              title="login"
              icon={buttonLogo}
              variant="btn_dark_green"
            />
        </div>
       <div className="flex flex-col gap-5">
         <Image  
          className="inline-block cursor-pointer lg:hidden" 
          src={menu} height={32} width={32} alt="menu"
          onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <ul className="h-full gap-12">
            {NAV_LINKS.map((link)=>(
                <Link 
                href={link.href} 
                key={link.key} 
                className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label}
                </Link>
              ))}
          </ul>
          )}
       </div>
    </nav>
  )
}

export default Navbar