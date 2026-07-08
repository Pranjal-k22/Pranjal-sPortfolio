export const Button = ({
  className = "",
  size = "default",
  children,
  ...props
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary bg-gradient-to-br from-primary via-primary to-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 ease-out hover:scale-105 active:scale-95 group";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {/* Enhanced background layers */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300" />
      
      {/* Shimmer effect on hover */}
      <span className="absolute -inset-full opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 group-hover:animate-shimmer transition-all duration-700" />

      {/* Content layer */}
      <span className="relative flex items-center justify-center gap-2 text-primary-foreground font-semibold group-hover:gap-3 transition-all duration-300">
        {children}
      </span>

      {/* Glow effect on hover */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-md bg-primary transition-opacity duration-300" />
    </button>
  );
};