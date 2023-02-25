import React, { useEffect, useState } from 'react'

export const Context = React.createContext()

const ContextData = ({ children }) => {
    const [games, setGames] = useState([])
    const [singleGame, setSingleGame] = useState([])
    const [featuredGames, setFeaturedGames] = useState([])
    const [belowGames, setBelowGames] = useState([])
    const [updatedGames, setUpdatedGames] = useState([])
    const [log, setLog] = useState(false);

    const setGamePage =  (event) => {
        // USE THIS TO SET THE GAME CLICKED ON(LINK) TO THE SINGLE GAME STATE
        console.log('Event', event, event.target.dataset.appid)
        if (singleGame.length > 1) setSingleGame(current => current.filter(game => game.appID === event.target.dataset.appid))
        fetch(`https://api.steamapis.com/market/app/${ event.target.dataset.appid }?api_key=USh9nTgdKcpomNdTTl-Iok0OjDA`)
        .then(response => response.json())
        .then(data => setSingleGame(prev => prev.concat(data)))
    }

    useEffect(() => {
        fetch('https://api.steamapis.com/market/apps?api_key=USh9nTgdKcpomNdTTl-Iok0OjDA')
        .then(response => response.json())
        .then(data => {
            const randomGame = data.filter((item, index, array) => item.is_free === false ).filter(game => game.price_overview !== undefined ).filter(single => single.price_overview.final_formatted  ).filter(single => Number(single.price_overview.final_formatted.substring(1)) < 10 )
            
            console.log('DATA', data, data.find(item => item.name === '7 Days to Die'))
            console.log('Context', featuredGames, data[Math.floor(Math.random() * data.length)])
            setGames(prev => prev.concat(data))

            for (let i = 0; i < 12; i++) {
                fetch(`https://api.steamapis.com/market/app/${ data[Math.floor(Math.random() * data.length)].appID }?api_key=USh9nTgdKcpomNdTTl-Iok0OjDA`)
                .then(response => response.json())
                .then(single => {
                    
                    setFeaturedGames(prev => prev.concat(single))
                })
            }
            for (let i = 0; i < 4; i++) {
                fetch(`https://api.steamapis.com/market/app/${ randomGame[Math.floor(Math.random() * 100)].appID }?api_key=USh9nTgdKcpomNdTTl-Iok0OjDA`)
                .then(response => response.json())
                .then(single => {
                    setBelowGames(prev => prev.concat(single))
                    
                })
            }

            for (let i = 0; i < 7; i++) {
                fetch(`https://api.steamapis.com/market/app/${ data[Math.floor(Math.random() * data.length)].appID }?api_key=USh9nTgdKcpomNdTTl-Iok0OjDA`)
                .then(response => response.json())
                .then(single => {
                    
                    setUpdatedGames(prev => prev.concat(single))
                })
            }
        })
        .catch(error => console.log(error))
    }, [])
    

    return (
        <Context.Provider value={ { games, setGames, singleGame, setSingleGame, featuredGames, belowGames, updatedGames, log, setLog, setGamePage } }>
            {children}
        </Context.Provider>
    )
}

export default ContextData