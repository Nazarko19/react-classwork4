    export default function Car({item,deleteCar,onEditCar}) {

        return (
        <div>
            {item.id} {item.model} {item.price} {item.year}
             <button onClick={() => deleteCar(item.id)}>delete</button>
              <button onClick={()=> onEditCar(item.id)}>edit</button>

        </div>
    );
}