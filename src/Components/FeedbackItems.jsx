import Card from './shared/Card'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackItems({item}) {
  const {deleteFeedback, editFeedback}= useContext(FeedbackContext)
    
  return (
    <Card className = 'card'>
       <div className='num-display'>{item.rating}</div>
       <button onClick={() => deleteFeedback(item.id)} className='close'>x</button>
       <button onClick={() => editFeedback(item)} className='edit'>o</button>
            <div className='text-display'>{item.text}</div>
           
        </Card>
    
  )
}

export default FeedbackItems