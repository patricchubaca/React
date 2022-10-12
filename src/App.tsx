import Banner from './Componentes/Banner/IndexBanner';
import CampoTexto from './Componentes/CampoTexto/IndexCampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite seu nome" />
      <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
      <CampoTexto label="Time" placeholder="Digite os integrantes do seu time" />
    </div>
  );
}

export default App;
