    export default function Car({item,deleteCar,addformCar}) {

    return (
        <div>
            {item.id} {item.model} {item.price} {item.year}
             <button onClick={() => deleteCar(item.id)}>delete</button>
              <button onClick={()=> addformCar(item.model,item.price,item.year)}>edit</button>

        </div>
    );
}