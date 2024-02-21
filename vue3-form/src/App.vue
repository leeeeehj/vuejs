<template>
  <!-- submit.prevent 를 셋팅하면 preventDefault 역할을 하게 된다 -->
  <form action="" @submit.prevent="submitForm">
    <div>
      <label for="userId">ID : </label>
      <input id="userId" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw : </label>
      <input id="password" type="text" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
  import axios from 'axios'
import { ref } from 'vue';

  export default {
    setup(){
      //data
      var username = ref(''); //reactivity 가 주입된 변수를 ref로 표현
      var password = ref('');


      //methods
      var submitForm = () => {
        axios.post('https://jsonplaceholder.typicode.com/users/',{
          username : username.value,
          password : password.value
        }).then(response => {
          console.log(response)
        });
      }

      return {username, password, submitForm}
    },
    // methods: {
    //   logText(){
    //     this.password
    //   }
    // }
    // data() {
    //   return {
    //     username : '',
    //     password : '',
    //   }
    // },
    // methods:{
    //   submitForm(event){
    //     //폼의 기본적 동작-새로고침-막기
    //     event.preventDefault();
    //     console.log('제출됨')
        
    //     //axios 사용, fake server 로 보내기
    //     //데이터를 두번째 인자로 보내기
    //     const data = {
    //       username: this.username,
    //       password: this.password
    //     }

    //     axios.post('https://jsonplaceholder.typicode.com/users/',data)
    //     .then(response =>{
    //       console.log(response)
    //     });
    //   }
    // }
  }
</script>

<style scoped>

</style>