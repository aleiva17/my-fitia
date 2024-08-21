import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { MyFitiaRoutes } from "@/router/data/MyFitiaRoutes.ts";
import { BaseLayout } from "@/shared/layouts/BaseLayout.tsx";
import { HomePage } from "../public/pages/HomePage.tsx";
import { DashboardPage } from "@/dashboard/pages/DashboardPage.tsx";
import { SettingsPage } from "@/settings/pages/SettingsPage.tsx";

export const AppRouter = (): ReactElement => {
  return (
    <BaseLayout>
      <Routes>
        <Route path={MyFitiaRoutes.HOME} element={<HomePage />} />
        <Route path={MyFitiaRoutes.DASHBOARD} element={<DashboardPage />} />
        <Route path={MyFitiaRoutes.SETTINGS} element={<SettingsPage />} />
      </Routes>
    </BaseLayout>
  );
}