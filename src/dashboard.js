import React from 'react'
import Pet from './Pet'
import { connect } from 'react-redux'

import { fetchCat } from './actions/cat'
import { fetchDog } from './actions/dog'

export function DashBoard(props) {
  return (
    <div>
      <Pet
        petToAdopt={{
          imageURL:
            'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
          imageDescription:
            'Orange bengal cat with black stripes lounging on concrete.',
          name: 'Fluffy',
          sex: 'Female',
          age: 2,
          breed: 'Bengal',
          story: 'Thrown on the street'
        }}
        onAdoptPet={() => {
          props.dispatch(fetchCat())
        }}
      />

      <Pet
        petToAdopt={{
          imageURL:
            'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
          imageDescription:
            'A smiling golden-brown golden retreiver listening to music.',
          name: 'Zeus',
          sex: 'Male',
          age: 3,
          breed: 'Golden Retriever',
          story: 'Owner Passed away'
        }}
        onAdoptPet={() => {
          props.dispatch(fetchDog())
        }}
      />
    </div>
  )
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
