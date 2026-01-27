import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const EXPERIENCES = [
    {
        title: "Project Intern",
        company: "National Centre for Radio Astrophysics (NCRA-TIFR)",
        date: "Jan 2026 - Present",
        location: "Pune, Maharashtra, India · On-site",
        type: "Full-time",
        skills: ["Python", "Program Creation", "RF Engineering"],
        desc: "",
    },
    {
        title: "Co-Founder",
        company: "DigiDiploma",
        date: "Aug 2025 - Present",
        location: "Pune, Maharashtra, India · On-site",
        type: "Full-time",
        link: "https://www.digidiploma.in/",
        skills: ["Start-up Leadership", "Start-up Ventures", "Program Creation"],
        desc: "",
    },
    {
        title: "Technical Team Head",
        company: "Civil Services Aspirants Club (CSAC)",
        date: "Nov 2023 - Present",
        location: "On-site",
        type: "",
        skills: ["Teamwork", "Student Club", "Team Leadership", "Adobe Photoshop"],
        desc: "Technical Team Lead From Nov - 2023",
    },
    {
        title: "Laravel Developer",
        company: "Maveric InfoTech",
        date: "Jan 2025 - Feb 2025",
        location: "Pandharpur, Maharashtra, India · Hybrid",
        type: "Internship",
        skills: ["PHP", "Laravel", "Web Development", "Developer Tools"],
        desc: "Worked on various projects involving PHP Laravel framework, showcasing the ability to develop web applications efficiently. My contributions were valuable to the team, and exhibited professionalism and enthusiasm throughout the internship period.",
    },
    {
        title: "Intern",
        company: "Prodigy InfoTech",
        date: "Nov 2023 - Dec 2023",
        location: "Remote",
        type: "Internship",
        skills: ["Python", "Data Analysis", "Problem Solving", "Data Science", "Multi-site"],
        desc: "",
    },
    {
        title: "Web Development Intern",
        company: "Maveric InfoTech",
        date: "Jul 2022 - Aug 2022",
        location: "Pandharpur, Maharashtra, India · On-site",
        type: "Internship",
        skills: ["Front-End Development", "Problem Solving", "HTML", "Bootstrap"],
        desc: "",
    },
];

export default function Experience() {
    return (
        <div
            style={{
                minHeight: "100vh",
                width: "100%",
                padding: "4rem 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                    width: "100%",
                    maxWidth: "900px",
                }}
            >
                <h2
                    style={{
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        marginBottom: "2rem",
                        textAlign: "center",
                        background: "linear-gradient(90deg, #00c6ff, #0072ff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "#00c6ff",
                    }}
                >
                    Work Experience 💼
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    {EXPERIENCES.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            style={{
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                borderRadius: "16px",
                                padding: "2rem",
                                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                                backdropFilter: "blur(5px)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                            }}
                        >
                            {/* Header: Title & Date */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    flexWrap: "wrap",
                                    gap: "1rem",
                                    alignItems: "flex-start",
                                }}
                            >
                                <div>
                                    <h3
                                        style={{
                                            fontSize: "1.5rem",
                                            fontWeight: "600",
                                            color: "#fff",
                                            marginBottom: "0.25rem",
                                        }}
                                    >
                                        {exp.title}
                                    </h3>
                                    <div
                                        style={{
                                            fontSize: "1.1rem",
                                            color: "#00c6ff",
                                            fontWeight: "500",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                        }}
                                    >
                                        <Briefcase size={18} />
                                        {exp.company}
                                        {exp.type && (
                                            <span
                                                style={{
                                                    fontSize: "0.85rem",
                                                    background: "rgba(0, 198, 255, 0.15)",
                                                    padding: "2px 8px",
                                                    borderRadius: "12px",
                                                    color: "#80e0ff",
                                                    marginLeft: "0.5rem",
                                                }}
                                            >
                                                {exp.type}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        color: "#aaa",
                                        fontSize: "0.95rem",
                                        background: "rgba(255,255,255,0.05)",
                                        padding: "6px 12px",
                                        borderRadius: "20px",
                                    }}
                                >
                                    <Calendar size={16} />
                                    {exp.date}
                                </div>
                            </div>

                            {/* Location & Link */}
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "1.5rem",
                                    color: "#ccc",
                                    fontSize: "0.95rem",
                                }}
                            >
                                {exp.location && (
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                                        <MapPin size={16} color="#aaa" /> {exp.location}
                                    </div>
                                )}
                                {exp.link && (
                                    <a
                                        href={exp.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.4rem",
                                            color: "#00c6ff",
                                            textDecoration: "none",
                                        }}
                                    >
                                        <ExternalLink size={16} /> Link
                                    </a>
                                )}
                            </div>

                            {/* Description */}
                            {exp.desc && (
                                <p style={{ color: "#ddd", lineHeight: "1.6", fontSize: "1rem" }}>
                                    {exp.desc}
                                </p>
                            )}

                            {/* Skills */}
                            {exp.skills && exp.skills.length > 0 && (
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "0.5rem" }}>
                                    {exp.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            style={{
                                                fontSize: "0.85rem",
                                                color: "#fff",
                                                background: "rgba(255, 255, 255, 0.1)",
                                                padding: "4px 10px",
                                                borderRadius: "6px",
                                                border: "1px solid rgba(255, 255, 255, 0.05)",
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
