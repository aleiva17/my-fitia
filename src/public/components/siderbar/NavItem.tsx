import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  to: string;
  name: string;
  icon: ReactElement
}

export const NavItem = ({ to, name, icon }: Props): ReactElement => {
  return (
    <NavLink to={to} className="flex items-center gap-3 py-2 px-4 min-w-20">
      {({isActive}) => (
        <div className={`relative flex items-center ${isActive ? "bg-primary" : "hover:bg-black/50"} text-white w-full rounded-xl overflow-hidden p-2`}>
          <div className="ml-0.5 w-7 h-7">
            {icon}
          </div>
          <span className="absolute left-14 font-medium whitespace-nowrap">{name}</span>
        </div>
      )}
    </NavLink>
  );
};