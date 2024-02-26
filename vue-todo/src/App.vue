<template>
 <div id="app">
  <TodoHeader></TodoHeader>
  <!-- 하위에서 addTodoItem 이벤트가 올라오면 addOneItem이 발생된다. -->
  <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
  <!-- todoItems가  동적바인딩되어서 내려간다 -->
  <TodoList v-bind:propsdata="todoItems" @removeItem="removeOneItem" @toggleItem="toggleOneItem"></TodoList>
  <TodoFooter @clearAll="clearAllItems"></TodoFooter>
 </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'
import TodoFooter from './components/TodoFooter.vue'



export default {
    //list 의 로직을 끌고 옴
  data: function(){
    return{
      todoItems: []
    }
  },
  methods: {
    //input 에서 emit으로 데이터를 올려줬으므로, 바로 파라미터로 받아서 사용할 수 있다.
    addOneItem: function(todoItem){
      var obj = {completed: false, item:todoItem};
                localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    //list에서 emit으로 데이터를 올려줬으므로, 파라미터로 받아서 사용한다.
    removeOneItem: function(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index,1); // javascript library, 지우고 새로운 array 반환해 줌

    },
    toggleOneItem: function(todoItem, index){
      //순서가 명확하도록 추가
      this.todoItems[index].completed = !this.todoItems[index].completed;
      //local storage 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems: function(){
    localStorage.clear();
    this.todoItems = [];
    }
  }
  ,
  created: function(){
        console.log('created');
        if(localStorage.length > 0){
            for(var i= 0; i<localStorage.length; i++){
                this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
    },
  components :{
    'TodoHeader' : TodoHeader,
    'TodoList' : TodoList,
    'TodoInput' : TodoInput,
    'TodoFooter' : TodoFooter
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6;
}
input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.3);
}
</style>
