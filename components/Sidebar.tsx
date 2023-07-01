import Card from "./Card";
import logo from "@/assets/images/logo.png";
import SidebarLink from "./SidebarLink";
import { SidebarLinkProps } from "@/global";

const links : SidebarLinkProps[] = [
  { label: "Home", icon: "Grid", link: "/home" },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar",
  },
  { label: "Profile", icon: "User", link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      {links.map((link,index) => (
        <SidebarLink link={link} key={index} />
      ))}
    </Card>
  );
};

export default Sidebar;