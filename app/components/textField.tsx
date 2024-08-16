interface FormFieldProps {
    htmlFor: string
    label?: string
    type?: string
    value: string
    placeholder?: string
    onChange?: (...args: any) => any
  }
  
  export function Textfield({ htmlFor, label, type = 'text', value, placeholder, onChange = () => {} }: FormFieldProps) {
    return (
      <>
        <label htmlFor={htmlFor} className="text-gray-600 font-semibold">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type}
          id={htmlFor}
          name={htmlFor}
          className="w-full p-2 rounded-xl my-2 border border-gray-300"
          placeholder={placeholder}
          value={value}
        />
      </>
    )
  }