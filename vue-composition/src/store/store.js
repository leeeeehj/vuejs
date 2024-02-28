import  { createStore } from 'vuex';

const storage = {
    fetch(){
        const result = [];
        for(let i = 0; i<localStorage.length; i++){
            const todoItem = localStorage.key(i);
            //value 로 접근해야하는 것이 composition의 유의점!
            //todoItems.value.push(todoItem);
            result.push(todoItem);
        }
        
        return result;
    }
}
export const store = new createStore({
    state: {
        todoItems : storage.fetch()
    },
    mutations: {

        addOne(state, todo){
          //list로 내려주는 데이터
          state.todoItems.push(todo.value);
          //실제 localstorage에 데이터를 추가해주는 로직
          localStorage.setItem(todo,todo);
        }

    }
});