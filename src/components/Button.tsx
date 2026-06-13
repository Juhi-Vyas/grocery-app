type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

function Button({ text, onClick, className = "" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        bg-green-500
        text-white
        w-full
        py-4
        rounded-xl
        font-medium
        ${className}
      `}
    >
      {text}
    </button>
  );
}

export default Button;