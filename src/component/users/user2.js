import Geo from "./geo";

export default function Address({street,suite,city,zipcode, geo}) {
    return (
        <div className='addres'>
            <ul>Address:
                <li>{street} </li>
               <li>{suite}</li>
               <li> {city}</li>
              <li>{zipcode}</li>
            </ul>

            <Geo lat={geo.lat} lng={geo.lng}/>
        </div>
    );
}