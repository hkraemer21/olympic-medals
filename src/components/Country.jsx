export default function Country(props) {

  return (
    <div>
      <div className="card" style={{width: 18 + 'rem'}}>
        <div className="card-body">
          <div className="header">
            <h5 className="card-title">{props.country.name}</h5>
            <button className="btn" onClick={() => props.onDelete(props.country.id)}>
              🗑️
            </button>
          </div>
          <hr></hr>
          <p className="card-text">Gold Medals: {props.country.gold}</p>
        </div>
      </div>
    </div>
  );
}