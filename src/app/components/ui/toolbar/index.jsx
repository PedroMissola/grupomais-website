'use client';

import {
  FORMAT_TEXT_COMMAND,
  $getSelection,
  $isRangeSelection
} from 'lexical';
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
} from '@lexical/list';
import { $createHeadingNode, HeadingTagType } from '@lexical/rich-text';
import { $setBlocksType } from '@lexical/selection';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createParagraphNode } from 'lexical';

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
        $setBlocksType(selection, () => $createHeadingNode(level));
      }
    });
  };

  const setParagraph = () => {
    editor.update(() => {
      const selection = $getSelection();

      if ($isRangeSelection(selection)) {
        // Transforma o bloco selecionado em um parágrafo
        $setBlocksType(selection, () => $createParagraphNode());
      }
    });
  };

  return (
    <div className="flex flex-wrap items-center gap-2 p-2 border-b border-neutral-300 bg-gray-50 rounded-t-2xl">
      <button
        type="button"
        onClick={() => formatText('bold')}
        className="p-1.5 rounded hover:bg-gray-200"
        title="Negrito"
      >
        <span className="font-bold text-sm">B</span>
      </button>
      <button
        type="button"
        onClick={() => formatText('italic')}
        className="p-1.5 rounded hover:bg-gray-200"
        title="Itálico"
      >
        <span className="italic text-sm">I</span>
      </button>
      <button
        type="button"
        onClick={() => formatText('underline')}
        className="p-1.5 rounded hover:bg-gray-200"
        title="Sublinhado"
      >
        <span className="underline text-sm">U</span>
      </button>

      <div className="h-4 w-px bg-gray-300 mx-1"></div>

      <button
        type="button"
        onClick={() => setHeading('h1')}
        className="p-1.5 rounded hover:bg-gray-200"
        title="Título 1"
      >
        <span className="font-bold text-sm">H1</span>
      </button>
      <button
        type="button"
        onClick={() => setHeading('h2')}
        className="p-1.5 rounded hover:bg-gray-200"
        title="Título 2"
      >
        <span className="font-bold text-xs">H2</span>
      </button>
      <button
        type="button"
        onClick={() => setHeading('h3')}
        className="p-1.5 rounded hover:bg-gray-200"
        title="Título 3"
      >
        <span className="font-bold text-xs">H3</span>
      </button>

      <button
        type="button"
        onClick={setParagraph}
        className="p-1.5 rounded hover:bg-gray-200"
        title="Parágrafo"
      >
        <span className="text-sm">P</span>
      </button>

      <div className="h-4 w-px bg-gray-300 mx-1"></div>

      <button
        type="button"
        onClick={() => insertList('unordered')}
        className="p-1.5 rounded hover:bg-gray-200"
        title="Lista não ordenada"
      >
        <span className="text-sm">•</span>
      </button>
      <button
        type="button"
        onClick={() => insertList('ordered')}
        className="p-1.5 rounded hover:bg-gray-200"
        title="Lista ordenada"
      >
        <span className="text-sm">1.</span>
      </button>
    </div>
  );
}