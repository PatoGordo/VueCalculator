import { store } from "../store/main.js"

export class Home {
  setup() {
    const name = Vue.ref("")
    const router = VueRouter.useRouter()
    
    function handleHello() {
      router.push(`/hello/${name.value}`)
    }
    
    return {
      handleHello,
      name,
      store
    }
  }
  
  template = `
    <div class="home">
      <h2>You clicked {{ store.count }} times!</h2>
      
      <button class="green" @click="store.increment()">Click here</button>
      
      <form @submit.prevent="handleHello">
        <div class="md-textfield">
          <input
            placeholder=" "
            type="text"
            v-model="name"
            required
          />
          <label>What is your name?</label>
          <span class="bar"></span>
        </div>
        
        <button class="blue" type="submit">Receive a hello!</button>
      </form>
    </div>
  `
}
