import styled from "styled-components";

export const StyledHeader = styled.header`
   background: #F0F8FF;
   box-shadow:2px 2px 7px ;
   opacity:70%;
   margin-bottom:50px;

   .flexBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;

         .img_container{
            display: flex;
           flex-direction: column;
           gap:15px;

           .btn_logout{
            display: flex;
            gap:5px;
            align-items:center;
            justify-content: center;
            font-size: 1rem;
            font-weight:700;
            color:var(--color-red1)
           }
         }

         img{
           max-width:100%;
           width:70px;
           border-radius:100px;
           opacity:100%;
         }
         img:hover{
            opacity:80%;
         }
         h2{
            opacity:80%;
            font-weight:500;
            font-size:1.5rem;


         }
      
      .hour_date{
         display:flex;
         gap: 20px;
         li{
            display:flex;
            gap:5px;
            font-size:1.2rem;
            font-weight:500;
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
`;