import React from "react";
import PropTypes from "prop-types";

/*
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 3.5
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 5
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 2
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4
  }
];

function Food({name, picture, rating}){
  return (
    <div>
      <h3>I love {name}</h3>
      <h5>{rating}/5.0m</h5>
      <img src={picture} alt={name} />
    </div>
  )
}

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
}

// propType는 component의 데이터 타입을 체크해주는 역할
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
 // isRequired 없으면 unfined도 해당  
}

function App() {
  return (
    <div> {foodILike.map(renderFood)}</div>
  );
}
*/

class App extends React.Component{

  state = {
    //state is keeping data that can be changed
    count: 0
  };

  //js code
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
    // whenever react calls setState that will call render function with new state!
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

  render(){
    return (
      <div>
        <h1>this is state value : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
                          {/* add() means right away~ */}
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
