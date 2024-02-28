import { onBeforeMount, ref } from "vue";

function useTodo () {
    
    const todoItems = ref([]);

    //methods
    function fetchTodos(){
      const result = [];
        for(let i = 0; i<localStorage.length; i++){
            const todoItem = localStorage.key(i);
            //value 로 접근해야하는 것이 composition의 유의점!
            //todoItems.value.push(todoItem);
            result.push(todoItem);
        }
        return result;
    }



    function addTodo(todo){
      //list로 내려주는 데이터
      todoItems.value.push(todo);
      //실제 localstorage에 데이터를 추가해주는 로직
      localStorage.setItem(todo,todo);
    }

    function removeTodo(item,index){
        //setup 밖이어도 this로 접근 가능
        todoItems.value.splice(index,1);
        localStorage.removeItem(item);
    }
 
      return {todoItems, fetchTodos, addTodo , removeTodo}
}
export { useTodo }