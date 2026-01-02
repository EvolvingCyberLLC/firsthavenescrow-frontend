interface FormCheckboxGroupProps {
  label: string;
  name: string;
  options: string[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
}

export default function FormCheckboxGroup({
  label,
  name,
  options,
  selectedValues,
  onChange,
}: FormCheckboxGroupProps) {
  const handleChange = (option: string, checked: boolean) => {
    if (checked) {
      onChange([...selectedValues, option]);
    } else {
      onChange(selectedValues.filter((v) => v !== option));
    }
  };

  return (
    <fieldset>
      <legend className="form-label mb-3">{label}</legend>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="checkbox"
              name={`${name}-${option}`}
              checked={selectedValues.includes(option)}
              onChange={(e) => handleChange(option, e.target.checked)}
              className="w-4 h-4 rounded border-[var(--border-color)] text-[var(--gold)] focus:ring-[var(--gold)]"
            />
            <span className="text-[var(--text-dark)]">{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
