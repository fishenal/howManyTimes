export function configRouter (router) {
  router.map({
    '/log': {
      component: require('./pages/Log')
    },
    '/people': {
      component: require('./pages/People')
    },
    '/status': {
      component: require('./pages/Status')
    }
  
  })
}
