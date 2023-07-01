"use client";
import Link from "next/link";
import { Settings, User, Grid, Calendar } from "react-feather";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { SidebarLinkProps } from "@/global";

const icons = { Settings, User, Grid, Calendar };


const SidebarLink = ({ link }: {link: SidebarLinkProps}) => {
    //client component only hook
    const pathname = usePathname();
    let isActive = false;

    if (pathname === link.link) {
        isActive = true;
    }


    //we have to use string as prop, cant pass component as prop
    //since one is a servercomponent and this is a clientcomponent.
    //u cant serialize components
    /*
        -inbetween a server and a client component there is a big
        red line(the network)
        -and you cant pass things that arent serializable
        -a component is essentially a function, and the reason you cannot
        serialize it is because if u stringify it u lose references etc.
    */
    const Icon = icons[link.icon];
    return (
        <Link href={link.link} className="w-full flex justify-center items-center">
            <Icon
                size={40}
                className={clsx(
                    "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
                    isActive && "stroke-violet-600"
                )}
            />
        </Link>
    );
};

export default SidebarLink;