import Medals from "./Medals";

export default function Country(props) {

  return (
    <div>
      <div className="card" style={{width: 18 + 'rem'}}>
        <div className="card-body">
          <div className="header row">
              <div className="col-8">
                <h5 className="card-title">{props.country.name}</h5>
              </div>
              <div className="col-2">
                <p className="card-title">{props.country.gold + props.country.silver + props.country.bronze}</p>
              </div>
              <div className="col-2">
                <button className="btn" onClick={() => props.onDelete(props.country.id)}>
                  🗑️
                </button>
              </div>
          </div>
          <hr></hr>
          <Medals key={props.country.id} country={props.country} medals={props.medals} onIncrement={props.onIncrement} onDecrement={props.onDecrement} />
        </div>
      </div>
    </div>
  );
}