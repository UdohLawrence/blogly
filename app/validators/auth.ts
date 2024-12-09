import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    first_name: vine.string().minLength(3).maxLength(15),
    last_name: vine.string().minLength(3).maxLength(15),
    email: vine
      .string()
      .email()
      .normalizeEmail()
      .unique(async (db, value) => {
        const result = await db.from('users').select('email').where('email', value).first()

        return result ? false : true
      }),
      password: vine.string().alphaNumeric().confirmed().minLength(8)
  })
)