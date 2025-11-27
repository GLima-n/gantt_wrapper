import os
import streamlit.components.v1 as components

# Define o caminho para o diretório frontend (onde estará o index.html e o bundle.js)
_RELEASE = True # Mudar para False durante o desenvolvimento
if not _RELEASE:
    _component_func = components.declare_component(
        "gantt_wrapper",
        url="http://localhost:3001", # Porta do servidor de desenvolvimento do frontend
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("gantt_wrapper", path=build_dir)

def gantt_wrapper(gantt_data, key=None):
    """
    Cria um componente Wrapper para o gráfico Gantt em JavaScript.

    :param gantt_data: Os dados do Gantt a serem passados para o JavaScript.
    :param key: Uma chave opcional para o componente Streamlit.
    :return: O valor retornado pelo componente JavaScript (dados atualizados).
    """
    component_value = _component_func(gantt_data=gantt_data, key=key, default=None)
    return component_value

if __name__ == "__main__":
    import streamlit as st
    import json
    
    st.set_page_config(layout="wide")
    st.title("Exemplo de Uso do Gantt Wrapper")

    # Dados de exemplo para o Gantt (simulando o formato que o JS espera)
    # Estes dados devem ser adaptados para o formato exato do seu gráfico Gantt JS
    exemplo_data = [
        {"id": "1", "name": "Tarefa A", "start": "2025-11-01", "end": "2025-11-05", "progress": 50},
        {"id": "2", "name": "Tarefa B", "start": "2025-11-06", "end": "2025-11-10", "progress": 10},
        {"id": "3", "name": "Tarefa C", "start": "2025-11-03", "end": "2025-11-08", "progress": 90},
    ]

    st.subheader("Dados enviados para o Gantt JS:")
    st.json(exemplo_data)

    # Chama o componente
    updated_data = gantt_wrapper(gantt_data=exemplo_data, key="my_gantt")

    st.subheader("Dados recebidos do Gantt JS (após interação):")
    if updated_data is not None:
        st.json(updated_data)
        st.success("Comunicação Python <- JS bem-sucedida!")
    else:
        st.info("Aguardando interação no gráfico Gantt...")

    # Exemplo de como o valor retornado pode ser usado
    if updated_data:
        st.write(f"Primeira tarefa atualizada (ID {updated_data[0]['id']}): {updated_data[0]['name']}")
