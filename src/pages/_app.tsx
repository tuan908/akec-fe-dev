import { wrapper } from '@/app/store'
import '@/styles/main.scss'
import { type AppPropsWithLayout } from '@/types'
import { createTheme, ThemeProvider } from '@mui/material'
import { SessionProvider } from 'next-auth/react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Loading = dynamic(() => import('@/components/shared/Loading'))
const CssBaseline = dynamic(() => import('@mui/material/CssBaseline'))
const StateProvider = dynamic(() =>
  import('react-redux').then(module => module.Provider)
)

const theme = createTheme({
  components: {
    MuiIconButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true
      }
    }
  }
})

export default function App({
  Component,
  pageProps: { session, ...rest }
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page)
  const { store, props } = wrapper.useWrappedStore(rest)

  return (
    <SessionProvider session={session}>
      <StateProvider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Suspense fallback={<Loading />}>
            {getLayout(<Component {...props} />)}
          </Suspense>
        </ThemeProvider>
      </StateProvider>
    </SessionProvider>
  )
}