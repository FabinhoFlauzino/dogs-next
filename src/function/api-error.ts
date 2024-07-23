type ErrorType = {
  data: null
  ok: false
  error: string
}

export default function ApiError(error: unknown): ErrorType {
  if (error instanceof Error) {
    return {
      data: null,
      ok: false,
      error: error.message
    }
  } else {
    return {
      data: null,
      ok: false,
      error: "Ocorreu um erro"
    }
  }
}