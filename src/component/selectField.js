// fields/SelectField.js
export const SelectField = ({ label, value, options, onChange }) => (
  <div className="flex flex-col space-y-1">
    <label className="text-xs font-medium text-gray-700">{label}:</label>
    <select
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

  