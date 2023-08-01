import { AlertButton } from "./components/AlertButton"
import { StyledText } from "./components/StyledText"
import './App.css'

function App() {
  return (
    <>
      <AlertButton /> {/* Exemplo usando DefaultProps */}
      <AlertButton label={'Clique Aqui!!!'} /> {/* Exemplo sem usar DefaultProps */}

      <StyledText value="Texto colorido e com as letras maiúsculas." />
    </>
  )
}

export default App
