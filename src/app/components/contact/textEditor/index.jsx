'use client';

import { useState } from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListNode, ListItemNode } from '@lexical/list';
import { LinkNode } from '@lexical/link';
import Toolbar from '../toolbar';

// Configuração inicial do editor
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
  const [editorState, setEditorState] = useState(value);

  const handleChange = (editorState) => {
    setEditorState(editorState);
    onChange(editorState);
  };

  return (
    <div className="w-full space-y-2">
      <div className="peer block w-full rounded-2xl border border-neutral-200 bg-transparent text-sm text-neutral-800 outline-none transition-all duration-300 ease-in hover:border-neutral-400 focus-within:border-neutral-400 focus-within:outline-none">
        <LexicalComposer initialConfig={initialConfig}>
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
            <LinkPlugin />
            <ListPlugin />
            <OnChangePlugin onChange={handleChange} />
          </div>
        </LexicalComposer>
      </div>
      
      <div className="flex gap-1.5 text-neutral-600">
        <svg width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="h-3.5 w-3.5 shrink-0 tranneutral-y-[3px] stroke-2">
          <path d="M12 11.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M12 7.51L12.01 7.49889" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <small className="font-sans text-sm text-current antialiased">
          Use no mínimo 255 caracteres e no máximo 1000 caracteres.
        </small>
      </div>
    </div>
  );
}