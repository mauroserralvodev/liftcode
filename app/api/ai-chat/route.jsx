import { NextResponse } from "next/server";
import { chatSession } from "@/configs/AiModel";

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    
    // Envía el prompt con instrucciones estrictas
    const result = await chatSession.sendMessage(`
      ${prompt}
      
      STRICT FORMATTING INSTRUCTIONS:
      1. plain text ONLY
      2. Forbidden to use [] {} or any JSON formatting
      3. Use simple markdown (* for lists)
      4. Example of valid response:
      “I will implement:
      * Minimalist design
      * Modern typography
      * Transparency effects”.
    `);

    // Extracción y limpieza agresiva
    let cleanText = result.response.text()
      .replace(/^[\s\[]*\{[^}]*"content"\s*:\s*"/, '') // Elimina todo hasta content
      .replace(/"\s*\}\s*\]\s*$/, '')                 // Elimina todo después del texto
      .replace(/\\n/g, '\n')                          // Convierte saltos de línea
      .trim();

    // Validación final
    if (!cleanText) {
      throw new Error("Respuesta vacía del modelo AI");
    }

    return NextResponse.json({ 
      result: cleanText 
    });

  } catch (error) {
    console.error("Error en API:", error);
    return NextResponse.json(
      { 
        result: "Disculpa, ocurrió un error al procesar tu solicitud" 
      },
      { status: 500 }
    );
  }
}