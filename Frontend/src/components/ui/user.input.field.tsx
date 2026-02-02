interface InputFieldProps {
  label: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  icon?: React.ReactNode
  required?: boolean
}

const InputField: React.FC<InputFieldProps> = ({ label, type, value, onChange, placeholder, icon }) => (
  <div className="mb-4">
    <label className="block text-gray-300 text-sm font-medium mb-1.5">{label}</label>
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
          {icon}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-[#0d1117] border border-gray-800 text-white rounded-lg py-2 ${icon ? 'pl-10' : 'px-4'} pr-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-gray-600`}
      />
    </div>
  </div>
);

export default InputField;