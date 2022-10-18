
import CampoTexto from "../CampoTexto/IndexCampoTexto"
import "./Formulario.css"

function Formulario() {
  return (
    <section >
      <form >
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <CampoTexto label="Time" placeholder="Digite os integrantes do seu time" />
      </form>
    </section>

  )

}

export default Formulario