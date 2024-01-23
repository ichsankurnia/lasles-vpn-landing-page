import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode | string
  className?: string
}

const ButtonPrimary: FC<Props> = ({ children, className }) => {
  return (
    <button
      className={cn("py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-bold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none ", className)}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
