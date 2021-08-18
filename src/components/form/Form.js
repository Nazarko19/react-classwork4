import {useState} from "react";
import {savecar} from "../../servis/save.car.form";

export default function Form() {

    let [model,setModel] = useState('model')
    let [price, setPrice] = useState('price')
    let [year,setYear] = useState('year')
    let [Form,setForm] = useState({model:'',price:'',year:''})


    const onSubmitform = (e) => {
      e.preventDefault()
        let car={model,price,year}
        setForm(car)
        console.log(car)
        savecar(car)
    }
const oninputmodel = (e) => {
        let Model =(e.target.value)
        setModel(Model)
}
const oninputprice = ({target: {value}}) => setPrice(value);

const onninputyear = (e) => {
        let Year=(e.target.value)
        setYear(Year)

}
  return (
    <div>
        <form onSubmit={onSubmitform}>
            <input type="text" name={'model'} value={model} onInput={oninputmodel} />
            <input type="text" name={'price'} value={price} onInput={oninputprice}/>
            <input type="text" name={'year'} value={year} onInput={onninputyear}/>
            <input type="submit"/>
        </form>

    </div>
  );
}