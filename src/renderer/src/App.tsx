function App() {
  async function openBrowser() {
    const result = await window.fiscalFlow.browser.open();

    console.log(result);
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={openBrowser}>
        Abrir Chromium
      </button>
    </div>
  );
}

export default App;