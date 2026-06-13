type InputProps = {
  label: string;
  type?: string;
  placeholder?: string;
};

function Input({
  label,
  type = "text",
  placeholder,
}: InputProps) {
  return (
    <div className="mt-5">
      <label className="text-gray-500 text-sm">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          border-b
          py-3
          outline-none
        "
      />
    </div>
  );
}

export default Input;