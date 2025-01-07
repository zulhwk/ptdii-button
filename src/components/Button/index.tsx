import React, { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import Tooltip from "../Tooltip";
import clsx from "clsx";

type ButtonProps = VariantProps<typeof buttonStyles> & {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  tooltip?: string;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

const buttonStyles = cva(
  "inline-flex justify-center items-center rounded transition-all focus:outline-none",
  {
    variants: {
      color: {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        success: "bg-green-500 text-white hover:bg-green-600",
        error: "bg-red-500 text-white hover:bg-red-600",
        warning: "bg-yellow-500 text-black hover:bg-yellow-600",
      },
      variant: {
        solid: "",
        outlined: "bg-transparent border-2 text-current",
        text: "bg-transparent text-current hover:bg-gray-100",
      },
      size: {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
      },
    },
    compoundVariants: [
      {
        variant: "outlined",
        color: "primary",
        class: "text-blue-500 border-blue-500 hover:text-white",
      },
      {
        variant: "outlined",
        color: "success",
        class: "text-green-500 border-green-500 hover:text-white",
      },
      {
        variant: "outlined",
        color: "error",
        class: "text-red-500 border-red-500 hover:text-white",
      },
      {
        variant: "outlined",
        color: "warning",
        class: "text-yellow-500 border-yellow-500 hover:text-white",
      },
      {
        variant: "text",
        color: "primary",
        class: "text-blue-500 hover:bg-blue-100",
      },
      {
        variant: "text",
        color: "success",
        class: "text-green-500 hover:bg-green-100",
      },
      {
        variant: "text",
        color: "error",
        class: "text-red-500 hover:bg-red-100",
      },
      {
        variant: "text",
        color: "warning",
        class: "text-yellow-500 hover:bg-yellow-100",
      },
    ],
    defaultVariants: {
      color: "primary",
      variant: "solid",
      size: "medium",
    },
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color,
      variant,
      size,
      icon,
      iconPosition = "left",
      tooltip,
      tooltipPosition = "top",
      onClick,
      children,
      className,
    },
    ref
  ) => {
    const buttonElement = (
      <button
        ref={ref}
        onClick={onClick}
        className={clsx(buttonStyles({ color, variant, size }), className)}
      >
        {icon && iconPosition === "left" && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="ml-2">{icon}</span>
        )}
      </button>
    );

    return tooltip ? (
      <Tooltip content={tooltip} position={tooltipPosition}>
        {buttonElement}
      </Tooltip>
    ) : (
      buttonElement
    );
  }
);

export default Button;
