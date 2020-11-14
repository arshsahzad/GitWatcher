import React from 'react'
import {useParams} from 'react-router'
import {DivProfile,RepoDiv} from './styleMain'
import GetApiData from '../../services/api' 


export default function RepoPage(){
    const [repository , Setrepository] = React.useState()
    const [ProfileData , setProfileData] = React.useState('xD')
    const {user} = useParams();
   
    
    React.useState(()=>{
        
        GetApiData(user).then(res=> setProfileData(res))    
        GetApiData(user+'/repos').then((res)=>Setrepository(res))


    
    },[])

   

    return (
       <>
       <DivProfile>
           {ProfileData &&
        
           <DivProf User={ProfileData.login} Username={ProfileData.name} 
           local={ProfileData.location} email={ProfileData.email} 
           id={ProfileData.id}
           img={ProfileData.avatar_url} 
           repototal={ProfileData.public_repos}/>}
       
       </DivProfile>


       
       {repository &&  repository.map((rep)=>{
           return(
               <RepoDiv>
                    <a key={rep.id} href={rep.html_url}>
                        <span>ID: {rep.id}</span>
                        <section>
                            <h3>{rep.full_name}</h3>
                            
                        </section>
                        <span>Forks:{rep.forks}</span>

                    </a>
                </RepoDiv>
           )
       }) 
        }
       </>
    )


    

    
} 
//



function DivProf({User,Username , local , email , id , repototal,img}){
 
    return(
        
     
        <>
            <img src={img} alt={User}/>
            
                <section>
                    
                        <h3>User:{User}</h3>
                        <h3>Username: {Username}</h3>
                        <h3>Location: {local}</h3>
                    </section>
                <section>
                    <h3>Email: {email}</h3>
                    <h3>ID: {id}</h3>
                    <h3>Total Repositorys: {repototal}</h3>
                </section>
            
        </>
        
    

    )
}


