'use client';

import { useState, useEffect } from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListNode, ListItemNode } from '@lexical/list';
import { LinkNode } from '@lexical/link';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getRoot } from 'lexical';
import Toolbar from '../toolbar';

// Função para extrair texto puro
function extractPlainText(editorState) {
  let plainText = '';

  editorState.read(() => {
    const root = $getRoot();
    plainText = root.getTextContent();
  });

  return plainText;
}

// Componente interno que usa o contexto
function EditorContent({ onChange }) {
  const [editor] = useLexicalComposerContext();

  // Esta função é chamada sempre que o conteúdo muda
  const handleChange = (editorState) => {
    // Extrai o estado completo do editor
    const state = editorState.toJSON();
    onChange(state);
  };

  return (
    <>
      <Toolbar />
      <div className="relative">
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              className="min-h-[200px] w-full resize-none p-4 focus:outline-none"
            />
          }
          placeholder={
            <div className="absolute top-4 left-4 text-neutral-600/60 pointer-events-none">
              Digite sua mensagem aqui...
            </div>
          }
          ErrorBoundary={() => <div>⚠️ Ocorreu um erro no editor!</div>}
        />
        <HistoryPlugin />
        <OnChangePlugin onChange={handleChange} />
      </div>
    </>
  );
}

const initialConfig = {
  namespace: 'RichTextEditor',
  theme: {
    root: 'editor-root',
    link: 'text-blue-600 hover:underline',
    text: {
      bold: 'font-bold',
      italic: 'italic',
      underline: 'underline',
    },
    paragraph: 'mb-4',
    heading: {
      h1: 'text-3xl font-bold my-4',
      h2: 'text-2xl font-bold my-3',
      h3: 'text-xl font-bold my-2',
    },
    quote: 'border-l-4 border-gray-300 pl-4 italic',
    list: {
      ul: 'list-disc pl-8',
      ol: 'list-decimal pl-8',
    },
  },
  nodes: [
    HeadingNode,
    QuoteNode,
    ListNode,
    ListItemNode,
    LinkNode
  ],
  onError: (error) => console.error(error),
};

export default function RichTextEditor({ value, onChange }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="w-full space-y-2">
      <div className="peer block w-full rounded-2xl border border-neutral-200 bg-transparent text-sm text-neutral-800 outline-none transition-all duration-300 ease-in hover:border-neutral-400 focus-within:border-neutral-400 focus-within:outline-none">
        {isMounted && (
          <LexicalComposer initialConfig={initialConfig}>
            <EditorContent onChange={onChange} />
          </LexicalComposer>
        )}
      </div>
    </div>
  );
}