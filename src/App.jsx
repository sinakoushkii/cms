import { Container } from '@mui/material'
import React from 'react'
import PostForm from './PostForm/PostForm'
import PostList from './PostList/PostList'

const App = () => {

  return (
    <Container fixed>
        <PostForm />
        <PostList />
    </Container>
  )
}

export default App