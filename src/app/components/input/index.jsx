export default function Input({ 
  id, 
  label, 
  type = 'text', 
  placeholder, 
  className = '' 
}) {
  return (
    <div className={className}>
      {label && <label htmlFor={id} className="block mb-2 font-medium">{label}</label>}
      <input
        type={type}
        id={id}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
}