import React from 'react'
import { hiragana } from '../../data/hiragana'
import { divideWithFive } from '../../utils'

class HiraganaStudy extends React.Component {
  render() {
    const hiraganaArray = divideWithFive(hiragana)
    return (
      <div>
        {hiraganaArray.map(hiraganaRow => {
          return (
            <div key={hiraganaRow.id}>
              {hiraganaRow.map(cha => {
                return (
                  <div key={cha.id}>
                    {cha.jap} {cha.roman}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

export default HiraganaStudy
