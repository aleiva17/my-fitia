import { CSSProperties, ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
  style?: CSSProperties;
}

export const RoundedCard = ({ children, style }: Props): ReactElement => (
  <div className="bg-black bg-opacity-65 rounded-3xl drop-shadow-md text-white w-full p-6" style={style}>
    {children}
  </div>
)