# Gantt Wrapper Streamlit Component

Este é um componente Streamlit personalizado que atua como um "Wrapper" para um gráfico Gantt em JavaScript. Ele permite a comunicação bidirecional:

1.  **Python -> JS:** Envia os dados do Gantt para o frontend JavaScript.
2.  **JS -> Python:** Envia os dados atualizados do Gantt de volta para o script Python usando a API `Streamlit.setComponentValue()`, sem a necessidade de URLs ou endpoints de servidor tradicionais.

## Uso

Para usar este componente, você deve:

1.  **Instalar** o componente Python.
2.  **Construir** o frontend JavaScript (que contém a lógica do seu gráfico Gantt).
3.  **Importar** e usar a função `gantt_wrapper` no seu script Streamlit principal.

**Atenção:** O arquivo `gantt_wrapper/frontend/src/GanttWrapper.js` contém um placeholder. Você deve substituir o placeholder pela lógica de inicialização e manipulação do seu gráfico Gantt real.
