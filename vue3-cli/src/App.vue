<template>
  <!-- root에서 하위 컴포넌트에서 데이터를 내려서, 표시하기(props 사용) -->
  <AppHeader 
  v-bind:appTitle ="message"
  v-on:change ="changeMessage"></AppHeader>
  
  
</template>

<script>
import AppHeader from './components/AppHeader.vue'

  export default {
    components: { //import 후 컴포넌트 사용할 수 있도록 등록하기
      //'AppHeader' : AppHeader // 전부 파스칼케이스로 작성 , 앞뒤가 같으면 한번만 작성해도 무관
      AppHeader
    },
    data() {
      return {
        message: '앱 헤더 컴포넌트'
      }
    },methods:{
      changeMessage(){
        this.message = '변경됨'
      }
    }
  }
</script>

<style scoped>

</style>