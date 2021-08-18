import {useEffect, useState} from "react";
import Car from "../car/Car";
import {getCars} from "../../servis/cars.servis";
import {deleteCar} from "../../servis/delete.car";
import {addFormCar} from "../../servis/addform.car";


export default function Cars() {

    let [cars,setCars] = useState([])
    useEffect(()=>{
        getCars().then(value => setCars([...value]))
    }, [cars])

    const onDeleteCar = (id) => {
        deleteCar(id)
        setCars([...cars])
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