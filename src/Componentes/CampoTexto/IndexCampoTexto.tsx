
import './CampoTexto.css'

const CampoTexto = () => {
  return (
    <div className='campo-texto'>
      <label>Nome</label>
      <input type="text" name="nome" placeholder="Digite o seu nome" />
    </div>
  )
}

export default CampoTexto