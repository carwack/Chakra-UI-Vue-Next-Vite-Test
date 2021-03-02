import App from './App.vue'
import { ViteSSG } from 'vite-ssg/single-page'
import ChakraUIVuePlugin, { chakra } from '@chakra-ui/vue-next'
import { domElements } from '@chakra-ui/vue-system'
import { feGithub } from 'feather-icons-paths'

export const createApp = ViteSSG(App, ({app}) => {
  app.use(ChakraUIVuePlugin, {
    icons: {
      library: {
        feGithub
      }
    }
  })
  
  domElements.forEach((tag) => {
    app.component(`chakra.${tag}`, chakra(tag))
  })
})
