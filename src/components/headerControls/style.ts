import styled from "styled-components";

export const StyledHeaderControls = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    
    .flexBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;}

    .add_caixa{
        display:flex;
        flex-direction:column;
        gap: 20px;

        button{
            font-size: 1rem;
            font-weight:700;
            border:1px solid var(--color-green1);
            width:150px;
            padding:5px;
            border-radius:4px;
            background-color:var(--color-green1);
            color:#fff;

        }
        button:hover{
            opacity:80%;
        }
    }
    .select_container{
        display: flex;
        flex-direction:column;
        gap:20px;
        align-items:center;
        form{
            display: flex;
            flex-direction: column;
            gap:15px;
            button{
                font-weight:900;
                font-size:.9rem;
                color:goldenrod
            }

            select{
                width: 170px;
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
                font-size: 1rem;
                border:1px solid goldenrod;
                padding:5px;
    
    
                ::placeholder{
                    color: rgba(255,255,255, .5);
                }
        }
        }
        }

        @media (min-width: 800px){
    padding: 5px 0;
    .flexBox{
        flex-direction: row;
        justify-content: space-between;
    }
   }
    
    `