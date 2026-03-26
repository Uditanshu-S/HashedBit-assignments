import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ✅ Working Logo Mapping */
const teamLogos = {
  "Mumbai Indians": "https://upload.wikimedia.org/wikipedia/en/2/2f/Mumbai_Indians_Logo.svg",
  "Chennai Super Kings": "https://upload.wikimedia.org/wikipedia/en/2/2e/Chennai_Super_Kings_Logo.svg",
  "Royal Challengers Bangalore": "https://upload.wikimedia.org/wikipedia/en/4/4a/Royal_Challengers_Bangalore_Logo.svg",
  "Kolkata Knight Riders": "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg",
  "Delhi Capitals": "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg",
  "Punjab Kings": "https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg",
  "Rajasthan Royals": "https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg",
  "Sunrisers Hyderabad": "https://upload.wikimedia.org/wikipedia/en/8/81/Sunrisers_Hyderabad.svg"
};

function IPLTable() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then(res => res.json())
      .then(data => {
        const sorted = data.sort((a, b) => b.Pts - a.Pts); // sort by points
        setTeams(sorted);
      });
  }, []);

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>🏏 IPL 2022 Points Table</h2>

        <table style={table}>
          <thead>
            <tr style={headerRow}>
              <th>#</th>
              <th>Team</th>
              <th>M</th>
              <th>W</th>
              <th>L</th>
              <th>NRR</th>
              <th>Pts</th>
            </tr>
          </thead>

          <tbody>
            {teams.map((team, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                style={{
                  ...row,
                  background: index < 4 ? "#d4edda" : "#ffffff"
                }}
              >
                {/* Rank */}
                <td style={rank}>{index + 1}</td>

                {/* Team + Logo */}
                <td style={teamCell}>
                  <img
                    src={teamLogos[team.Team] || "https://via.placeholder.com/30"}
                    alt="logo"
                    style={logo}
                  />
                  {team.Team}
                </td>

                {/* Stats */}
                <td>{team.M}</td>
                <td style={win}>{team.W}</td>
                <td style={loss}>{team.L}</td>

                {/* NRR */}
                <td style={{ color: team.NRR > 0 ? "green" : "red" }}>
                  {team.NRR}
                </td>

                {/* Points */}
                <td style={points}>{team.Pts}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ===== STYLES ===== */

const container = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #141e30, #243b55)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px"
};

const card = {
  background: "#ffffff",
  padding: "30px",
  borderRadius: "15px",
  width: "95%",
  maxWidth: "1100px",
  boxShadow: "0 15px 40px rgba(0,0,0,0.3)"
};

const title = {
  textAlign: "center",
  marginBottom: "20px",
  color: "#2c3e50"
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "16px"
};

const headerRow = {
  background: "#1b5e20",
  color: "white",
  textAlign: "center"
};

const row = {
  textAlign: "center",
  borderBottom: "1px solid #ddd",
  transition: "0.3s"
};

const rank = {
  fontWeight: "bold"
};

const teamCell = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontWeight: "bold"
};

const logo = {
  width: "30px",
  height: "30px",
  objectFit: "contain"
};

const win = {
  color: "green",
  fontWeight: "bold"
};

const loss = {
  color: "red",
  fontWeight: "bold"
};

const points = {
  fontWeight: "bold",
  color: "#1b5e20"
};

export default IPLTable;