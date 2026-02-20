import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export function ProductItem({name,price,onclick}) {
    return (<>

        <Col>
            <div className="card">
                <img src="image/Watch-2.jpg" height={200} alt="logo"></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className='card-text text-muted'>Category : Electronice</p>
                    <p className='card-text fw-bold'>Price : ₹{price}</p>
                    <Button variant='secondary' onClick={onclick}>Add to card</Button>
                </div>
            </div>
        </Col>

    </>)
}

// export function ProductItem(props) {
//     return (<>

//         <Col>
//             <div className="card">
//                 <img src="image/Watch-2.jpg" height={200} alt="logo"></img>
//                 <div className="card-body">
//                     <h5 className="card-title">{props.name}</h5>
//                     <p className='card-text text-muted'>Category : Electronice</p>
//                     <p className='card-text fw-bold'>Price : ₹{props.price}</p>
//                     <Button variant='secondary' onClick={props.onclick}>Add to card</Button>
//                 </div>
//             </div>
//         </Col>

//     </>)
// }