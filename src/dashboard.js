import React from 'react';

export default function DashBoard(props) {
  return (
    <div>
      <section className="catToAdopt">
        <header>
          <h1>{props.catToAdopt.name}</h1>
          <img 
            src={props.catToAdopt.imageURL} 
            alt={props.catToAdopt.imageDescription} 
            height="150" width="150"/>
        </header>

        <main>
          <dl>
            <dt>{props.catToAdopt.name}</dt>
            <dd>{props.catToAdopt.sex}</dd>
            <dd>{props.catToAdopt.age}</dd>
            <dd>{props.catToAdopt.breed}</dd>
            <dd>{props.catToAdopt.story}</dd>
          </dl>

          <button className="adoptButton">adopt</button>
        </main>
      </section>

      <section className="dogToAdopt">
        <header>
          <h1>{props.dogToAdopt.name}</h1>
          <img 
            src={props.dogToAdopt.imageURL} 
            alt={props.dogToAdopt.imageDescription} 
            height="150" width="150"
          />
        </header>

        <main>
          <dl>
            <dt>{props.dogToAdopt.name}</dt>
            <dd>{props.dogToAdopt.sex}</dd>
            <dd>{props.dogToAdopt.age}</dd>
            <dd>{props.dogToAdopt.breed}</dd>
            <dd>{props.dogToAdopt.story}</dd>
          </dl>
        </main>

        <button className="adoptButton">adopt</button>
      </section>
    </div>
    
  )
}