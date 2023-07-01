/* import { Settings, User, Grid, Calendar } from "react-feather";
const icons = { Settings, User, Grid, Calendar }; */

//icon: keyof typeof icons;


import { User } from "@prisma/client";

type IconType = "Settings" | "User" | "Grid" | "Calendar";
type LabelType = "Settings" | "Profile" | "Home" | "Calendar";
type LinkType = `/${Lowercase<LabelType>}`

type SidebarLinkProps = {
    icon: IconType
    label: LabelType
    link: LinkType;
}

type RegisterUserType = Omit<User,'createdAt'|'updatedAt'|'id'>;
type LoginUserType = Pick<User,'email'|'password'>;
type JwtUserType = Pick<User,'id'|'email'>;
