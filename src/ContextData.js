import React, { useState } from 'react'

export const Context = React.createContext()

const ContextData = ({ children }) => {
    const [games, setGames] = useState([])
    const [singleGame, setSingleGame] = useState([])
    const [log, setLog] = useState(false);

    return (
        <Context.Provider value={ { games, setGames, singleGame, setSingleGame, log, setLog } }>
            {children}
        </Context.Provider>
    )
}

export default ContextData