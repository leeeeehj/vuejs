<template>
  <div>
    <!-- ul>li*3 과 같이 축약어로 생성 가능함 -->
    <ul>
        <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow">
            <i class="checkBtn fa-solid fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" @click="toggleComplete(todoItem, index)"></i>
            <!-- v-bind 로 동적바인딩해줄수 있음(completed가 true 되는 순간 textCompleted class로 변경) -->
            <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
            <span class="removeBtn" @click="removeTodo(todoItem, index)"><i class="fa-solid fa-trash" ></i></span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            todoItems: []
        }

    },
    //view lifecycle 중 created 를 사용(document ready 같은것)
    created: function(){
        console.log('created');
        if(localStorage.length > 0){
            for(var i= 0; i<localStorage.length; i++){
                this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }

    },
    methods: { //할일 삭제하기 기능
        removeTodo: function(todoItem, index){
            console.log(todoItem, index);
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index,1); // javascript library, 지우고 새로운 array 반환해 줌
        },
        toggleComplete: function(todoItem, index){
            console.log(todoItem, index);
            todoItem.completed = !todoItem.completed;
            //local storage 데이터 갱신
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        }

    }

}
</script>

<style>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.removeBtn{
    margin-left: auto;
    color: #de4343;
}
.checkBtn {
    line-height: 45px;
    color: black;
    margin-right: 5px;
}
.checkBtnCompleted{
    color: #b3adad;
}
.textCompleted{
    text-decoration: line-through;
    color: #b3adad;
}
</style>