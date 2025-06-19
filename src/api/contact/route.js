import { db, admin } from "@/lib/firebaseAdmin";

function isValidName(name) {
  return typeof name === "string" && name.trim().length >= 2;
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!isValidName(name)) {
      return new Response(JSON.stringify({ message: "Nome inválido." }), { status: 400 });
    }

    if (!isValidEmail(email)) {
      return new Response(JSON.stringify({ message: "Email inválido." }), { status: 400 });
    }

    if (!subject || subject.trim().length < 3) {
      return new Response(JSON.stringify({ message: "Assunto inválido." }), { status: 400 });
    }

    if (!message || message.trim().length < 10) {
      return new Response(JSON.stringify({ message: "Mensagem muito curta." }), { status: 400 });
    }

    await db.collection("contacts").add({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return new Response(JSON.stringify({ message: "Contato enviado com sucesso." }), { status: 200 });
  } catch (error) {
    console.error("Erro no contato:", error);
    return new Response(JSON.stringify({ message: "Erro interno do servidor." }), { status: 500 });
  }
}
