import styled from "styled-components";

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin: 20px 0;
`
export const Card = styled.div`
    flex: 0 0 23%;
    text-align: center;
    height: 400px;
    border: solid 1px black;
    padding: 15px;
    background-color: #f2f2f2;
`
export const CardBody = styled.div`
`
export const CardImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 60%;
`
export const Title = styled.p`
`
export const CardText = styled.p`
`
export const Button = styled.button`
  margin-left: 10px;
  box-shadow:inset 0px 1px 0px 0px #bbdaf7;
	background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
	background-color:#79bbff;
	border-radius:6px;
	border:1px solid #84bbf3;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #528ecc;
`
