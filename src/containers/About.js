import React from 'react'
import universal from 'react-universal-component'

import component from '../components/MyComponent'

const Failed = () => (
  <div style={{
    color: 'red'
  }}>
    <h1>Failed to load the heavy component!</h1>
  </div>
)

const Loading = () => (
  <div style={{
    color: 'yellow'
  }}>
    <h1>Loading this heavy component...</h1>
  </div>
)

const MyComponent = universal(component, {
  loading: Loading,
  error: Failed
})

export const preloadMyComponent = () => MyComponent.preload()
export default props => <MyComponent {...props} />
