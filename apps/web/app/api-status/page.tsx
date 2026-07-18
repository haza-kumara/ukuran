import { getApiHealth } from "@/lib/api";

export default async function ApiStatusPage() {
  try {
    const health = await getApiHealth();

    return (
      <main className="min-h-screen bg-zinc-950 p-8 text-zinc-100">
        <div className="mx-auto max-w-xl rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h1 className="text-2xl font-semibold">
            Status ukuran API
          </h1>

          <dl className="mt-6 space-y-3">
            <div className="flex justify-between">
              <dt>Status</dt>
              <dd className="font-medium text-emerald-400">
                {health.status}
              </dd>
            </div>

            <div className="flex justify-between">
              <dt>Service</dt>
              <dd>{health.service}</dd>
            </div>

            <div className="flex justify-between">
              <dt>Version</dt>
              <dd>{health.version}</dd>
            </div>
          </dl>
        </div>
      </main>
    );
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Terjadi kesalahan tidak diketahui";

    return (
      <main className="min-h-screen bg-zinc-950 p-8 text-zinc-100">
        <div className="mx-auto max-w-xl rounded-2xl border border-red-900 bg-red-950/30 p-6">
          <h1 className="text-2xl font-semibold text-red-400">
            API tidak terhubung
          </h1>

          <p className="mt-4 text-red-200">{message}</p>
        </div>
      </main>
    );
  }
}
