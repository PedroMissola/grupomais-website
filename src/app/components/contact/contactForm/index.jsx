'use client';

import { useState } from 'react';
import Input from '../../ui/input';
import RichTextEditor from '../textEditor';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validate = (data) => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = 'Nome é obrigatório';
    }

    if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'E-mail inválido';
    }

    if (!data.subject.trim()) {
      errors.subject = 'Assunto é obrigatório';
    }

    if (!message.trim() || message.length < 10) {
      errors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate({ ...formData, message });

    if (Object.keys(validationErrors).length > 0) {
      console.error('Erros de validação:', validationErrors);
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: message.trim(),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Erro ao enviar dados: ${response.statusText}`);
      }

      setSuccessMessage('Mensagem enviada com sucesso!');
      setFormData({
        name: '',
        email: '',
        subject: '',
      });
      setMessage('');

      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error.message);
    } finally {
      setIsSubmitting(false);
    }
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
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
          <Input
            id="email"
            label="E-mail"
            type="email"
            placeholder="seu.email@exemplo.com"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>

        <Input
          id="subject"
          label="Assunto"
          placeholder="Assunto da mensagem"
          value={formData.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
        />

        <div>
          <label htmlFor="message" className="block mb-2 font-medium">Mensagem</label>
          <RichTextEditor value={message} onChange={setMessage} />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          {isSubmitting ? 'Enviando...' : successMessage || 'Enviar Mensagem'}
        </button>
      </form>
    </section>
  );
}
