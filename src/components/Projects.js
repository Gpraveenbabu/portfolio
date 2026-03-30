function Projects() {
  return (
    <div id="projects">
      <h2>Projects</h2>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "25px",
        flexWrap: "wrap"
      }}>

        {["AI PDF Chatbot", "Dashboard", "Web Apps"].map((title, i) => (
          <div
            key={i}
            className="glass"
            style={{
  zIndex: 1,
              padding: "25px",
              width: "260px",
              transition: "0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
            }}
          >
            <h3 style={{ color: "#C084FC" }}>{title}</h3>
            <p>High-quality project showcasing modern development skills.</p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Projects;