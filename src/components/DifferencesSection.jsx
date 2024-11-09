import Button from "./Button/Button"
import { useState } from 'react'
import {differences} from '../data'
export default function DifferenceSection(){
    const [contentType, setContentType] = useState(null)

    console.log('App Component Render')
    function handleClick(type){
    setContentType(type) 
    }
    return (
        <section>
          <h3>What is the our difference from other</h3>
          <Button isActive={contentType == 'way'} onClick={()=> handleClick('way')}>Click 1</Button>
          <Button isActive={contentType == 'easy'} onClick={()=> handleClick('easy')}>Click 2</Button>
          <Button isActive={contentType == 'program'} onClick={()=> handleClick('program')}>Click 3</Button>
          {contentType && <p>{differences[contentType]} </p>}
          {!contentType && <p>Press Button</p>}
        </section>
    )
}