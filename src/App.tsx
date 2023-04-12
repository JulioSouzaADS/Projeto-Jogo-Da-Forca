import { useEffect, useState } from 'react'
import './App.css'
import HengmanDrawning from './components/hengmanDrawning'
import HengmanWord from './components/hengmanWord'
import Keyboard from './components/keyboard'
import styled from 'styled-components'


video 19:40 Desafio Técnico React - Jogo da Forca (Parte 2) #Dia20//

const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 4rem;
align-items: center;
width: 375px;
`
const HengmanPart = styled.div`
 display: flex;
 flex-direction: column;
 gap: 2rem;
 width: 375px;
 `

const words = ['reagir', 'props', 'react']


function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  )

  function addGuessedLetters(letter:string) {
    if (guessedLetters.includes(letter)) return

    setGuessedLetters((guessedLetters) => [...guessedLetters,letter])
  }


  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
  
      e.preventDefault();
  
      addGuessedLetters(key);
    } 
  
    document.addEventListener("keypress", handler);
  
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);
  

  return (
    <>
      <Wrapper>
        <HengmanPart>
          <h2> Julio Souza</h2>
          <HengmanDrawning numberOfGuesses={incorrectGuesses.length} />
          <HengmanWord guessedLetters={guessedLetters} word={wordToGuess} />
        </HengmanPart>
        <Keyboard />
      </Wrapper>
    </>
  )
}

export default App
