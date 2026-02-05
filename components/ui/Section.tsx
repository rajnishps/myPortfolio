import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  noPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = "",
  noPadding = false,
}) => {
  return (
    <section
      id={id}
      className={`relative w-full ${!noPadding ? "py-20 md:py-32" : ""} ${className}`}
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
