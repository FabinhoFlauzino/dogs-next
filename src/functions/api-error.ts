type ErrorProps = {
  data: null
  ok: false,
  error: string
}

export default function apiError(error: unknown): ErrorProps {
  if (error instanceof Response) {
    switch (error.status) {
      case 400:
        return { data: null, ok: false, error: "Dados inválidos fornecidos." };
      case 401:
        return { data: null, ok: false, error: "Não autorizado." };
      default:
        return { data: null, ok: false, error: "Erro desconhecido na API." };
    }
  }
  
  return {
    data: null,
    ok: false,
    error: error instanceof Error ? error.message : "Erro ao processar a requisição.",
  };
}