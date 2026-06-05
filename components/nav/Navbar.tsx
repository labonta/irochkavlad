'use client'

import { usePathname } from "next/navigation";
import { Clock } from "@deemlol/next-icons";
import { Book } from "@deemlol/next-icons";
import { Feather } from "@deemlol/next-icons";
import Link from "next/link";
import clsx from "clsx";


const NavLink = ({href, Icon, text} : {href: string, Icon: React.ElementType, text: string}) => {
    const pathname = usePathname();
    return (
        <li>
            <Link href={href} className={clsx(
                "flex flex-row items-end gap-1 text-sm font-semibold hover:text-mauve-500",
                pathname == href ? "text-mauve-500" : "text-mauve-700",

            )}>
                <Icon/>
                <p className={clsx(
                    pathname == href ? "border-b border-mauve-500" : "hover:border-b hover:border-mauve-500",
                )}>{text}</p>
            </Link>
        </li>
    )
}


const Navbar = () => {
    return (
        <nav className={"w-full h-full flex flex-row items-center"}>
            <ul className="flex flex-row gap-2 items-center">
                <NavLink href="/meet" Icon={Clock} text="Таймер" />
                <NavLink href="/books" Icon={Book} text="Книги" />
                <NavLink href="/creatives" Icon={Feather} text="Творчество" />
            </ul>
        </nav>
    )
}

export default Navbar