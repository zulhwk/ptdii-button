import React from "react";

type TooltipProps = {
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = "top",
  children,
}) => {
  const tooltipPositions = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  return (
    <div className="inline-block relative group">
      <div
        className={`absolute z-10 hidden group-hover:block bg-gray-700 text-white text-sm py-1 px-2 rounded ${tooltipPositions[position]}`}
      >
        {content}
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
