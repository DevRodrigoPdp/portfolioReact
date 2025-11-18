import React, { useEffect, useState } from "react";

export const GithubActivity = () => {
  const username = "DevRodrigoPdp"; 
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://github-contributions-api.deno.dev/${username}.json`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  if (!data) {
    return <p className="text-gray-400 text-center mt-10">Cargando actividad…</p>;
  }

  return (
    <div className="mt-24">
      {/* Título */}
      <h2 className="text-3xl font-bold text-white mb-3">Actividad en GitHub</h2>
      <div className="h-[4px] w-20 bg-gradient-to-r from-[#00ffae] to-[#63e] mb-10" />

      
      <div className="overflow-x-auto">
        <div className="flex gap-1">
          {data.contributions.map((week, i) => (
            <div key={i} className="flex flex-col gap-1">
              {week.map((day, j) => (
                <div
                  key={j}
                  title={`${day.count} contribuciones - ${day.date}`}
                  className={`
                    w-4 h-4 rounded-sm transition
                    ${day.count === 0 ? "bg-[#1e1e1e]" : ""}
                    ${day.count > 0 && day.count <= 2 ? "bg-[#0c8c63]" : ""}
                    ${day.count > 2 && day.count <= 5 ? "bg-[#00ffae]" : ""}
                    ${day.count > 5 ? "bg-[#3bffcf]" : ""}
                    hover:scale-110 hover:brightness-125
                  `}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ENLACE */}
      <div className="mt-3 text-right">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00ffae] hover:underline text-sm"
        >
          Ver en GitHub →
        </a>
      </div>
    </div>
  );
};
