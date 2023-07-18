//reducer del toDo
export const todoReducer = (initialState = [], action) => {

    //es bastante comun para manejar la action utilizar un switch

    switch (action.type) {

        case 'Add Todo':
            //se regresa un nuevo state
            //en este caso el sate es un arreglo
            return [
                ...initialState, action.payload
            ]
        //esto se utiliza cuando no está implementada la ccion todavia
        //throw new Error('La accion para este caso no está implementadada');

        case 'Borrar ToDo':
            //el filter retorna un nuevo arreglo con lo que se le indica (en este caso un arreglos con los elementos de id distinto al que se busca)
            //por lo tanto no existe una mutacion (modificación del arreglo)
            return initialState.filter(todo => todo.id !== action.payload)
        case 'Toggle ToDo':
            //el maptambien retorna un nuevo arreglo
            return initialState.map(todo =>{
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        done: !todo.done,
                    }
                }

                return todo
            })

        default:
            return initialState;
    }

}