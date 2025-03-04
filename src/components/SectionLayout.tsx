import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const SectionLayout = ({ children, className }: Props) => {
  return <div className={cn("main-container", className ?? "")}>{children}</div>;
};

export default SectionLayout;
