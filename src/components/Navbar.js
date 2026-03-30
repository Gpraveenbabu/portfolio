function Navbar() {
  return (
    <nav style={{
      position: "fixed",
      top: "10px",
      margin: "10px auto",
      width: "90%",
      padding: "15px",
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      borderRadius: "12px",
      backdropFilter: "blur(12px)",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.1)",
      zIndex: 1000   // ✅ THIS FIXES IT
    }}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}
export default Navbar;