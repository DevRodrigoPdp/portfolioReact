import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const query = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              color
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

export const GithubActivity = () => {
  const username = "DevRodrigoPdp";
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  const [calendar, setCalendar] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query, variables: { username } }),
      });

      const json = await response.json();
      setCalendar(json.data?.user?.contributionsCollection?.contributionCalendar);
    };

    fetchData();
  }, [token]);

  if (!calendar) {
    return (
      <p className="text-center text-gray-400 mt-20">
        Cargando actividad de GitHub…
      </p>
    );
  }

  return (
    <section className="py-20">
      {/* TÍTULO */}
      <h2 className="text-4xl font-extrabold text-white mb-4">
        Actividad en GitHub
      </h2>

      <div className="h-[4px] w-28 bg-gradient-to-r from-[#00ffae] to-[#6f42c1] mb-12 rounded-full" />

      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          backdrop-blur-xl bg-white/5 
          border border-white/10 
          shadow-2xl 
          rounded-3xl 
          p-10 
          max-w-4xl 
          mx-auto
        "
      >
        
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-[5px] justify-center">
            {calendar.weeks.map((week, i) => (
              <div key={i} className="flex flex-col gap-[5px]">
                {week.contributionDays.map((day, j) => (
                  <motion.div
                    key={j}
                    className="
                      w-4 h-4 sm:w-[18px] sm:h-[18px]
                      rounded-[5px]
                      transition-all
                    "
                    title={`${day.contributionCount} contribuciones — ${day.date}`}
                    style={{
                      backgroundColor: day.color,
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                    whileHover={{
                      scale: 1.8,
                      boxShadow: "0 0 18px #00ffae",
                      zIndex: 20,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        
        <p className="text-gray-400 text-sm mt-6 text-center">
          Incluye contribuciones privadas y públicas — actualizado al instante.
        </p>
      </motion.div>
    </section>
  );
};
