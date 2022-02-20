import { AppDisplay } from "./components/app-display.js"
import { AppKeyboard } from "./components/app-keyboard.js"

export class App {
  components = {
    'app-display': new AppDisplay(),
    'app-keyboard': new AppKeyboard()
  }
  
  template = `
    <app-display />
    <app-keyboard />
  `
}
