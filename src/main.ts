import { createApp } from 'vue'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import ChakraUIVuePlugin, { chakra } from '@chakra-ui/vue-next'
import { domElements } from '@chakra-ui/vue-system'
import { feGithub } from 'feather-icons-paths'

const head = createHead()

const app = createApp(App)
  .use(ChakraUIVuePlugin, {
    icons: {
      library: {
        feGithub
      }
    }
  })
  .use(head)

domElements.forEach((tag) => {
  app.component(`chakra.${tag}`, chakra(tag))
})

app.mount('#app')
