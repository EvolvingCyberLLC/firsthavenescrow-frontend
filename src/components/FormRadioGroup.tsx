interface FormRadioGroupProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export default function FormRadioGroup({
  label,
  name,
  options,
  selectedValue,
  onChange,
  required = false,
}: FormRadioGroupProps) {
  return (
    <fieldset>
      <legend className="form-label mb-3">
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        )}
      </legend>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
              required={required}
              className="w-4 h-4 border-[var(--border-color)] text-[var(--gold)] focus:ring-[var(--gold)]"
            />
            <span className="text-[var(--text-dark)]">{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
