export const store = Vue.reactive({
  result: "0",
  operationPreview: "0",
  operation: ["0"],
  resolve() {
    const res = new Function(`return ${this.operation.join(' ')}`)
    const result = Math.round(res() * 100) / 100
    
    this.operation = [result]
    this.result = result
  },
  push(op) {
    if (!Number.isNaN(Number(op)) && !Number.isNaN(Number(this.operation[this.operation.length - 1])) || op === '.') {
      this.operation[this.operation.length - 1] += `${op}`
      if (this.operation[0] === "0") {
        if (op !== '.') {
          this.operation.shift()
        }
      } else if (this.operation[0][0] === "0") {
        if (!this.operation[0].includes('.')) {
          this.operation[0] = this.operation[0].substring(1)
        }
      }
    } else {
      this.operation.push(`${op}`)
    }
  }
})

Vue.watch(
  () => store.operation,
  (val, oldVal) => {
    store.operationPreview = val.join(' ')
  },
  {
    deep: true
  }
)
