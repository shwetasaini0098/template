function Templates() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Templates</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={{ border: "1px solid #ccc", padding: "15px" }}>
          <h3>Business Website</h3>
          <p>Professional template for businesses.</p>
          <button>View Template</button>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "15px" }}>
          <h3>Medical Store</h3>
          <p>Perfect template for medical shops.</p>
          <button>View Template</button>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "15px" }}>
          <h3>Portfolio Website</h3>
          <p>Great for showcasing your work.</p>
          <button>View Template</button>
        </div>
      </div>
    </div>
  );
}

export default Templates;
