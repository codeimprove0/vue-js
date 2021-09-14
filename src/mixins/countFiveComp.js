import {ref} from 'vue'
export default function countFiveComp(no) {
    const count = ref(0);
    const incrementData = ()=>{
        count.value += no;
    } 
    return {
        count,
        incrementData
    }
}