import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode | string
}

const ButtonOutline: FC<Props> = ({ children }) => {
  return (
    <button className="font-semibold tracking-wide pt-2 pb-2.5 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
