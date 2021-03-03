import App from './App.vue'
import { ViteSSG } from 'vite-ssg/single-page'
import ChakraUIVuePlugin, { chakra } from '@chakra-ui/vue-next'
import { domElements } from '@chakra-ui/vue-system'
import { feGithub } from 'feather-icons-paths'
import { hydrate } from '@emotion/css'

export const createApp = ViteSSG(App, ({ app, isClient }) => {

  if (isClient) {
    // @ts-expect-error Need to add $emotionSSRIds to global namespace
    const ssrIds = window?.$emotionSSRIds || []
    hydrate(ssrIds)
  }

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
