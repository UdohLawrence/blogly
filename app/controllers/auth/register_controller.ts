import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {

  async show({ view }: HttpContext){
    return view.render('pages/auth/register')
  }
  async store({ request, response, auth}: HttpContext){
    const data = await request.all()
    
    console.log({ data })
    
    return response.redirect('/')
  }
}