import {v4 as uuidv4} from 'uuid'
import { createContext, useState } from "react";

const FeedbackContext =createContext()
export const FeedbackProvider =({children})=>{
const [feedback, setFeedback] = useState([
   {id:1,
    text:'This is a Context Component',
    rating:10,
   },
   {id:2,
    text:'This is a feedback response',
    rating:9,
   },
   {id:3,
    text:'All messages in  a Context Component',
    rating:8,
   }
])
  //add feedback messagae to item
const addFeedBack =(newFeedback) =>{
    newFeedback.id = uuidv4()
    setFeedback ([newFeedback, ...feedback])
  }
  //delete feedback message from item
const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete feedback message?')){
      setFeedback (feedback.filter((item) => item.id !== id))
    }
  }
  //feedback edit button
  const [feedbackEdit, setFeedbackEdit] =useState({
    item:{},
    edit:false
  })
  const editFeedback=(item)=>{
    setFeedbackEdit({
      item,
      edit:true
    })
  }
  //update feedback messsage
  const updateFeedback =(id, updItem)=>{
    setFeedback (feedback.map((item)=> item.id ===id ?{...item, ...updItem} :item))

  }
return (
<FeedbackContext.Provider
//set item to be updated
    value={{
          feedback,
         deleteFeedback,
        addFeedBack,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}
    >
        {children}
        
    </FeedbackContext.Provider>

)
}
export default FeedbackContext