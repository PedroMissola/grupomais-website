export default function Button({
    children,
    className = '',
    type = 'button',
    onClick = () => {},
    disabled = false,
    ...props
}) {
    <button 
        type={type}
        onClick={onClick}
        disabled={disabled}
        {...props}
        class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700">
        
        {children}
    </button>
}