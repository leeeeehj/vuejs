<template>
    <div>
        <input type="text" v-model="todoInput">  
        <button @click="addTodo">add</button>

    </div>
</template>

<script>
import { ref } from 'vue'
    export default {
        //setup은 기본 파라미터로 props와 context를 받는다
        setup(props, context){
            //data
            const todoInput = ref('');

            function addTodo(){
                //컴포지션에서 emit은 context에 담겨있다.
                context.emit('add', todoInput.value);
                clearTodo();
            }

            const clearTodo = () => todoInput.value = '';

            return { todoInput, addTodo }
        }
    }
</script>

<style lang="scss" scoped>

</style>