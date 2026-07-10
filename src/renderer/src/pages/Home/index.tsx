export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111827",
        color: "#fff",
      }}
    >
      <div
        style={{
          width: 700,
          padding: 30,
          background: "#1F2937",
          borderRadius: 12,
        }}
      >
        <h1>FiscalFlow</h1>

        <p>Automação para emissão de documentos fiscais.</p>

        <hr />

        <h3>Status</h3>

        <p>🔴 Desconectado</p>

        <button>Abrir WorkMotor</button>

        <hr />

        <h3>Logs</h3>

        <p>Sistema iniciado...</p>
      </div>
    </div>
  );
}