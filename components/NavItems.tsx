"use client"//we should mention it when we use a hook in the web application !!
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const navItems = [
    {label: 'Home', href:"/"},
    {label: 'Companions', href:"/companions"},
    {label: 'Profile', href:"/my-journey"},
]

const NavItems = () => {

    const pathname = usePathname();
  return (
    <nav className="flex items-center gap-6">
        {navItems.map(({label, href}) => (
            <Link 
                href={href} 
                key={label} 
                className={cn(pathname === href && 'text-primary font-semibold')} 
            >
                {label}
            </Link>
        ))}
    </nav>
  )
}

export default NavItems