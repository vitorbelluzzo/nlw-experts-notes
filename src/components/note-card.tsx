export function NoteCard() {
  return (
    <button className="bg-slate-800 text-left rounded-md p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">há 4 dias</span>
      <p className="text-sm leading-6 text-slate-400 overflow-hidden">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
        dolores harum quisquam beatae, excepturi suscipit enim odit reiciendis?
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}
