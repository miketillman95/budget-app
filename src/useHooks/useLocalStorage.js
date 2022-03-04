import { useState, useEffect } from "react"

// local storage hook to keep budget data on page

export default function useLocalStorage(key, defaultValue){
    const [ value, setValue] = useState(() => {
        const jsonValue= localStorage.getItem(key)
        if(jsonValue != null) return JSON.parse(jsonValue)

        if(typeof defaultValue ==='function'){
            return defaultValue()
        } else{
            return defaultValue
        }
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

return [value, setValue]

}