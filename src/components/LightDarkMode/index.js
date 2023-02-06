// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {text: 'Light Mode', mode: 'dark', heading: 'darkModeHeading'}

  modeChange = () => {
    this.setState(prevState => {
      if (prevState.text === 'Light Mode') {
        return {text: 'Dark Mode', mode: 'light', heading: 'lightModeHeading'}
      }
      return {text: 'Light Mode', mode: 'dark', heading: 'darkModeHeading'}
    })
  }

  render() {
    const {text, mode, heading} = this.state
    return (
      <div className="container">
        <div className={`${mode} modeContainer`}>
          <h1 className={heading}> Click To Change Mode </h1>
          <button type="button" className="btn" onClick={this.modeChange}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
