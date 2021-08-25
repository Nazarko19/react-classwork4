import {useEffect, useState} from "react";
import Car from "../car/Car";
import {getCars} from "../../servis/cars.servis";
import {deleteCar} from "../../servis/delete.car";
import {addFormCar} from "../../servis/addform.car";


export default function Cars() {

    let [cars,setCars] = useState([])
    useEffect(()=>{
        getCars().then(value => setCars([...value]))
    }, [])

    const onDeleteCar = (id) => {
        deleteCar(id).then(value => console.log(value))
        let filterdeletcar = cars.filter(value => value.id !== id);
        setCars([...filterdeletcar])
    };

    const onAddCar = (id) => {
      addFormCar(id)
        setCars([...cars])
    }

    return (
        <div>
            {
                cars.map(value => <Car key={value.id} item={value} deleteCar={onDeleteCar} addformCar={onAddCar}/>)
            }

        </div>
    );
}