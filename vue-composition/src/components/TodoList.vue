<template>
    <div>
        <ul>
            <li v-for="(item, index) in todoItems" :key="index"> {{  item  }}
            <button @click="removeTodo(item, index)"> remove</button></li>
            
        </ul>
    </div>
</template>

<script>
import { watch } from 'vue';
    export default {
        props:['todoItems'],
        setup(props, context){
            function removeTodo(item, index){
                context.emit('remove', item, index);
            }

            watch(props.todoItems, (newValue ) => {
                console.log({newValue});
            })

            return { removeTodo }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>