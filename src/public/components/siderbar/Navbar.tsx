import { ReactElement } from "react";
import { NavItem } from "@/public/components/siderbar/NavItem.tsx";
import { navLinks } from "@/public/data/navLinks.tsx";
import { useTranslation } from "react-i18next";


export const Navbar = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <nav className="w-full">
      <ul className="flex flex-col items-center">
        {navLinks.map(link =>
          <li key={link.translationId} className="w-full">
            <NavItem to={link.to} name={t(link.translationId)} icon={link.icon}/>
          </li>
        )}
      </ul>
    </nav>
  );
};