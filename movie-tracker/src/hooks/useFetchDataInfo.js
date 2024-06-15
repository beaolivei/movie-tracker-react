import { useEffect, useState } from "react"

const useFetchShow = (searchTerm) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
        .then((response) => response.json())
        .then((response) => setData(response))
      }, [searchTerm])

      return data
}
export default useFetchShow