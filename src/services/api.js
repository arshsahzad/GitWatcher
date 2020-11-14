const axios = require('axios').default;



export default async function GetApiData(profile){
    let data;

    try{
        data = await axios.get('https://api.github.com/users/'+profile).then((res)=>res.data)

    } catch(Err){
        if(Err){return null}
        
     }
    
    for (let x in data){
        if(data[x] === undefined || data[x] === null){
            data[x] = 'Undefined';
        }
    }
    
    

    return data
    
}


