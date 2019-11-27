import styled from "styled-components";

export const Row = styled.div.attrs({className:"row"})``
export const RowCentered = styled.div.attrs({className:"row justify-content-md-center"})``
export const Col = styled.div.attrs({className:"col text-center"})``
export const ColCenter = styled.div.attrs({className:"col text-center"})``
export const ColLeft = styled.div.attrs({className:"col text-left"})``
export const ColRight = styled.div.attrs({className:"col text-right"})``

export const Col1 = styled.div.attrs({className: "col-1 text-center"})``
export const Col2 = styled.div.attrs({className: "col-2 text-center"})``
export const Col3 = styled.div.attrs({className: "col-3 text-center"})``
export const Col4 = styled.div.attrs({className: "col-4 text-center"})``
export const Col6 = styled.div.attrs({className: "col-6 text-center"})``
export const Col12 = styled.div.attrs({className: "col-12 text-center"})``

export const Jumbotron = styled.div.attrs({className:"jumbotron"})``
export const Container = styled.div.attrs({className:"container fluid"})``
export const Centered = styled.div.attrs({className: "d-flex align-items-center justify-content-center"})``

export const Button = styled.button`
    background-color: white;
    color: black;
    border: 0;
    border-radius: 1rem;
    padding: 1rem;
    :hover {
        background-color: black;
        color: white;
    }
`

export const Nav = styled.div.attrs({className: "navbar navbar-light bg-light"})``;
export const NavItem = styled.a.attrs({className: "navbar-brand", href: `${props => props.href}`})`
:hover {
    stroke-width: 5.3px;
    -webkit-stroke-width: 5.3px;
    -webkit-stroke-color: #FFFFFF;
    -webkit-fill-color: #FFFFFF;
    text-shadow: 1px 0px 20px black;
}`;
export const NavExpander = styled.div.attrs({className:"mr-auto navbar-nav"})``

export const PresetCardContainer = styled.div.attrs({className: "my-3"})`
    height: 12rem;
    background-color: white;
    color: black;
    border: 0;
    border-radius: 1rem;
    padding: 1rem;
    :hover {
        background-color: black;
        color: white;
    }
`