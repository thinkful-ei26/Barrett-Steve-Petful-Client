import React from 'react'
import Pet from './Pet'
import { connect } from 'react-redux'

import { fetchCat } from './actions/cat'
import { fetchDog } from './actions/dog'

export class DashBoard extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.dispatch(fetchCat())
    this.props.dispatch(fetchDog())
  }
  render() {
    console.log(this.props.dogData)
    if (this.props.dogData && this.props.catData) {
      return (
        <div>
          <Pet
            petToAdopt={{
              imageURL: this.props.catData.imageURL,
              imageDescription: this.props.catData.imageDescription,
              name: this.props.catData.name,
              sex: this.props.catData.sex,
              age: this.props.catData.age,
              breed: this.props.catData.breed,
              story: this.props.catData.story
            }}
            onAdoptPet={() => {
              this.props.dispatch(fetchCat())
            }}
          />

          <Pet
            petToAdopt={{
              imageURL: this.props.dogData.imageURL,
              imageDescription: this.props.dogData.imageDescription,
              name: this.props.dogData.name,
              sex: this.props.dogData.sex,
              age: this.props.dogData.age,
              breed: this.props.dogData.breed,
              story: this.props.dogData.story
            }}
            onAdoptPet={() => {
              this.props.dispatch(fetchDog())
            }}
          />
        </div>
      )
    } else {
      return <p>nothing to see here</p>
    }
  }
}

const mapStateToProps = state => {
  return {
    catData: state.cat.data,
    catError: state.cat.error,
    catSuccess: state.cat.success,

    dogData: state.dog.data,
    dogError: state.dog.error,
    dogSuccess: state.dog.success
  }
}
export default connect(mapStateToProps)(DashBoard)
