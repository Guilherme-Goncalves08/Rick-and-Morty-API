import api from "./api"


export const getCharacters = async () =>{
    const response = await api.get('/character')
    
    if(response.status !== 200){
        return[]
    }
    console.log('reponse do AXIOS', response)
    return response.data.results
}