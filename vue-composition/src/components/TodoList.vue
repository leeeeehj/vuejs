<template>
    <div>
        <ul>
            <li v-for="(item, index) in this.$store.state.todoItems" :key="index"> {{  item  }}
            <button @click="removeTodo(item, index)"> remove</button></li>
            
        </ul>
    </div>
</template>

<script>
import { watch } from 'vue';
    export default {
        setup(props, context){
            function removeTodo(item, index){
                context.emit('remove', item, index);
            }

            return { removeTodo }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>