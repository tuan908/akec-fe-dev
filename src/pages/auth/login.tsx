import { authApi } from '@/app/services/auth.api'
import { Route } from '@/constant'
import { zodResolver } from '@hookform/resolvers/zod'
import Cookies from 'js-cookie'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Logger } from '@/util'

const schema = z.object({
  username: z.string(),
  password: z.string()
})

type TLoginForm = z.infer<typeof schema>

const LoginPage = () => {
  const [login] = authApi.useLoginMutation()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TLoginForm>({
    defaultValues: {
      username: '',
      password: ''
    },
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit'
  })

  const onValid: SubmitHandler<TLoginForm> = async ({ password, username }) => {
    await login({ password, username })
      .unwrap()
      .then(res => {
        Cookies.set('access_token', res.data.accessToken!)
        Cookies.set('refresh_token', res.data.refreshToken!)
        Cookies.set('user_info', res.data.username!)
      })
      .catch(e => console.error(e?.mesage))

    router.push(Route.Home)
  }

  const onInvalid: SubmitErrorHandler<TLoginForm> = (errors, event) => {
    Logger.error(`Validate errors:`, errors)
  }

  return (
    <>
      <Head>
        <title>Đăng nhập</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='w-full h-full min-h-screen flex items-center justify-center'>
        <div className='w-1/5 grid grid-cols-1 gap-y-6 justify-center items-center m-4'>
          <form
            className=' grid grid-cols-1 gap-y-6'
            onSubmit={handleSubmit(onValid, onInvalid)}
          >
            <label className='text-xl' htmlFor='Username'>
              Username
            </label>
            <input
              type='text'
              className='w-full rounded-xl mx-auto p-2 border-2'
              {...register('username')}
            />
            <label className='text-xl' htmlFor='Password'>
              Password
            </label>
            <input
              type='password'
              className='w-full rounded-xl mx-auto p-2 border-2'
              {...register('password')}
            />
            <input
              type='submit'
              className='w-2/3 rounded-xl mx-auto p-2 text-lg border-2'
            />
          </form>
          <button
            className='w-2/3 mx-auto text-center text-lg p-2 border-2 rounded-xl'
            onClick={() =>
              router.push(
                'http://localhost:8082/api/v1/auth/oauth2Login/google'
              )
            }
          >
            Login with google
          </button>
        </div>
      </div>
    </>
  )
}

export default LoginPage

LoginPage.getLayout = (page: ReactElement) => <>{page}</>
