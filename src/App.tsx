import * as React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";
import theme from './theme'
import Characters from './screens/characters'
import NavBar from './components/layout/nav-bar'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme} resetCSS>
        <NavBar />
        <Characters />
        <ReactQueryDevtools />
      </ChakraProvider>
    </QueryClientProvider>
  )
}