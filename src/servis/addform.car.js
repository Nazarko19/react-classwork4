 const addformcar = (id, car) => {

 fetch('http://91.201.233.14/api/v1/cars/' + id, {
    method: 'PUT',
    body: JSON.stringify(car),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export {addformcar}