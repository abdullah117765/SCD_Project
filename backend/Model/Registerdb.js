
// c
      







      

 export function  GetUser(em){
    

  
    return qq;


};



 










/*
Fruit.insertMany([orange,melon],function(err){
    if(err){
        console.log(err);

    }else{
        console.log("Successfully saved all the fruits to fruitDb");
    }
});

*/


// now we will learn how to  get from database






// now we will se how to update a db we will fetch a record on the basis of id that was generated by db


export function SearchUser(num){
Fruit.updateOne({ Number:num},function(err){
    if(err){
        console.log(err);
    }else{
    console.log("Successfully updated the document.");
    }
});

};


export function DeleteUser(num){

// now we will see how to delete a row from table

User.deleteOne({Number:num },function(err){
    if(err){
        console.log(err);
    }else{
    console.log("Successfully deleted from the document.");
    }
});

};

//  export default {SaveUser,DeleteUser,GetUser,SearchUser} ;

// module.exports={SaveUser,DeleteUser,GetUser,SearchUser};
