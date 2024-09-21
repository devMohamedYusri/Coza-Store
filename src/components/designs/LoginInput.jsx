import { useState } from "react";

function LoginInput({name, label, type, value, onChange, ...rest}) {
  const [focused, setFocused] = useState(false)

  return (
    <div className="relative w-full">
      <input
        type={type}
        id={name}
        name={name}
        className={`peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 transition-all duration-200
          ${value || focused ? "pt-6" : "pt-0"} `}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
        {...rest}
      />
      <label
        htmlFor={name}
        className={`absolute left-0 text-gray-500 transition-all duration-200
        ${focused || value ? "top-0 text-xs text-blue-500" : "top-2 text-base"}`}
      >
       {label}
      </label>
    </div>
  );
}

export default LoginInput;
