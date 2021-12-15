import "./Card.css";


// function value is starting word capital letter
// return value for only one element.

export default function Raj(props) {
    return <div class="col-lg-3 col-md-6">
        <div class="card text-center card-shadow on-hover border-0 mb-4">
            <div class="card-body font-14">

                <span class="badge badge-inverse p-2 position-absolute price-badge font-weight-bold">{props.data.prop}</span>
                <h5 class="mt-3 mb-1 font-weight-medium">{props.data.plan}</h5>
                <h6 class="subtitle font-weight-normal">{props.data.team}</h6>

                <div class="pricing my-3">
                    <sup>{props.data.currency}</sup>
                    <span class="monthly display-5" >{props.data.monthly}</span>
                    <small class="monthly">{props.data.peoried}</small>
                    <span class="d-block"> Save <span class="font-weight-medium">{props.data.medium}</span> a Year</span>
                </div>
                <ul class="list-inline">
                    {props.data.features.map(obj => {

                        return <li className="d-block py-2">{obj.name}</li>

                    })}

                </ul>
                <div class="bottom-btn">

                    <a className={props.data.col} href="#f1"><span>Choose Plan</span></a>
                </div>

            </div>
        </div>
    </div>





}


