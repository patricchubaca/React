
import CampoTexto from "../CampoTexto/IndexCampoTexto"
import "./Formulario.css"

function Formulario() {
  return (
    <section >
      <form >
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <CampoTexto label="Time" placeholder="Digite os integrantes do seu time" />
      </form>
    </section>

  )

}

export default Formulario