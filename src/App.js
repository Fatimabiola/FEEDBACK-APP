// import {useState} from 'react'
import Header from './Components/Header'
import FeedbackList from './Components/FeedbackList'
// import FeedbackData from './Data/FeedbackData'
import FeedbackStatus from './Components/FeedbackStatus'
import FeedbackForm from './Components/FeedbackForm'
import {FeedbackProvider} from './context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider> 
    <Header peop="FEEDBACK UI"   />
    <FeedbackForm />
    <FeedbackStatus/>
    <div className='container'>
    <FeedbackList />
     </div>
    </FeedbackProvider>
  )
}
Header.defaultProps ={
    peop: 'Hello People',
    bgColor:'purple',
    textColor:'pink'
}

export default App