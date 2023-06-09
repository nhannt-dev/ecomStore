import styled from "styled-components";
import { ButtonClick } from '../../components'

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    height: 44px;
`
export const WrapperButtonMore = styled(ButtonClick)`
    &:hover {
        color: #fff;
        background: rgb(13, 92, 182);
        span {
            color: #fff;
        }
    }
    width: 100%;
    text-align: center;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointers'}
`

export const WrapperProducts = styled.div`
    width: 56.1%;
    border-radius: 2px;
    margin: auto;
    display: flex;
    gap: 14px;
    margin-top:20px;
    flex-wrap: wrap;
`