import { NextResponse } from "next/server";
import { chatSession } from "@/configs/AiModel";

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    
    // Envía el prompt con instrucciones estrictas
    const result = await chatSession.sendMessage(`
      ${prompt}
      
      INSTRUCCIONES ESTRICTAS DE FORMATO:
      1. SOLO texto plano
      2. Prohibido usar [] {} o cualquier formato JSON
      3. Usar markdown simple (* para listas)
      4. Ejemplo de respuesta válida:
      "Implementaré:
      * Diseño minimalista
      * Tipografía moderna
      * Efectos de transparencia"
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