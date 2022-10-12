
import './CampoTexto.css'

const CampoTexto = (props: any) => {
  console.log(props.nome);
  return (
    <div className='campo-texto'>
      <label>{props.label}</label>
      <input type="text" name="nome" placeholder={props.placeholder} />
    </div>
  )
}

export default CampoTexto