import React, { useEffect, useState } from "react";
import { Streamlit } from "streamlit-component-lib";

// Importe aqui a biblioteca do seu gráfico Gantt em JS
// Exemplo: import GanttChart from 'gantt-library';
// Como não temos a biblioteca real, vamos simular a lógica de um gráfico Gantt.

/**
 * Componente React que atua como o "Wrapper" para o gráfico Gantt em JavaScript.
 * Ele recebe os dados do Python, renderiza o Gantt e envia dados de volta.
 */
const GanttWrapper = (props) => {
  // Estado local para simular os dados do Gantt e permitir modificações
  const [ganttData, setGanttData] = useState(props.args.gantt_data);

  // 1. Receber dados do Python (props.args.gantt_data)
  useEffect(() => {
    // Sempre que os dados do Python mudarem, atualize o estado local
    setGanttData(props.args.gantt_data);
    // Notifica o Streamlit que o componente está pronto e qual é sua altura
    Streamlit.setFrameHeight();
  }, [props.args.gantt_data]);

  // 2. Simular a lógica de interação do Gantt (ex: arrastar e soltar)
  // Esta função simula uma modificação nos dados que seria feita pelo usuário
  // ao interagir com o gráfico Gantt (ex: mudar a data de término de uma tarefa).
  const handleGanttInteraction = () => {
    console.log("Simulando interação do usuário no Gantt...");
    
    // Simulação: Modificar a primeira tarefa
    const newData = [...ganttData];
    if (newData.length > 0) {
        // Simula a mudança de progresso e data de término
        newData[0].progress = 100;
        newData[0].end = "2025-11-04"; // Data anterior para mostrar a mudança
        
        // 3. Enviar dados de volta ao Python
        // Esta é a "ponte" de comunicação sem URL!
        Streamlit.setComponentValue(newData);
        
        // Atualiza o estado local para refletir a mudança no frontend
        setGanttData(newData);
        
        console.log("Dados atualizados enviados para o Python via Streamlit.setComponentValue");
    }
  };

  // 4. Renderizar o Gantt (ou um placeholder)
  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h3>Gantt Wrapper (Frontend JS)</h3>
      <p>Dados recebidos do Python:</p>
      <pre style={{ maxHeight: "150px", overflowY: "auto", fontSize: "10px" }}>
        {JSON.stringify(ganttData, null, 2)}
      </pre>
      
      {/* Aqui é onde você integraria o seu componente Gantt real */}
      {/* Exemplo: <GanttChart data={ganttData} onDataChange={handleGanttInteraction} /> */}
      
      <p>
        <strong>Atenção:</strong> A comunicação de volta ao Python é feita através de 
        <code>Streamlit.setComponentValue(dados_atualizados)</code>.
      </p>
      
      {/* Botão para simular a interação do usuário e enviar dados de volta */}
      <button onClick={handleGanttInteraction} style={{ padding: "10px", cursor: "pointer" }}>
        Simular Interação e Enviar Dados Atualizados para o Python
      </button>
      
      <p style={{ marginTop: "10px", color: 'green' }}>
        Valor atual no Python: {props.args.gantt_data === ganttData ? "Não atualizado" : "Atualizado (verifique o console)"}
      </p>
    </div>
  );
};

export default GanttWrapper;
