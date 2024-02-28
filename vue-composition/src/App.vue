<template>
  <TodoHeader :appTitle = "title"></TodoHeader>
  <!-- @하위컴포넌트 이벤트 = 상위컴포넌트 이벤트 -->
  <TodoInput @add ="addTodo" ></TodoInput>
  <TodoList :todoItems="todoItems" @remove="removeTodo"></TodoList>

</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import { useTodo } from './hooks/useTodo';

  export default {
    components:{
      //컴포넌트 선언
      TodoHeader,
      TodoInput,
      TodoList  
    },data(){
      return {
        title : '할일앱'
      }
    },
    setup(){

      const {
        todoItems, 
        fetchTodos, 
        addTodo , 
        removeTodo
      } = useTodo();


      // lifecycle API 는 메인으로 빼주는 것이 구조적으로 좋다.
      onBeforeMount(()=> {
        console.log('onBeforeMount called');
        todoItems.value = fetchTodos();
      })


      return{ todoItems , addTodo, removeTodo}
    }
  }
</script>

<style lang="scss" scoped>

</style>