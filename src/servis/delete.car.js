    const deleteCar = (id) => fetch('http://91.201.233.14/api/v1/cars/' + id, {
        method: 'DELETE'
    });


export {deleteCar}






