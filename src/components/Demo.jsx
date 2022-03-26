import styled from "styled-components";
const Mydiv = styled.div`//this variable should be fronnt le
color : white;
background-color: red;
h2{
    color:blue;
    @media all and (max-width: 620px){
        color: green;
    }
}
`;
const Atag = styled.a`
text-decoration: none;
font-size: 24px;
color: ${(props)=>(props.color === "yellow" ? "Yellow" : "green")};
`;
// const Anchor = 
export function Demo(){
return (
<>
<Mydiv>
    Welcome
    <h2>This is masai</h2>
    <Atag color="white" href="https://www.google.com">Go To Goggle</Atag>
</Mydiv>
</>
)
}