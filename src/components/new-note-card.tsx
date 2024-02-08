import * as Dialog from "@radix-ui/react-dialog";
import { X } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from 'sonner';

export function NewNoteCard() {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
  const [content, setContent] = useState('')
  function handleStartEditor() {
    setShouldShowOnboarding(false);
  }

  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value)

    if (event.target.value === "") {
      setShouldShowOnboarding(true);
    }
  }

  function handleSaveNote(event: FormEvent) {
    event.preventDefault()

    toast.success('Nota criada com sucesso')
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-slate-700 rounded-md p-5 flex flex-col outline-none text-left gap-3 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-200">
          Adicionar nota
        </span>
        <p className="text-sm leading-6 text-slate-400">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50 ">
          <Dialog.Content className="fixed left-1/2 top-1/2 overflow-hidden -translate-x-1/2 -translate-y-1/2  max-w-[640px] h-[60vh] w-full bg-slate-700 rounded-md flex flex-col outline-none ">
            <Dialog.Close className=" absolute right-0 p-1.5 text-slate-400 top-0 bg-slate-800 hover:text-slate-100">
              <X size={20} />
            </Dialog.Close>

            <form onSubmit={handleSaveNote} className="flex-1 flex flex-col">
              <div className="flex flex-1 flex-col gap-3 p-5">
                <span className="text-sm font-medium text-slate-300">
                  Adicionar nota
                </span>
                {shouldShowOnboarding ? (
                  <p className="text-sm leading-6 text-slate-400 overflow-hidden">
                    Comece{" "}
                    <button className="font-md text-lime-400 hover:underline">
                      {" "}
                      gravando uma nota{" "}
                    </button>{" "}
                    em áudio ou se preferir{" "}
                    <button
                      onClick={handleStartEditor}
                      className="font-md text-lime-400 hover:underline"
                    >
                      {" "}
                      utilize apenas texto
                    </button>
                    .
                  </p>
                ) : (
                  <textarea
                    autoFocus
                    className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                    onChange={handleContentChanged}
                  ></textarea>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-lime-400 text-lime-950 py-4 text-sm text-slate-300 outline-none font-medium hover:bg-lime-300"
              >
                Salvar nota
              </button>
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
