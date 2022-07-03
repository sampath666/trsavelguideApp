import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Card from './Card'
import './App.css'

const travelGuidePackagesApiUrl = 'https://apis.ccbp.in/tg/packages'

class App extends Component {
  state = {list: [], isLoading: false}

  componentDidMount() {
    this.onDownload()
  }

  onDownload = async () => {
    this.setState({isLoading: true})
    const fetechedResponse = await fetch(travelGuidePackagesApiUrl)
    const fetechedData = await fetechedResponse.json()
    console.log(fetechedData)
    this.setState({list: fetechedData.packages, isLoading: false})
  }

  render() {
    const {isLoading, list} = this.state
    return (
      <div className="d1">
        <h1 className="h1">Travel Guide</h1>
        {isLoading ? (
          <div className="d3">
            <div testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          </div>
        ) : (
          <ul className="d2">
            {list.map(each => (
              <Card Obj={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default App
