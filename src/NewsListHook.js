import { useEffect, useState } from "react";
import NewsDetailsHook from "./NewsDetailsHook";
import NewsHook from "./NewsHook";

export default function NewsListHook(){
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [showDetails,setShowDetails] = useState(false)
    const [news,setNews] = useState({})

    useEffect(()=> {
        fetch('https://hn.algolia.com/api/v1/search?query=reactjs')
        .then(res => res.json())
        .then(data => setData(data.hits))
        .catch(e => setError(e))
        .finally(()=> setIsLoading(false))
    }, [])

    const goBack = () => setShowDetails(false)

    if(showDetails)
        return <NewsDetailsHook goBack={goBack} data={news} />

    if(isLoading)
        return <div>Chargement En cours</div>
    if(error)
        return <div>Une erreur est survenue !</div>

    return <div>
        <h1>Liste des News</h1>
        {data.map(d => <NewsHook data={d} key={d.objectID} onClick={() =>{
            setShowDetails(true)
            setNews(d)
        }} /> )}
    </div>
}