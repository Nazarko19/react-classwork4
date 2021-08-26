import {useState} from "react";
import {savecar} from "../../servis/save.car.form";
import {addformcar} from "../../servis/addform.car";

export default function Form() {

    // let [model,setModel] = useState('model')
    // let [price, setPrice] = useState('price')
    // let [year,setYear] = useState('year')
    // let [form, setForm] = useState({model: 'model', price: 'price', year: 'year'})
    //
    //
    // const onSubmitform = (e) => {
    //     e.preventDefault()
    //     // let car={model,price,year}
    //     // setForm(car)
    //     // console.log(car)
    //     savecar(form)
    // }
    //
    // const onChange = (e) => {
    //     setForm({...form, [e.target.name]: e.target.value})
    // }
    //
    //
    // const onAddCar = (id) => {
    //     addformcar(id, form);
    //
    // }
// const oninputmodel = (e) => {
//         let Model =(e.target.value)
//         setModel(Model)
// }
// const oninputprice = ({target: {value}}) => setPrice(value);
//
// const onninputyear = (e) => {
//         let Year=(e.target.value)
//         setYear(Year)
//
// }
    return (
        <div>
            {/*<form onSubmit={onSubmitform}>*/}
            {/*    <input type="text" name={'model'} value={form.model} onInput={onChange}/>*/}
            {/*    <input type="text" name={'price'} value={form.price} onInput={onChange}/>*/}
            {/*    <input type="text" name={'year'} value={form.year} onInput={onChange}/>*/}
            {/*    <input type="submit"/>*/}
            {/*</form>*/}

        </div>
    );
}