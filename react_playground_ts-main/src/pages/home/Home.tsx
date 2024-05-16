
interface homeProps {
  titulo: string;
  texto: string;
}

function Home(props: homeProps) {
  return (
    <div>
      <div>Componente Home</div>
      <div>
        <h2>{props.titulo}</h2>
        <p>{props.texto}</p>
      </div>
    </div>
  )
}


export default Home