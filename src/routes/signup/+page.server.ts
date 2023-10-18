import { yupToErrors } from '$lib/utils/yupParser'
import { fail } from '@sveltejs/kit'
import { object, string } from 'yup'

const formValidator = object({
  email: string().email().required(),
  password: string().required(),
})

export const actions = {
  default: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')

    try {
      await formValidator.validate({ email, password }, { abortEarly: false })
    } catch (err) {
      return fail(400, {
        errors: yupToErrors<{ email: string; password: string }>(err),
        success: false,
      })
    }

    // Signup in supabase
    const { error } = await supabase.auth.signUp({
      email: email as string,
      password: password as string,
    })

    if (error) {
      return fail(500, {
        message: error.message,
        email,
        success: false,
      })
    }

    return {
      message:
        'Please check your email for a magic link to log into the website.',
      success: true,
    }
  },
}
