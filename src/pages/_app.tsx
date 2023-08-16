import { wrapper } from '@/app/store'
import dynamic from 'next/dynamic'
import '@/styles/main.scss'
import { createTheme, ThemeProvider } from '@mui/material'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, Suspense } from 'react'
import { Provider } from 'react-redux'
import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

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

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppInitProps = AppProps<{ session: Session }>

export type AppPropsWithLayout = AppInitProps & {
  Component: NextPageWithLayout
}

const App: React.FC<AppPropsWithLayout> = ({ Component, ...otherProps }) => {
  const getLayout = Component.getLayout || (page => page)
  const { store, props } = wrapper.useWrappedStore(otherProps)

  return (
    <Provider store={store}>
      <SessionProvider session={otherProps.pageProps.session}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Suspense fallback={<Loading />}>
            {getLayout(<Component {...props.pageProps} />)}
          </Suspense>
        </ThemeProvider>
      </SessionProvider>
    </Provider>
  )
}

export default App
