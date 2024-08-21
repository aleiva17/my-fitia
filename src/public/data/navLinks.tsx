import { ReactElement } from "react";
import { MyFitiaRoutes } from "@/router/data/MyFitiaRoutes.ts";
import { HomeIcon } from "@/assets/icons/HomeIcon.tsx";
import { DashboardIcon } from "@/assets/icons/DashboardIcon.tsx";
import { CalendarIcon } from "@/assets/icons/CalendarIcon.tsx";
import { TeamIcon } from "@/assets/icons/TeamIcon.tsx";
import { TasksIcon } from "@/assets/icons/TasksIcon.tsx";
import { BugIcon } from "@/assets/icons/BugIcon.tsx";
import { NotesIcon } from "@/assets/icons/NotesIcon.tsx";
import { InvoiceIcon } from "@/assets/icons/InvoiceIcon.tsx";
import { HeartIcon } from "@/assets/icons/HeartIcon.tsx";
import { SettingsIcon } from "@/assets/icons/SettingsIcon.tsx";

type NavLink = {
  readonly to: MyFitiaRoutes;
  readonly translationId: string;
  readonly icon: ReactElement
}

export const navLinks: ReadonlyArray<NavLink> = [
  {
    to: MyFitiaRoutes.HOME,
    translationId: 'sidebar.navLinks.home',
    icon: <HomeIcon />
  },
  {
    to: MyFitiaRoutes.DASHBOARD,
    translationId: 'sidebar.navLinks.dashboard',
    icon: <DashboardIcon />
  },
  {
    to: MyFitiaRoutes.CALENDAR,
    translationId: 'sidebar.navLinks.calendar',
    icon: <CalendarIcon />
  },
  {
    to: MyFitiaRoutes.MY_TEAM,
    translationId: 'sidebar.navLinks.myTeam',
    icon: <TeamIcon />
  },
  {
    to: MyFitiaRoutes.TASKS,
    translationId: 'sidebar.navLinks.tasks',
    icon: <TasksIcon />
  },
  {
    to: MyFitiaRoutes.BUGS,
    translationId: 'sidebar.navLinks.bugs',
    icon: <BugIcon />
  },
  {
    to: MyFitiaRoutes.NOTES,
    translationId: 'sidebar.navLinks.notes',
    icon: <NotesIcon />
  },
  {
    to: MyFitiaRoutes.INVOICES,
    translationId: 'sidebar.navLinks.invoices',
    icon: <InvoiceIcon />
  },
  {
    to: MyFitiaRoutes.BENEFITS,
    translationId: 'sidebar.navLinks.benefits',
    icon: <HeartIcon />
  },
  {
    to: MyFitiaRoutes.SETTINGS,
    translationId: 'sidebar.navLinks.settings',
    icon: <SettingsIcon />
  }
] as const;
