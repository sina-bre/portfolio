export class HttpError extends Error {
  readonly status: number

  constructor(status: number, url: string) {
    super(`Request to ${url} failed with ${status}`)
    this.status = status
  }
}

export async function getJson<T>(url: string, timeoutMs: number): Promise<T> {
  const response = await fetch(url, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(timeoutMs),
  })
  if (!response.ok) throw new HttpError(response.status, url)
  return response.json() as Promise<T>
}
