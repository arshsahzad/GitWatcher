import styled from 'styled-components';



const DivProfile = styled.div`
    &{
        display:flex;
        width:75%;
        margin: 0 auto;
       
        flex-direction:row;
        justify-content:space-around;
        align-items: center;

        letter-spacing: 2px;
        font-size: 0.8rem;
        background: #fef9ff;

        border-radius: 0 0 1rem 1rem ;
        border:1px #b9b7b7 solid;
        border-top: 0;

        color:#525252;

        img{
            width: 5rem;
            height:5rem;
           
           border-radius: 50%;
        }

        section{

          
        
            h3{
                padding: 1rem;
            }
        }

 
 
        @media (min-width:0px) and (max-width:750px){
            &{
                flex-direction:column;
            
            
                section{
                    width: 100%;
                    text-align:center;
                }
            
            }

            
        }
 
 
    }
    

`;


const RepoDiv = styled.div`
    
    border:1px #b9b7b7 solid;
    width: 60%;
    padding:0.5rem;
    height: 5rem;
    margin: 1rem auto;
    background: #fef9ff;
    border-radius: 1rem 1rem 0 0;
    transition: transform 0.3s;
   
    
    
    &:hover{
            transform: translateY(-0.3rem);
            border:1px #8a8989 solid;
        }


    a{
        width: 100%;
        height: 100%;
        display:flex;
        align-items:center;
        justify-content:space-evenly;

        
        
        
       

        section{
            width: 40%;
            font-size: 0.8rem;
            text-align:center;
            color:#525252;
            word-wrap:break-word;
          
         
            
        }

    }
        @media (min-width:0px) and (max-width:750px){
            
            &{
                width:90%;
            }
            
            
            span:last-child{
                    
                display:none;       
            }
            
            
        }
    
`;

export{
    DivProfile,
    RepoDiv,
}