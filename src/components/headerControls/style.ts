import styled from "styled-components";

export const StyledHeaderControls = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;  
    .select_container{
        display: flex;
        gap:20px;
        width:50%;
        align-items:center;
        justify-content:flex-end;

        select{
            width: 40%;
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 1rem;

            ::placeholder{
                color: rgba(255,255,255, .5);
            }
    }
        }
    
    `