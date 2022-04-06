import React from 'react'
import Route from './src/navigation/Route'
import store from './src/Store'
import {Provider} from 'react-redux'




const App = () => {

  return (
    <>
    <Provider  store={store}>
  
    <Route/>
      </Provider>
  </>
  )
}
export default App;