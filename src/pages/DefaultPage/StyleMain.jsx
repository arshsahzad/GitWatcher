import styled from "styled-components";
import searchicon from "../../assets/search-ico.svg";


const Header = styled.header`
    padding:2rem;
    
    letter-spacing: 4px;
    text-transform: uppercase;
    text-align:center;
    border-bottom:1px #ccc solid;
    
    

`;


const Main = styled.main`

   &{margin-top:5rem; position:relative; min-height: 40vh;

        


        form{
           
           display:flex;
           justify-content:center;
           
          

            
            button{
                position:relative;
                width: 2rem;
                left: -0.4rem;
                
                border:none;
                
                border: 1px #c9c4c4 solid;
            
                
                background: url(${searchicon}) no-repeat center;

                padding: 0 1rem;

                background-color: white;

                border-radius: 0 0.5rem 0.5rem 0 ;
            
                

            }
                
            input{
                font-size: 1.4rem;
                padding: 0.5rem 1.5rem;
                border: 1px #c9c4c4 solid;
                width: 60%;
                border-right: none;
                color: #6b6b6b;
                border-radius: 0.5rem 0 0 0.5rem;
                
               
                &::placeholder{
                color:#d1d0d0
                }

                &:hover{
                    border:1px #8a8989 solid;
                }
               

            }

            

            

            
        }




        @media (min-width:0px) and (max-width:600px){
                form{
                   
                   input::placeholder{
                        font-size: 1rem;
                   }
                
                }
            }


        
   }
  



`;



           
    



        






const DivProfileSearch = styled.div`

        &{
            position: relative;
           width:60%;
           border:1px black solid;
           margin: 2rem auto;
           border-radius: 0.5rem;
            padding: 1rem;
            transition : transform 0.3s;
            border: 1px #c9c4c4 solid;
            color: #474747;
            
           


            &:hover{
                transform: translateY(-5px);
                border:1px #8a8989 solid;
                
            }

            

            
        
             a{
                display:flex;
                align-items:center;
                justify-content:space-around;
                letter-spacing: 2px;
                
                

                
               
                img{
                width: 10%;
                height: 10%;
               
                border-radius: 50%;
                }
           
                section{
                    text-align:center;
                    text-transform: uppercase;
                }

           
            }
        
        
            @media (min-width:0px) and (max-width:600px){
                a{
                   
                   
                   display:flex;
                   flex-direction: column;
                
                    img{
                        width: 4rem;
                        height: 4rem;
                        border:1px black solid;
                        
                    }

                    section{
                        padding: 1rem;
                        
                        h3{
                            font-size: 1rem;
                            padding: 0.3rem 0;
                        }
                    }
                }
            }

        
        }

`;


const ErrScreen  = styled.div`
    &{
        width: 40%;
        margin: 2rem auto;
       
        text-align: center;
       
    }


`;


const DivVisitedProfiles = styled.footer`
    
     
        margin-top: 5rem;
        width: 70%;
        margin: 5rem auto;
        text-align:center;
        
        h3{
            padding: 1rem 0;
            color: #888888;
        }

        div{
            width: 100%;
            display:flex;
            justify-content:space-evenly;
            flex-direction:row-reverse;
          

            a{
                display:flex;
                color: #474747;
                border: 1px #c9c4c4 solid;
                align-items:center;
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                transition: all 0.3s;
                margin: 0 0.3rem;
                &:hover{
                    transform: translateY(-0.5rem);
                    border:1px #8a8989 solid;
                }

                img{
                    width: 2.5rem;
                    height:2.5rem;
                    border-radius:50%;
                    border: 1px #c9c4c4 solid;
                    margin-right: 1rem;
                }


            }


            @media (min-width:0px) and (max-width:600px){
                    &{
                        display:block;
                        
                       
                            
                            a{
                                margin: 1rem 0;
                                justify-content:space-evenly;
                            }

                        
                    }
                    
                
            }            



}
        
    
        
    
    
`;




export{
    Main,
    DivProfileSearch,
    ErrScreen,
    DivVisitedProfiles,
    Header,
   
}



