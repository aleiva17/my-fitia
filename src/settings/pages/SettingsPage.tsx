import { ReactElement } from "react";
import { Title } from "@/shared/components/Title.tsx";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/settings/components/LanguageSwitcher.tsx";
import { RoundedCard } from "@/shared/components/RoundedCard.tsx";
import { ThemeSwitcher } from "@/settings/components/ThemeSwitcher.tsx";
import { BackgroundSwitcher } from "@/settings/components/BackgroundSwitcher.tsx";

export const SettingsPage = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col justify-center items-center transform-gpu p-4">
      <RoundedCard style={{ maxWidth: "32rem" }}>
        <Title label={t("pages.settings.title")} withMarginBottom />
        <p>{t("pages.settings.description")}</p>
        <div className="mt-8 space-y-6">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <BackgroundSwitcher />
        </div>
      </RoundedCard>
    </main>
  );
};
