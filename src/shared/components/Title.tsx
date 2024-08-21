import { ReactElement } from "react";

type Props = {
  label: string;
  withMarginBottom?: boolean;
}

export const Title = ({ label, withMarginBottom }: Props): ReactElement => <h1 className={`text-3xl text-white dark:text-black font-bold ${withMarginBottom ? "mb-3" : ""}`}>{label}</h1>;
