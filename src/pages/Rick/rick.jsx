
import { useEffect, useState } from 'react'
import { getCharacters } from '../../../api/charaters'
import { Link } from 'react-router-dom'

 
 
function Rick() {
  const [conteudo, setConteudo] = useState(<>Carregando</>)
 
  
 
  async function TransformaEmLista() {
    const todosPersonagens = await getCharacters()
 
    return todosPersonagens.map(personagem =>
      <div className='card char' key={personagem.id}>
        <img src={personagem.image} alt={`Foto de ${personagem.name}`} />
        <h2>{personagem.name}</h2>
        <div className='char-info'>
          <span><b>Espécie: </b> {personagem.species} </span>
          <span><b>Gênero: </b> {personagem.gender} </span>
        </div>
 
        <div>
          <div className='lista-secundaria'>
            <b>Participacões: </b>
          </div>
          <h5><b>Status: </b> {personagem.status}</h5>
        </div>
      </div>
    )
  }
 
  useEffect(() => {
    async function carregar() {
      setConteudo(
        await TransformaEmLista()
      )
    }
    carregar()
  }, [])
 
  return (
    <>
      <main>
        <Link to='/'>
        <button>
            voltar para home
        </button>
        </Link>
        {/* Filtros */}
        <div className='lista-principal'>
          {conteudo}
        </div>
      </main>
      
    </>
  )
}
 
export default Rick