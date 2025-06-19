'use client';

import { 
  FORMAT_TEXT_COMMAND,
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  $createHeadingNode
} from '@lexical/rich-text'; // Importação corrigida
import { $getSelection, $isRangeSelection, $createParagraphNode } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export default function Toolbar() {
  const [editor] = useLexicalComposerContext();

  const formatText = (format) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
      }
    });
  };

  const insertList = (type) => {
    editor.dispatchCommand(
      type === 'ordered' 
        ? INSERT_ORDERED_LIST_COMMAND 
        : INSERT_UNORDERED_LIST_COMMAND, 
      undefined
    );
  };

  const setHeading = (level) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        // Corrigido: criação e inserção correta do heading
        const headingNode = $createHeadingNode(`h${level}`);
        selection.insertNodes([headingNode]);
        selection.insertParagraph();
      }
    });
  };

  return (
    <div className="flex flex-wrap items-center gap-2 p-2 border-b border-neutral-300 bg-gray-50 rounded-t-2xl">
      <button
        onClick={() => formatText('bold')}
        className="p-1.5 rounded hover:bg-gray-200"
        title="Negrito"
      >
        <span className="font-bold text-sm">B</span>
      </button>
      <button
        onClick={() => formatText('italic')}
        className="p-1.5 rounded hover:bg-gray-200"
        title="Itálico"
      >
        <span className="italic text-sm">I</span>
      </button>
      <button
        onClick={() => formatText('underline')}
        className="p-1.5 rounded hover:bg-gray-200"
        title="Sublinhado"
      >
        <span className="underline text-sm">U</span>
      </button>
      
      <div className="h-4 w-px bg-gray-300 mx-1"></div>
      
      <button
        onClick={() => setHeading(1)}
        className="p-1.5 rounded hover:bg-gray-200"
        title="Título 1"
      >
        <span className="font-bold text-sm">H1</span>
      </button>
      <button
        onClick={() => setHeading(2)}
        className="p-1.5 rounded hover:bg-gray-200"
        title="Título 2"
      >
        <span className="font-bold text-xs">H2</span>
      </button>
      <button
        onClick={() => setHeading(3)}
        className="p-1.5 rounded hover:bg-gray-200"
        title="Título 3"
      >
        <span className="font-bold text-xs">H3</span>
      </button>
      
      <div className="h-4 w-px bg-gray-300 mx-1"></div>
      
      <button
        onClick={() => insertList('unordered')}
        className="p-1.5 rounded hover:bg-gray-200"
        title="Lista não ordenada"
      >
        <span className="text-sm">•</span>
      </button>
      <button
        onClick={() => insertList('ordered')}
        className="p-1.5 rounded hover:bg-gray-200"
        title="Lista ordenada"
      >
        <span className="text-sm">1.</span>
      </button>
    </div>
  );
}