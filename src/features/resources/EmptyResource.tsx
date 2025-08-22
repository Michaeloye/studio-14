import {  Heading, VStack, Text } from '@chakra-ui/react'
import React from 'react'

const EmptyResource = () => {
  return (
    <VStack gap={2}>
      <Heading as="h2" fontSize="2xl">Sorry :(</Heading>
      <Text>No resources available</Text>
    </VStack>
  )
}

export default EmptyResource