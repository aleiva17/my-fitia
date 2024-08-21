import { ReactElement } from "react";
import { Sidebar } from "@/public/components/siderbar/Sidebar.tsx";

type Props = {
  children: ReactElement;
}

export const BaseLayout = ({ children }: Props): ReactElement => {
  return (
    <div className="grid grid-cols-[auto_1fr] bg-[url(/wallpapers/light.svg)] dark:bg-[url(/wallpapers/dark.svg)] min-h-screen bg-no-repeat bg-cover h-full gap-4 p-4">
      <Sidebar />
      {children}
    </div>
  );
}