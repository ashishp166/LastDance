import React from 'react'


const PlayerCard = ({ info, index }) => {
    var name = info[index][0].last_name
    console.log(name)
    var stats = info[index][1].data.data[0]
    var eff = stats.pts + stats.reb + stats.ast + stats.stl + stats.blk - ((stats.fga - stats.fgm) + (stats.fta - stats.ftm) + stats.turnover)
    var rounded_eff = eff.toFixed(2)
    return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
        <img src={require('../../img/players/' + name + '.jpg')} alt ='' />
        </div>
        <div className='card-back'>
          <h1>{info[index][0].first_name} {info[index][0].last_name}</h1>
          <ul>
            <li>
              <strong>Points</strong> {stats.pts}
            </li>
            <li>
              <strong>Assists</strong> {stats.ast}
            </li>
            <li>
              <strong>Rebounds</strong> {stats.reb}
            </li>
            <li>
              <strong>Steals</strong> {stats.stl}
            </li>
            <li>
              <strong>Blocks</strong> {stats.blk}
            </li>
            <li>
              <strong>FG%</strong> {stats.fg_pct}
            </li>
            <li>
              <strong>Turnover</strong> {stats.turnover}
            </li>
            <li>
              <strong>Efficency</strong> {rounded_eff}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard

