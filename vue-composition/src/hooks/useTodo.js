import { ref } from "vue";

function useTodo () {
    
    const todoItems = ref([]);



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
 
      return {todoItems, addTodo , removeTodo}
}
export { useTodo }