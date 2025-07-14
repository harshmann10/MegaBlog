import { useId } from "react";

function Select({ options, label, className = "", ref, ...props }) {
    const id = useId();
    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className="inline-block mb-1 pl-1 text-white">
                    {label} :
                </label>
            )}
            <select
                className={`px-3 py-2 rounded-lg bg-gray-700 text-white outline-none focus:bg-gray-600 duration-200 border border-gray-600 w-full ${className}`}
                id={id}
                {...props}
                ref={ref}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
