import styled from "styled-components"


const BaseLine =styled.div `
height: 10px;
width: 250px;
background-color: white;

`
const VerticalLine = styled.div `
height: 250px;
width: 10px;
background-color: white;
margin-right: 40px;
`

const HorizontalLine = styled.div `
height: 10px;
width: 190px;
background-color: white;
position: absolute;
right: 40px;
top: 0;
`

const VerticalLineSmall = styled.div `
height: 40px;
width: 10px;
background-color: white;
margin-left: 150px;
position: absolute;
top: 0;
right: 40px;
`

const Head = styled.div `
height: 30px;
width: 30px;
border-radius: 50%;
border: solid 8px white;
margin-left: 150px;
position: absolute;
top:39px ;
right: 23px;
`

const Body = styled.div `
height: 80px;
width: 10px;
background-color: white;
position: absolute;
top: 80px;
right: 40px;
`


const RightArm = styled.div `
height: 10px;
width: 50px;
background-color: white;
position: absolute;
top: 90px;
right: 0px;
rotate: -30deg;
`

const LeftArm = styled.div `
height: 10px;
width: 50px;
background-color: white;
position: absolute;
top: 90px;
right: 40px;
rotate: 30deg;
`


const RightLeg = styled.div `
height: 10px;
width: 50px;
background-color: white;
position: absolute;
top: 163px;
right: 0px;
rotate: 30deg;

`
const LeftLeg = styled.div `
height: 10px;
width: 50px;
background-color: white;
position: absolute;
top: 163px;
right: 40px;
rotate: -30deg;
`

const bodyParts = [Head,Body,RightArm,LeftArm,RightLeg,LeftLeg]

interface HangmanDrawningProps {
  numberOfGuesses :number
}

export default function HengmanDrawning({numberOfGuesses}:HangmanDrawningProps) {
 
  return (
    <div style={{position: 'relative',
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
                }}>
      
      {bodyParts.slice(0,numberOfGuesses).map((BodyParty,index) => {
        return <BodyParty key={index}/>
      })}
      <VerticalLineSmall/>
      <HorizontalLine/>
      <VerticalLine/>
      <BaseLine/>
    </div>
  )
}


