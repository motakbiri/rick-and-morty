import { extendTheme } from "@chakra-ui/react"

const colors = {
  gray: {
    100: "#f8faf2"
  },
  brand: {
    100: '#588300',
    200: '#4f6d00'
  },
}

const theme = extendTheme({ colors })
export default theme