import React, { useEffect, useState } from 'react'

export const Context = React.createContext()

const ContextData = ({ children }) => {
    const [games, setGames] = useState([])
    const [singleGame, setSingleGame] = useState([])
    const [featuredGames, setFeaturedGames] = useState([])
    const [log, setLog] = useState(false);

    useEffect(() => {
        fetch('https://api.steamapis.com/market/apps?api_key=USh9nTgdKcpomNdTTl-Iok0OjDA')
        .then(response => response.json())
        .then(data => {
            console.log('DATA', data, data.find(item => item.name === '7 Days to Die'))
            console.log('Context', featuredGames, data[Math.floor(Math.random() * data.length)])
            setGames(prev => prev.concat(data))

            for (let i = 0; i < 12; i++) {
                fetch(`https://api.steamapis.com/market/app/${ data[Math.floor(Math.random() * data.length)].appID }?api_key=USh9nTgdKcpomNdTTl-Iok0OjDA`)
                .then(response => response.json())
                .then(single => {
                    
                    setFeaturedGames(prev => prev.concat(single))
                    
                })
                setSingleGame(prev => prev.concat(
                    data.filter(name => name === data.find(item => item['Rimworld']))
                ))
            }
            
            
            
        })
        .catch(error => console.log(error))
    }, [])
    

    return (
        <Context.Provider value={ { games, setGames, singleGame, setSingleGame, featuredGames, log, setLog } }>
            {children}
        </Context.Provider>
    )
}

export default ContextData