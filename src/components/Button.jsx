import React from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`${containerClass} group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 flex gap-2 items-center`}
    >
      {" "}
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-sm uppercase">
        <div className="">{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
