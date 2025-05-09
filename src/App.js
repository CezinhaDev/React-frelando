import { Card } from "./componentes/Card/Card";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { ProvedorTema, } from "./componentes/ProvedorTema/ProvedorTema";
import { Cabecalho } from "./componentes/cabecalho/Cabecalho";
import { Tipografia } from "./componentes/Tipografia/Tipografia";
import { CampoTexto } from "./componentes/CampoTexto/CampoTexto";
import { Rodape } from "./componentes/Rodape/Rodape";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho />
      <Card>
        <Tipografia variante="h1" componente="h1">
          Freelando
        </Tipografia>
        <Tipografia variante="body" componente="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
        </Tipografia>
        <Rodape/>
        <CampoTexto titulo={"Nome completo"} />

        
      </Card>
    </ProvedorTema>
  );
}

export default App;
