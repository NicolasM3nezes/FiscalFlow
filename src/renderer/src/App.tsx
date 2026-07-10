function App() {
  async function abrirWorkMotor() {
    const result = await window.fiscalFlow.workmotor.open();

    console.log(result);
  }

  return (
    <div>
      <button onClick={abrirWorkMotor}>
        Abrir WorkMotor
      </button>
    </div>
  );
}

export default App;