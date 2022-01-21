import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { GetGenres } from "../Store/actions.js";
import { Post } from "../Store/actions.js";
// import "./Create.css";
export default function Create() {
  const dispatch = useDispatch();

  const validate = (inputs) =>{
    let error = {};
    if (!inputs.name){
      error.name = "Name required"
    }
    else if (!inputs.hp){
      error.hp = "hp required"
    }
    else if (!inputs.front_default){
      error.front_default = "front_default required"
    }
    else if (!inputs.height){
      error.height = "height required"
    }
    else if (!inputs.poketype){
      error.poketype = "poketype required"
    }
    else if (!inputs.weight){
      error.weight = "weight required"
    }
    else if (!inputs.attack){
        error.attack = "attack required"
      }
      else if (!inputs.defense){
        error.defense = "defense required"
      }
      else if (!inputs.special_attack){
        error.special_attack = "special_attack required"
      }
      else if (!inputs.special_defense){
        error.special_defense = "special_defense required"
      }
      else if (!inputs.speed){
        error.speed = "speed required"
      }
    return error
  }


const [inputs,setInputs]=useState({
  ID:[],
  name:"",
  hp:"",
  front_default:"",
  height:"",
  poketype:[],
  weight:"",
  attack:"",
  defense:"",
  special_attack:"",
  special_defense:"",
  speed:"",
  
})

//   React.useEffect(() => {
//     dispatch(GetGenres());
//   }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = Object.keys(validate(inputs))
        if (error.length !== 0) {
            alert('Rellenar los campos')
        }
    // console.log(inputs,"Fase terminada")
    else{
    console.log(inputs)
    alert("well done! uwu")
    dispatch(Post(inputs))
      setInputs({
      ID:[],
      name:"",
      hp:"",
      front_default:"",
      height:"",
      poketype:[],
      weight:"",
      attack:"",
      defense:"",
      special_attack:"",
      special_defense:"",
      speed:"",
    })
  }
  };

  return (
    <div className="Create">
      <h1 className="Create__Title">Create a Digimon!</h1>
      <Link to="/home">
        <button className="Create__HomeButtom">Go Back</button>
      </Link>

      <div className="Create__Container">
        <form onSubmit={handleSubmit}>
          <div className="Create__3bars">
            <input
              className="Create__Text"
              type="text"
              name="name"
              placeholder="name of the Pokemon..."
              value={inputs.name}
              onChange={(evt) => setInputs({...inputs,[evt.target.name]:evt.target.value})}
            ></input>
            <input
              className="Create__height"
              type="number"
              name="height"
              value={inputs.height}
              placeholder="height..."
              onChange={(evt) => setInputs({...inputs,[evt.target.name]:evt.target.value})}
            ></input>
            <input
              className="Create__Rating"
              type="number"
              name="weight"
              value={inputs.weight}
              placeholder="weight..."
              onChange={(evt) => setInputs({...inputs,[evt.target.name]:evt.target.value})}
            ></input>
            <input
              className="Create__Rating"
              type="number"
              name="attack"
              value={inputs.attack}
              placeholder="attack..."
              onChange={(evt) => setInputs({...inputs,[evt.target.name]:evt.target.value})}
            ></input>
            <input
              className="Create__Date"
              type="number"
              name="hp"
              value={inputs.hp}
              placeholder="hp of the bicho..."
              onChange={(evt) => setInputs({...inputs,[evt.target.name]:evt.target.value})}
            ></input>
            <input
              className="Create__Rating"
              type="number"
              name="defense"
              value={inputs.defense}
              placeholder="defense..."
              onChange={(evt) => setInputs({...inputs,[evt.target.name]:evt.target.value})}
            ></input>
            <input
              className="Create__Rating"
              type="number"
              name="special_attack"
              value={inputs.special_attack}
              placeholder="special_attack..."
              onChange={(evt) => setInputs({...inputs,[evt.target.name]:evt.target.value})}
            ></input>
            <input
              className="Create__Rating"
              type="number"
              name="special_defense"
              value={inputs.special_defense}
              placeholder="special_defense..."
              onChange={(evt) => setInputs({...inputs,[evt.target.name]:evt.target.value})}
            ></input>
            <input
              className="Create__Rating"
              type="number"
              name="speed"
              value={inputs.speed}
              placeholder="speed..."
              onChange={(evt) => setInputs({...inputs,[evt.target.name]:evt.target.value})}
            ></input>
          </div>


          <div className="Create__1bar2selects">

            {/* <select
              className="Create__Genre"
              name="ID"
              value={inputs.ID}
              onChange={(evt) =>
                setInputs({...inputs,[evt.target.name]:inputs.ID.concat(evt.target.value)})
              }
            >
              {generos.map((e, index) => (
                <option key={index} value={e.ID}>
                  {e.name}
                </option>
              ))}
            </select> */}
          </div>
          <select
            name="poketype" 
            value={inputs.poketype}      
            onChange={evt =>
              setInputs({...inputs,[evt.target.name]:inputs.poketype.concat(evt.target.value)})
            }
            className="Create__Platform"
          >
            <option value="normal">normal</option>
            <option value="fighting">fighting</option>
            <option value="flying">flying</option>
            <option value="poison">poison</option>
            <option value="ground">ground</option>
            <option value="rock">rock</option>
            <option value="bug">bug</option>
            <option value="ghost">ghost</option>
            <option value="steel">steel</option>
            <option value="fire">fire</option>
            <option value="water">water</option>
            <option value="grass">grass</option>
            <option value="electric">electric</option>
            <option value="psychic">psychic</option>
            <option value="ice">ice</option>
            <option value="dragon">dragon</option>
            <option value="dark">dark</option>
            <option value="fairy">fairy</option>
            <option value="unknown">unknown</option>
            <option value="shadow">shadow</option>
            
          </select>

          <div className="Create__1bar1buttom">
            <input
              className="Create__URL"
              type="url"
              name="front_default"
              value={inputs.front_default}
              placeholder="Url link..."
              onChange={(evt) => setInputs({...inputs,[evt.target.name]:evt.target.value})}
            ></input>
            <button type="submit" className="Create__Create">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
