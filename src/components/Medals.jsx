export default function Medals(props) {

    return (
        <div>
            {props.medals.map((medal) => (
                <div className="row card-text pe-2" key={medal.id}>
                    <div className="col-6">
                        <p>{medal.name} Medals: </p>
                    </div>
                    <div className="col-6 text-end">
                        <div className="row">
                            <div className="col-4">
                                <button disabled={props.country[medal.name.toLowerCase()] === 0} className="btn btn-outline-danger" onClick={() => props.onDecrement(props.country.id, medal.name.toLowerCase())}>
                                    -
                                </button>
                            </div>
                            <div className="col-4">
                                <div>{props.country[medal.name.toLowerCase()]}</div>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-outline-success" onClick={() => props.onIncrement(props.country.id, medal.name.toLowerCase())}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}