import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import homeSelector from 'storage/home/selector'
import { trigger } from 'storage/home/ducks'

import { Container } from './styled'
import { Title } from 'components/UI/Typography'

const Home = () => {
  const dispatch = useDispatch()
  const { welcome } = useSelector(homeSelector)

  useEffect(() => {
    dispatch(trigger())
  }, [dispatch])

  return (
    <Container>
      <Title>{welcome}</Title>
    </Container>
  )
}

export default Home