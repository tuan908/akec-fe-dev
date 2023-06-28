import { wrapper } from '@/app/store'
import dynamic from 'next/dynamic'
import '@/styles/main.scss'
import { createTheme, ThemeProvider } from '@mui/material'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, Suspense } from 'react'
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

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout }

const App: React.FC<AppPropsWithLayout> = ({ Component, ...otherProps }) => {
  const getLayout = Component.getLayout || (page => page)
  const { store, props } = wrapper.useWrappedStore(otherProps)

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<Loading />}>
          {getLayout(<Component {...props.pageProps} />)}
        </Suspense>
      </ThemeProvider>
    </Provider>
  )
}

export default App
