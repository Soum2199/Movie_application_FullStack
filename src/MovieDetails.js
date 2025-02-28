import React from 'react'
import { useNavigate } from 'react-router-dom';

function MovieDetails(props) {
  const navig = useNavigate()
  function moveToTheatre() {
    navig("/theatre")
  }
  console.log(props.info)
  return (
    <>
    <div class="card mb-3" style={{ maxWidth: "830px", margin: "5px", height: "310px", border: "1px"}}>
  <div class="row g-0" >
    <div class="col-md-4">
      <img src={props.info.image_url} class="img-fluid rounded-start" style={{height: "265px", width: "260px"}} alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{props.info.movie_name}</h5>
        <h1 class="text-start text-xl font-bold">About the movie:</h1>
        <p class="card-text">{props.info.description}</p>
        <br/>
        <p class="card-text"><cite class="text-body-secondary" style={{backgroundColor: "lavender", fontSize: "19px"}}>{props.info.genre}</cite></p>
        <p class="card-text"><cite class="text-body-secondary" style={{backgroundColor: "lavender", fontSize: "19px"}}>{props.info.censor}</cite></p>
        <br/>
        Directed By:<pre class="text-secondary" style={{fontFamily: "sans-serif"}}>{props.info.director}</pre>
        Rate: <i className="fa-solid fa-star" style={{color: "blue"}}></i> {props.info.rating}
      </div>
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-success me-md-2" type="button" onClick={moveToTheatre}>Book Tickets</button>
</div>
  </div><hr/>
  <br/>
  <h1 class="text-3xl font-bold text-start"> Cast:</h1>
  {  console.log(props.info.cast)}
  {
    props.info.cast.map(function (dj) {
      return <div class="card w-50" style={{marginLeft: "26px"}}>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">{dj}</li>
            </ul>
      </div>
    })
  }
  <br/>
</div>
    </>
  )
}

export default MovieDetails