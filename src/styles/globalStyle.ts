import { createGlobalStyle } from 'styled-components';

const globalStlye = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
    
    * {
        font-family: "Noto Sans", "Noto Sans CJK KR", sans-serif;
        margin: 0;
        padding: 0;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
        -ms-overflow-style: none;
        &::-webkit-scrollbar { 
            display: none !important;
        }
    }

    button {
        border: 0px;
        background-color: transparent;
        outline: none;
    }
`

export default globalStlye;