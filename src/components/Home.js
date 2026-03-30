function Home() {
  return (
    <div id="home">
      <h1>Praveen Babu</h1>
      <p style={{ fontSize: "18px", opacity: 0.8 }}>
        AI Engineer • Full Stack Developer • Researcher
      </p>

      <div style={{ marginTop: "30px" }}>
        <button style={{
          padding: "12px 24px",
          marginRight: "10px",
          background: "linear-gradient(135deg, #C084FC, #F472B6)",
          border: "none",
          borderRadius: "10px",
          color: "white",
          cursor: "pointer",
          transition: "0.3s"
        }}>
          View Work
        </button>

        <button style={{
          padding: "12px 24px",
          background: "transparent",
          border: "1px solid #22D3EE",
          borderRadius: "10px",
          color: "#22D3EE",
          cursor: "pointer"
        }}>
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Home;