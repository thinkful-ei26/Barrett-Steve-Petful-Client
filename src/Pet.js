import React, { Component } from 'react'

export default class Pet extends Component {
  render() {
    return (
      <div>
        <section className="petToAdopt">
          <header>
            <h1>{this.props.petToAdopt.name}</h1>
            <img
              src={this.props.petToAdopt.imageURL}
              alt={this.props.petToAdopt.imageDescription}
              height="150"
              width="150"
            />
          </header>

          <main>
            <dl>
              <dt>{this.props.petToAdopt.name}</dt>
              <dd>{this.props.petToAdopt.sex}</dd>
              <dd>{this.props.petToAdopt.age}</dd>
              <dd>{this.props.petToAdopt.breed}</dd>
              <dd>{this.props.petToAdopt.story}</dd>
            </dl>
          </main>

          <button className="adoptButton" onClick={this.props.onAdoptPet}>
            adopt
          </button>
        </section>
      </div>
    )
  }
}
