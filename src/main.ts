import { createApp } from 'vue'
import App from './App.vue'
import ChakraUIVuePlugin, { chakra } from '@chakra-ui/vue-next'
import { domElements } from '@chakra-ui/vue-system'
import { feGithub } from 'feather-icons-paths'

const app = createApp(App).use(ChakraUIVuePlugin, {
  icons: {
    library: {
      feGithub
    }
  }
})

domElements.forEach((tag) => {
  app.component(`chakra.${tag}`, chakra(tag))
})

app.mount('#app')
