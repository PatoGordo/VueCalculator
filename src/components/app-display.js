import { store } from "../store/main.js"

export class AppDisplay {
  setup() {
    return {
      store
    }
  }
  
  template = `
    <section class="display">
      <h2>{{ store.operationPreview }}</h2>
      <h1>{{ store.result }}</h1>
    </section>
  `
}
