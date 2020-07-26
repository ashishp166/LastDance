import React from 'react'
import PlayerCard from './PlayerCard'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({items, isLoading, stats}) => {
    let zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]); 
    const info = zip(items, stats)
    console.log(info)
    return isLoading ? (
        <Spinner />
        ): (
        <section className = 'cards'>
    {info.map((item, index, stats) => (
            <PlayerCard key={info.index} info={info} index = {index}></PlayerCard>
        ))}
    </section>)
}

export default CharacterGrid
