import React from 'react'
import { useState } from 'react'
import Button from '../components/Button'

export default function RickRoll() {

  const [rickRolls, setRickRolls] = useState([]);

  function rick(event){
    // generate new rick
    const url = 'https://c.tenor.com/q0Ejci9EQhcAAAAi/rick-astley-rick-roll.gif';
    setRickRolls([
      ...rickRolls,
      url,
    ]);
  }

  return (
    <div>
      <Button onClick={rick}>Rickroll</Button>

      <section>
        {/* rick rolls... */}

        {rickRolls.map(url => (
          <img src={url} alt="you just got rick rolled" />
        ))}

      </section>


    </div>
  )
}
