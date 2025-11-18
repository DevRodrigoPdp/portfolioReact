import React, { useEffect, useState } from "react";

export const GithubActivity = () => {
  const username = "TU_USUARIO"; // <-- CAMBIA ESTO

  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${DevRodrigoPdp}`
        );
        const data = await res.json();
        setStats(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-white mb-3">
        Actividad en GitHub
      </h2>
      <div className="h-[4px] w-20 bg-gradient-to-r from-[#00ffae] to-[#63e] mb-10" />

      {/* Contribution Graph */}
      <div className="flex justify-center mb-12">
        <img
          src={`https://ghchart.rshah.org/00ffae/${username}`}
          alt="GitHub contribution chart"
          className="w-full max-w-4xl rounded-lg shadow-lg"
        />
      </div>

      {loading && (
        <p className="text-center text-gray-400">Cargando estadísticas…</p>
      )}

      {!loading && stats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1a1a1a] border border-[#00ffae]/30 rounded-xl p-6 shadow-lg">
            <p className="text-[#00ffae] text-sm font-semibold uppercase">
              Repos públicos
            </p>
            <p className="text-3xl font-bold text-white mt-2">
              {stats.public_repos}
            </p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#00ffae]/30 rounded-xl p-6 shadow-lg">
            <p className="text-[#00ffae] text-sm font-semibold uppercase">
              Seguidores
            </p>
            <p className="text-3xl font-bold text-white mt-2">
              {stats.followers}
            </p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#00ffae]/30 rounded-xl p-6 shadow-lg">
            <p className="text-[#00ffae] text-sm font-semibold uppercase">
              Siguiendo
            </p>
            <p className="text-3xl font-bold text-white mt-2">
              {stats.following}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
