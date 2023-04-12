import styled from "styled-components"

const Wrapper = styled.div`
display: flex;

justify-content: center;
gap: 0.5rem;
font-size: 4rem;
font-weight: bold;
text-transform: uppercase;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`
interface HangmanWordProps {
  word: string 
  guessedLetters:string[]
}

export default function HengmanWord({word,guessedLetters}: HangmanWordProps) {

  return (
    <div><Wrapper> {word.split('').map((letter, index) => (
      <span style={{ borderBottom: '0.1em solid white', height: "80px",minWidth:'50px' }} key={index}>
        <span style={{ visibility:guessedLetters.includes(letter)?'visible': "hidden" }}>{letter} </span>
      </span>


    ))} </Wrapper></div>
  )
}
