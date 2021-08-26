import {useEffect, useState} from "react";
import Car from "../car/Car";
import {getCars} from "../../servis/cars.servis";
import {deleteCar} from "../../servis/delete.car";
import {addformcar, addFormCar} from "../../servis/addform.car";
import {savecar} from "../../servis/save.car.form";


export default function Cars() {
    let [cars, setCars] = useState([]);
    let [form, setForm] = useState({model: 'model', price: 'price', year: 'year'});

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [cars])

    const onSubmitform = (e) => {
        e.preventDefault()
        savecar(form)
    }
    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onDeleteCar = (id) => {
        deleteCar(id).then(value => console.log(value))
        let filterdeletcar = cars.filter(value => value.id !== id);
        setCars([...filterdeletcar])
    };

    const onEditCar = (id) => {
        addformcar(id, form );
    }

    return (
        <div>
            <form onSubmit={onSubmitform}>
                <input type="text" name={'model'} value={form.model} onInput={onChange}/>
                <input type="text" name={'price'} value={form.price} onInput={onChange}/>
                <input type="text" name={'year'} value={form.year} onInput={onChange}/>
                <input type="submit"/>
            </form>
            {
                cars.map(value => <Car key={value.id} item={value} deleteCar={onDeleteCar} onEditCar={onEditCar}/>)
            }
        </div>
    );
}