export default function Textarea(){
    return(
        <textarea 
        rows="8" 
        placeholder="Message here..." 
        className="peer block w-full resize-none rounded-md border border-neutral-300 bg-transparent p-2.5 text-sm leading-none text-neutral-800 outline-none transition-all duration-300 ease-in placeholder:text-neutral-400 hover:border-neutral-400 focus:border-neutral-400 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
        </textarea>
    )
}