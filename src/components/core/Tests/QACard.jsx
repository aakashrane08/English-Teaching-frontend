import React from 'react'

export default function QACard(props) {
    const question = props.question
  return (
    <div>
        <p>{question.content}</p>
    </div>
  )
}
