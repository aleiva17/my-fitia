import { ReactElement } from "react";
import { FitiaLogo } from "@/assets/FitiaLogo.tsx";
import { MyFitiaTextLogo } from "@/assets/MyFitiaTextLogo.tsx";

export const SidebarLogo = (): ReactElement => {
  return (
    <div className="flex items-center">
      <div className="flex justify-center items-center min-w-20">
        <FitiaLogo className="h-auto w-7 text-white"/>
      </div>
      <MyFitiaTextLogo className="text-white h-9 relative top-1 w-auto"/>
    </div>
  );
};