import router from '@adonisjs/core/services/router'
const RegisterController = () => import('#controllers/auth/register_controller')

router.on('/').render('pages/home')
router.group(() => {
  router.get('/register', [RegisterController, 'show']).as('register.show')
  router.post('/register', [RegisterController, 'store']).as('register.store')
}).prefix('/auth').as('auth')