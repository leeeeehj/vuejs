import { ref } from "vue";

function useMessage(){
  // ref치고 tab 누르면 자동으로 import문 생성됨
  const message = ref('hello'); 


  function changeMessage(){
    //value로 접근해주어야 한다.
    message.value = 'hi';
  }
  //setup 안에서 정의한 것들은 다 return을 해주어야 setup 바깥에서 사용할 수 있음.
  return { message, changeMessage }
}

export {useMessage}