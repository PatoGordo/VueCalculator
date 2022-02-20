import { store } from "../store/main.js"

export class AppKeyboard {
  setup() {
    function clear() {
      store.operation = ["0"]
      store.result = "0"
    }
    
    function backspace() {
      store.operation.pop()
    }
    
    function setNumber(num) {
      store.push(num)
    }
    
    function sum() {
      store.push('+')
    }
    
    function subtract() {
      store.push('-')
    }
    
    function percentage() {
      store.push('/ 100')
      store.resolve()
    }
    
    function divide() {
      store.push('/')
    }
    
    function multiply() {
      store.push('*')
    }
    
    function result() {
      store.resolve()
    }
    
    function dot() {
      store.push('.')
    }
    
    return {
      clear,
      backspace,
      setNumber,
      sum,
      subtract,
      percentage,
      divide,
      multiply,
      result,
      dot,
    }
  }
  
  template = `
    <section class="keyboard">
      <button @click="clear">
        C
      </button>
      <button @click="backspace">
        ⌫
      </button>
      <button @click="percentage">
        %
      </button>
      <button @click="divide">
        ÷
      </button>
      <button @click="setNumber(7)">
        7
      </button>
      <button @click="setNumber(8)">
        8
      </button>
      <button @click="setNumber(9)">
        9
      </button>
      <button @click="multiply">
        ×
      </button>
      <button @click="setNumber(4)">
        4
      </button>
      <button @click="setNumber(5)">
        5
      </button>
      <button @click="setNumber(6)">
        6
      </button>
      <button @click="subtract">
        -
      </button>
      <button @click="setNumber(1)">
        1
      </button>
      <button @click="setNumber(2)">
        2
      </button>
      <button @click="setNumber(3)">
        3
      </button>
      <button @click="sum">
        +
      </button>
      <button disabled></button>
      <button @click="setNumber(0)">
        0
      </button>
      <button @click="dot">
        .
      </button>
      <button @click="result" class="equal">
        =
      </button>
    </section>
  `
}
