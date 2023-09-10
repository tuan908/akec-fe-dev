import { Logger } from '@/util'
import { Component, type ErrorInfo, type PropsWithChildren } from 'react'

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<PropsWithChildren, State> {
  constructor(props: PropsWithChildren) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(_: Error) {
    return {
      hasError: true
    }
  }

  componentDidCatch(error: Error, _: ErrorInfo) {
    Logger.error(error.message)
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something went wrong</h1>
          <a href='/help'>Get help from us</a>
        </>
      )
    }
    return this.props.children
  }
}