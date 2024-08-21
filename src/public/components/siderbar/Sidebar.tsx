import { ReactElement, useState } from "react";
import { Navbar } from "@/public/components/siderbar/Navbar.tsx";
import { SidebarLogo } from "@/public/components/siderbar/SidebarLogo.tsx";
import { AvatarCard } from "@/public/components/siderbar/AvatarCard.tsx";


export const Sidebar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <aside className={`group flex flex-col justify-between ${isOpen ? "w-60" : "w-20"} transform-gpu transition-all bg-black bg-opacity-65 rounded-3xl drop-shadow-md duration-300 py-6 overflow-x-hidden`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <SidebarLogo />
      </button>
      <Navbar />
      <AvatarCard />
    </aside>
  );
}