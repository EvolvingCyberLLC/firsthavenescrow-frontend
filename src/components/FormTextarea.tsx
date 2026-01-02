interface FormTextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}

export default function FormTextarea({
  label,
  name,
  value,
  onChange,
  required = false,
  placeholder,
  rows = 4,
}: FormTextareaProps) {
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className="form-input resize-y"
        aria-required={required}
      />
    </div>
  );
}
