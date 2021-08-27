import './Car.css'
export default function Car({item,deleteCar,onEditCar}) {

        return (
        <div className={'car'}>
            {item.id} {item.model} {item.price} {item.year}

          <div className={'button'}><button className={'button1'} onClick={() => deleteCar(item.id)}>delete</button>
              <button className={'button1'} onClick={()=> onEditCar(item.id)}>edit</button></div>
        </div>
    );
}