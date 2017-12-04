import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import HiraganaStudy from './hiragana/HiraganaStudy'
import HiraganaRandomQuestion from './hiragana/HiraganaRandomQuestion'
import HiraganaFullQuestion from './hiragana/HiraganaFullQuestion'

class Router extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hiragana/study" component={HiraganaStudy} />
          <Route path="/hiragana/random" component={HiraganaRandomQuestion} />
          <Route path="/hiragana/full" component={HiraganaFullQuestion} />
        </Switch>
      </div>
    )
  }
}

export default Router
