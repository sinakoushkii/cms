import { Button, Container } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/post/postSlice';

const App = () => {
  const count =useSelector(state=>state.posts.value);
  const dispatch = useDispatch();

  return (
    <Container fixed>
        <Button onClick={()=>dispatch(increment())} variant="contained">increment</Button>
          <span>Count: {count}</span>
        <Button onClick={()=>dispatch(decrement())} variant="contained">decrement</Button>
    </Container>
  )
}

export default App