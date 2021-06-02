import {useState,useEffect} from 'react'
import { getGist } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    
    const [state, setstate] = useState({
        data: [],
        loading: true,
    })
    useEffect( ()=>{
        getGist(category)
            .then(imgs =>{
                setstate({
                    data:imgs,
                    loading:false
                })
            })
    }, [category])

    return state;
}
