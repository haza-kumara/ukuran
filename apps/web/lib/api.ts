export type HealthResponse = {
  status: "healthy";
  service: string;
  version: string;
};

function getApiUrl(): string {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("NEXT_PUBLIC_API_URL belum dikonfigurasi");
  }

  return apiUrl;
}

export async function getApiHealth(): Promise<HealthResponse> {
  const response = await fetch(`${getApiUrl()}/health`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `API mengembalikan status ${response.status}`,
    );
  }

  return response.json() as Promise<HealthResponse>;
}
