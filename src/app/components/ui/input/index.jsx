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
        className="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-neutral-800 placeholder:text-neutral-600/60 bg-transparent border border-neutral-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none text-base rounded-lg py-3 px-3 hover:border-neutral-400 focus:border-neutral-400 peer"
        placeholder={placeholder}
      />
    </div>
  );
}