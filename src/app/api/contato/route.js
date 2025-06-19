import { db, admin } from "@/lib/firebaseAdmin";

// Validações detalhadas
function validateName(name) {
  if (typeof name !== "string") return "Nome deve ser um texto";
  const trimmed = name.trim();
  if (trimmed.length === 0) return "Nome é obrigatório";
  if (trimmed.length < 2) return "Nome deve ter pelo menos 2 caracteres";
  if (trimmed.length > 100) return "Nome não pode exceder 100 caracteres";
  return null;
}

function validateEmail(email) {
  if (typeof email !== "string") return "E-mail deve ser um texto";
  const trimmed = email.trim();
  if (trimmed.length === 0) return "E-mail é obrigatório";
  
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(trimmed)) return "Formato de e-mail inválido";
  
  return null;
}

function validateSubject(subject) {
  if (typeof subject !== "string") return "Assunto deve ser um texto";
  const trimmed = subject.trim();
  if (trimmed.length === 0) return "Assunto é obrigatório";
  if (trimmed.length < 3) return "Assunto deve ter pelo menos 3 caracteres";
  if (trimmed.length > 200) return "Assunto não pode exceder 200 caracteres";
  return null;
}

function validateMessage(message) {
  if (typeof message !== "string") return "Mensagem deve ser um texto";
  const trimmed = message.trim();
  if (trimmed.length === 0) return "Mensagem é obrigatória";
  if (trimmed.length < 10) return "Mensagem deve ter pelo menos 10 caracteres";
  if (trimmed.length > 1000) return "Mensagem não pode exceder 1000 caracteres";
  return null;
}

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validação detalhada de todos os campos
    const errors = {
      name: validateName(name),
      email: validateEmail(email),
      subject: validateSubject(subject),
      message: validateMessage(message)
    };

    // Verifica se há erros
    const hasErrors = Object.values(errors).some(error => error !== null);
    
    if (hasErrors) {
      return new Response(JSON.stringify({ 
        message: "Erros de validação", 
        errors 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Se não houver erros, salva no banco de dados
    await db.collection("contacts").add({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return new Response(JSON.stringify({ 
      message: "Contato enviado com sucesso." 
    }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error("Erro no contato:", error);
    return new Response(JSON.stringify({ 
      message: "Erro interno do servidor." 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}