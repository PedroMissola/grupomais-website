'use client';

import { useState } from 'react';
import Input from '../../ui/input';
import RichTextEditor from '../../ui/textEditortor';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
  });
  const [message, setMessage] = useState({
    root: {
      children: [],
      direction: null,
      format: "",
      indent: 0,
      type: "root",
      version: 1
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusColor, setStatusColor] = useState('text-gray-600');
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Limpa o erro quando o usuário começa a digitar
    if (fieldErrors[field]) {
      setFieldErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleMessageChange = (editorState) => {
    setMessage(editorState);

    if (fieldErrors.message) {
      setFieldErrors(prev => ({ ...prev, message: '' }));
    }
  };

  const extractTextFromLexicalState = (editorState) => {
    if (typeof editorState === 'string') return editorState;

    if (!editorState || !editorState.root) return '';

    // Função recursiva para extrair texto
    const extractText = (node) => {
      if (node.text) return node.text;

      let text = '';
      if (node.children) {
        node.children.forEach(child => {
          text += extractText(child);
        });
      }
      return text;
    };

    return extractText(editorState.root);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messageText = extractTextFromLexicalState(message)

    // Resetar estados
    setIsSubmitting(true);
    setStatusMessage('Enviando...');
    setStatusColor('text-[#113548]');
    setFieldErrors({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    const payload = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: message,
    };

    try {
      // CORREÇÃO: Usar caminho absoluto para a API
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        // Se houver erros de validação do backend
        if (data.errors) {
          setFieldErrors({
            name: data.errors.name || '',
            email: data.errors.email || '',
            subject: data.errors.subject || '',
            message: data.errors.message || ''
          });

          setStatusMessage('Por favor, corrija os erros abaixo.');
          setStatusColor('text-red-600');
        } else {
          throw new Error(data.message || 'Erro ao enviar mensagem');
        }
        return;
      }

      // Sucesso
      setStatusMessage('Mensagem enviada com sucesso!');
      setStatusColor('text-green-600');
      setFormData({ name: '', email: '', subject: '' });
      setMessage('');
    } catch (error) {
      // Erro na requisição
      setStatusMessage(error.message || 'Erro ao enviar. Tente novamente.');
      setStatusColor('text-red-600');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="border-[1px] border-neutral-100 p-8 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-6">Envie uma mensagem</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Input
              id="name"
              label="Nome"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              error={fieldErrors.name}
            />
            {fieldErrors.name && <p className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>}
          </div>
          <div>
            <Input
              id="email"
              label="E-mail"
              type="email"
              placeholder="seu.email@exemplo.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              error={fieldErrors.email}
            />
            {fieldErrors.email && <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>}
          </div>
        </div>

        <div>
          <Input
            id="subject"
            label="Assunto"
            placeholder="Assunto da mensagem"
            value={formData.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
            error={fieldErrors.subject}
          />
          {fieldErrors.subject && <p className="mt-1 text-sm text-red-600">{fieldErrors.subject}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-medium">Mensagem</label>
          <RichTextEditor value={message} onChange={handleMessageChange} />

          <div className="flex gap-1.5 text-neutral-600 mt-2">
            <svg width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="h-3.5 w-3.5 shrink-0 tranneutral-y-[3px] stroke-2">
              <path d="M12 11.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M12 7.51L12.01 7.49889" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <small className="font-sans text-sm text-current antialiased">
              {fieldErrors.message ? (
                <p className="mt-2 text-sm text-red-600">{fieldErrors.message}</p>
              ) : (
                <>Use no mínimo 10 caracteres e no máximo 1000 caracteres.</>
              )}
            </small>

          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className={`text-sm ${statusColor}`}>
            {statusMessage}
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#113548] text-white px-6 py-3 rounded-lg hover:bg-[#274250] transition-colors font-medium disabled:opacity-70"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </section>
  );
}