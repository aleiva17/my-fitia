import { ReactElement, useState } from "react";
import { Subtitle } from "@/shared/components/Subtitle.tsx";
import { useTranslation } from "react-i18next";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import clsx from 'clsx';


export const LanguageSwitcher = (): ReactElement => {
  const languages: ReadonlyArray<string> = ["English", "Español"];
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<string>(languages[(i18n.language === "en") ? 0 : 1]);

  const handleLanguageChange = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage === "English" ? "en" : "es");
    setLanguage(newLanguage);
  }

  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex items-center gap-2">
        <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"/>
        </svg>
        <Subtitle label={t("pages.settings.languageSwitcher.title")}/>
      </div>
      <Listbox value={language} onChange={handleLanguageChange}>
        <ListboxButton
          className={clsx(
            'relative block rounded-lg bg-black/50 py-1.5 pr-9 pl-3 text-left text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
        >
          {language}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="group pointer-events-none absolute top-2.5 right-2.5 size-4"
               aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
          </svg>
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'w-[var(--button-width)] rounded-xl border border-white/5 bg-black/75 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
          )}
        >
          {languages.map((lang) => (
            <ListboxOption
              key={lang}
              value={lang}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
              <span className="text-sm/6 text-white">{lang}</span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};
