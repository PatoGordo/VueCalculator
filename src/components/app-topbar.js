export class AppTopbar {
  template = `
    <nav class="app-topbar">
      <span class="content" :style="$route.name === 'home'? 'justify-content: center;' : ''">
       <h1 @click="$router.push('/')">
          Vue 3 App
        </h1>
        <span @click="$router.go(-1)" v-if="$route.name !== 'home'">
          <span class="iconify" data-icon="akar-icons:arrow-left"></span>
        </span>
      </span>
    </nav>
  `
}
