export default class LocalStorageControl{

    constructor(){
        if(!localStorage.getItem('total')){
            localStorage.setItem('total',3)
        }
    }


    Setlast(user,avatar_url){

        if(+localStorage.getItem('total') === 0){
            localStorage.setItem('total',3)
        }
        
        const lastprofile = {user,avatar_url}

        
        
        let idtotal = +localStorage.getItem('total')
        localStorage.setItem(idtotal,JSON.stringify(lastprofile))
        localStorage.setItem('total',idtotal-1);

    }


    getitems(){
        let items=[];
        
        
        for(let c=0;c < 4;c++){
            if(localStorage[c]){
                
                let data = localStorage[c]
                
                items.push(JSON.parse(data));
            }
        }

       return items;
    }

    
}
