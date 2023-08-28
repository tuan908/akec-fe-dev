import { wrapper } from '@/app/store'
import '@/styles/main.scss'
import { type AppPropsWithLayout } from '@/types'
import { createTheme, ThemeProvider } from '@mui/material'
import { SessionProvider } from 'next-auth/react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Provider } from 'react-redux'

const Loading = dynamic(() => import('@/component/shared/loading'))
const CssBaseline = dynamic(() => import('@mui/material/CssBaseline'))

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
    <Provider store={store}>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Suspense fallback={<Loading />}>
            {getLayout(<Component {...props} />)}
          </Suspense>
        </ThemeProvider>
      </SessionProvider>
    </Provider>
  )
}
