import { Icon } from "@iconify/react";

type AppProps = {
  title: string,
  startIcon?: string,
  endIcon?: string,
  variant?: string,
  disableShadow?: boolean,
  disabled?: boolean,
  size?: string,
  color?: string,
}

function EnhancedButton({
  title,
  startIcon,
  endIcon,
  variant,
  disableShadow,
  disabled,
  size,
  color,
}: AppProps) {
  function classesFunction() {
    let classesNames =
      "flex items-center gap-1 font-notto cursor-pointer border-2 rounded-md transition-all duration-300 ";
    let iconColor = "#fff";
    if (endIcon) {
      classesNames += "flex-row-reverse ";
    }
    if (startIcon) {
      classesNames += "flex-row ";
    }
    if (variant === "outline") {
      classesNames += "bg-white ";
    }
    if (variant === "text") {
      classesNames += " bg-white border-white ";
    }
    if (disabled) {
      if (!disableShadow) {
        classesNames += "text-[#9E9E9E] bg-[#E0E0E0] border-[#E0E0E0] hover:bg-white hover:border-white ";
      } else {
        classesNames += "text-[#9E9E9E] bg-[#E0E0E0] border-[#E0E0E0] ";
      }
    }
    if (size === "sm") {
      classesNames += "py-1 px-2 ";
    }
    if (size === "md" || !size || size === "") {
      classesNames += "py-2 px-4 ";
    }
    if (size === "lg") {
      classesNames += "py-3 px-6 ";
    }
    if (!color || color === "default" || color === "") {
      if (!disabled) {
        if (variant === "outline") {
            if(!disableShadow) {
                 classesNames += 'hover:bg-[#AEAEAE]/10 text-[#3F3F3F] border-[#E0E0E0] '   
            } else {
                classesNames += 'text-[#3F3F3F] border-[#E0E0E0] '   
            }
        } else if (variant === "text") {
            if(!disableShadow) {
                classesNames += 'hover:bg-[#AEAEAE]/10 text-[#3F3F3F] '   
            } else {
                classesNames += 'text-[#3F3F3F] '   
            }
        } else {
          if (!disableShadow) {
            classesNames +=
              "hover:bg-[#AEAEAE] hover:border-[#AEAEAE] text-[#3F3F3F] bg-[#E0E0E0] border-[#E0E0E0] ";
          } else {
            classesNames += "text-[#3F3F3F] bg-[#E0E0E0] border-[#E0E0E0] ";
          }
        }
      }
    }
    if (color === "primary") {
      if (!disabled) {
        if (variant === "outline") {
          if (!disableShadow) {
            classesNames +=
              "hover:bg-[#2962FF1A]/10 text-[#2962FF] border-[#2962FF] ";
          } else {
            classesNames += "text-[#2962FF] border-[#2962FF] ";
          }
          iconColor = "#2962FF";
        } else if (variant === "text") {
          if (!disableShadow) {
            classesNames += "hover:bg-[#2962FF1A]/10 text-[#2962FF] ";
          } else {
            classesNames += "text-[#2962FF] ";
          }
          iconColor = "#2962FF";
        } else {
          if (!disableShadow) {
            classesNames +=
              "hover:bg-[#0039CB] hover:border-[#0039CB] text-white bg-[#2962FF] border-[#2962FF] ";
          } else {
            classesNames += "text-white bg-[#2962FF] border-[#2962FF] ";
          }
        }
      }
    }
    if (color === "secondry") {
      if (!disabled) {
        if (variant === "outline") {
          if (!disableShadow) {
            classesNames +=
              "hover:bg-[#455A64]/10 text-[#455A64] border-[#455A64] ";
          } else {
            classesNames += "text-[#455A64] border-[#455A64] ";
          }
          iconColor = "#455A64";
        } else if (variant === "text") {
          if (!disableShadow) {
            classesNames += "text-[#455A64] hover:bg-[#455A64]/10 ";
          } else {
            classesNames += "text-[#455A64] ";
          }
          iconColor = "#455A64";
        } else {
          if (!disableShadow) {
            classesNames +=
              "text-white bg-[#455A64] border-[#455A64] hover:bg-[#1C313A] hover:border-[#1C313A] ";
          } else {
            classesNames += "text-white bg-[#455A64] border-[#455A64] ";
          }
        }
      }
    }
    if (color === "danger") {
      if (!disabled) {
        if (variant === "outline") {
          if (!disableShadow) {
            classesNames +=
              "text-[#D32F2F] border-[#D32F2F] hover:bg-[#D32F2F]/10 ";
          } else {
            classesNames += "text-[#D32F2F] border-[#D32F2F] ";
          }
          iconColor = "#D32F2F";
        } else if (variant === "text") {
          if (!disableShadow) {
            classesNames += "text-[#D32F2F] hover:bg-[#D32F2F]/10 ";
          } else {
            classesNames += "text-[#D32F2F] ";
          }
          iconColor = "#D32F2F";
        } else {
          if (!disableShadow) {
            classesNames +=
              "text-white bg-[#D32F2F] border-[#D32F2F] hover:bg-[#9A0007] hover:border-[#9A0007] ";
          } else {
            classesNames += "text-white bg-[#D32F2F] border-[#D32F2F] ";
          }
        }
      }
    }
    return { classesNames, iconColor };
  }
  const classes = classesFunction();
  console.log(classes);
  return (
    <div className={`${classes.classesNames}`}>
      {startIcon || endIcon ? (
        <Icon icon={startIcon || endIcon} color={classes.iconColor} />
      ) : null}
      <p>{title}</p>
    </div>
  );
}

export default EnhancedButton;
