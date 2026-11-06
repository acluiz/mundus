const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function get<T>(
  path: string,
  params: Record<string, string> = {},
  signal?: AbortSignal,
): Promise<T> {
  const url = new URL(`${BASE_URL}${path}`);
  Object.entries(params).forEach(([key, value]) =>
    url.searchParams.set(key, value),
  );

  const response = await fetch(url, {
    signal,
    headers: API_KEY ? { Authorization: `Bearer ${API_KEY}` } : undefined,
  });

  if (!response.ok) {
    throw new ApiError(response.status, `Request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
