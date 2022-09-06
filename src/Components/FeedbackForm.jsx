import {useState, useContext, useEffect} from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [Message, setMessage] = useState('')
    const {addFeedBack, feedbackEdit, updateFeedback} =useContext(FeedbackContext)
 useEffect (() =>{
    if(feedbackEdit.edit===true){
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
    }
 },[feedbackEdit])


    const handleTextChange = (e)=>{
        if (text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if (text !== '' && text.trim().length <=10){
            setMessage('Text must be at least 10 character')
            setBtnDisabled(true)
        }
        else{
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
if(text.trim().length > 10){
            const newFeedback = {
                text,
                 rating,
                }

        //updatefeeback in feedback form
        if(feedbackEdit.edit ===true){
            updateFeedback(feedbackEdit.item.id, newFeedback)
        }
            else{
                addFeedBack(newFeedback)
            }
            addFeedBack(newFeedback)
        }
       
                 setText('')
            }
    
        return (
    <Card>
            <form onSubmit={handleSubmit}>
            <h2>How would you like to rate us?</h2>
            <RatingSelect  select={(rating) => setRating(rating)}  />
            <div className='input-group'>
            <input onChange={handleTextChange} type='text' placeholder='write your review' value={text} />
            <Button   type='submit' version="primary" isDisabled={btnDisabled}>Send</Button>
        </div>  
        {Message && <div className='message'>{Message}</div>}
            </form>
    </Card>
  )
}

export default FeedbackForm