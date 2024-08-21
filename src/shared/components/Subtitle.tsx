import { ReactElement } from "react";

type Props = {
  label: string;
  withMarginBottom?: boolean;
}

export const Subtitle = ({ label, withMarginBottom }: Props): ReactElement =>
  <h2 className={`text-xl text-white dark:text-black font-semibold ${withMarginBottom ? "mb-2" : ""}`}>{label}</h2>;