import React, { useState, useEffect } from 'react'
import Header from './components/ui/Header'
import PlayerGrid from './components/playerinfo/PlayerGrid'
import './App.css';
import Search from './components/ui/Search'
import Axios from 'axios';

const App = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [stats, setStats] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {
        const fetchItems = async () => {
            const values = await Promise.all([
              Axios.get("https://www.balldontlie.io/api/v1/players?per_page=100&page=33"),
              Axios.get("https://www.balldontlie.io/api/v1/players?per_page=100&page=29"),
              Axios.get("https://www.balldontlie.io/api/v1/players?per_page=100&page=25")
            ])

            const result = values
            console.log(result[0].data.data)
            console.log(result[0].data.data[0])
            var filtered = result[2].data.data.filter(players => players.team.id ===5);
            var index;
            var statid = [];
            for (index=0; index<filtered.length; index++){
              statid[index] = filtered[index].id
            }
            const stat = await Promise.all([
              Axios.get("https://www.balldontlie.io/api/v1/season_averages?season=1991&player_ids[]="+statid[0]),
              Axios.get("https://www.balldontlie.io/api/v1/season_averages?season=1991&player_ids[]="+statid[1]),
              Axios.get("https://www.balldontlie.io/api/v1/season_averages?season=1991&player_ids[]="+statid[2]),
              Axios.get("https://www.balldontlie.io/api/v1/season_averages?season=1991&player_ids[]="+statid[3]),
              Axios.get("https://www.balldontlie.io/api/v1/season_averages?season=1991&player_ids[]="+statid[4]),
              Axios.get("https://www.balldontlie.io/api/v1/season_averages?season=1991&player_ids[]="+statid[5]),
              Axios.get("https://www.balldontlie.io/api/v1/season_averages?season=1991&player_ids[]="+statid[6]),
              Axios.get("https://www.balldontlie.io/api/v1/season_averages?season=1991&player_ids[]="+statid[7]),
              Axios.get("https://www.balldontlie.io/api/v1/season_averages?season=1991&player_ids[]="+statid[8]),
              Axios.get("https://www.balldontlie.io/api/v1/season_averages?season=1991&player_ids[]="+statid[9]),
              Axios.get("https://www.balldontlie.io/api/v1/season_averages?season=1991&player_ids[]="+statid[10]),
              Axios.get("https://www.balldontlie.io/api/v1/season_averages?season=1991&player_ids[]="+statid[11])
            ])
            console.log(stat[11].data.data[0].ast)
            console.log(stat[0].data)
            setStats(stat)
            setItems(filtered)
            setIsLoading(false)
    }
        fetchItems()
    }, [])
    return (
        <div className = 'container' > 
            <Header />    
            <Search getQuery={(q) => setQuery(q)} />
            <PlayerGrid isLoading={isLoading} items={items} stats={stats}/>
        </div>
    )
}

export default App