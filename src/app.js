import { AppTopbar } from "./components/app-topbar.js"

export class App {
  components = {
    'app-topbar': new AppTopbar()
  }
  
  template = `
    <app-topbar />
    <router-view class="page" />
  `
}
