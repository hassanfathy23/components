import { Icon } from "@iconify/react";

function Button({
  title,
  startIcon,
  endIcon,
  variant,
  disableShadow,
  disabled,
}) {
  return (
    <div
      className={`py-2 px-4 flex ${
        endIcon ? "flex-row-reverse" : "flex-row"
      } gap-1 ${
        variant === "outline" &&
        "bg-white text-[#3D5AFE] hover:bg-[#2962FF1A]/10 border-[#3D5AFE]"
      } font-noto rounded-md border-2 ${
        variant === "text" &&
        "border-0 text-[#3D5AFE] bg-white hover:bg-[#2962FF1A]/10"
      } ${disableShadow && "text-white bg-[#3D5AFE]"} ${
        disabled && "text-gray-500 bg-gray-200"
      } ${variant==="text" && disabled && 'bg-white text-gray-500'}
      cursor-pointer transition-all duration-300`}
    >
      {startIcon || endIcon ? (
        <Icon icon={startIcon || endIcon} color="white" />
      ) : null}
      <p>{disabled ? "disabled" : title}</p>
    </div>
  );
}

export default Button;
