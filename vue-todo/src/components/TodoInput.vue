<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo">
        <i class="fa fa-plus-circle addBtn" aria-hidden="true"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
        <template #header>
            <h3>warning</h3>
        </template>
        <template #body>
            nothing typed to add
        </template>
        <template #footer>
            <span class="closeBtn" @click="showModal = false">
                <i class="fa-solid fa-circle-check addBtn"></i>
             </span>
        </template>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'
export default {
    data: function(){
        return{
            newTodoItem: "",
            showModal: false
        }
    },
    methods:{
        //모든 기능을 app.vue 로 위임하고 emit만 사용하여 처리
        addTodo: function(){
            if (this.newTodoItem !== ''){
                this.$emit('addTodoItem',this.newTodoItem);
                this.clearInput();
                }else{
                    this.showModal = !this.showModal;
                }
        },
        clearInput: function(){
            this.newTodoItem = '';
        }
    },
    components: {
       Modal : Modal

    }
}
</script>

<style scoped>
input:focus{
    outline:none;
}
.inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}

.inputBox input{
    border-style: none;
    font-size: 0.9rem;
}

.addContainer{
    float: right;
    background: linear-gradient(to right, #6478F8, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.closeBtn{
    float: right;
    background: linear-gradient(to right, #6478F8, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 5px 5px 5px 5px;
}
.addBtn{
    color: white;
    vertical-align: middle;
}

</style>