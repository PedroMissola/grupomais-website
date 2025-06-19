'use client';

import { useState } from 'react';
import Input from '../../input';
import RichTextEditor from '../textEditor';

export default function ContactForm() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você teria que converter o editorState para HTML
    // ou enviar o estado bruto para o backend
    console.log('Mensagem:', message);
  };

  return (
    <section className="border-[1px] border-neutral-100 p-8 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-6">Envie uma mensagem</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input 
            id="name"
            label="Nome"
            placeholder="Seu nome completo"
          />
          <Input 
            id="email"
            label="E-mail"
            type="email"
            placeholder="seu.email@exemplo.com"
          />
        </div>
        
        <Input 
          id="subject"
          label="Assunto"
          placeholder="Assunto da mensagem"
        />
        
        <div>
          <label htmlFor="message" className="block mb-2 font-medium">Mensagem</label>
          <RichTextEditor 
            value={message} 
            onChange={setMessage} 
          />
        </div>
        
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
}