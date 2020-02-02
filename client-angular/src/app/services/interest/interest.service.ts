

 import { Injectable } from '@angular/core';

 @Injectable()
 export class InterestService {

   constructor() { }

   // Get all interests list via API or any data storage
   getAllInterests(){
     let interestList:any;
     if(localStorage.getItem('interests') && localStorage.getItem('interests') != '') {
       interestList = {
         code : 200,
         message : "Interests List Fetched Successfully",
         data : JSON.parse(localStorage.getItem('interests'))
       }
     }else{
       interestList = {
         code : 200,
         message : "Interests List Fetched Successfully",
         data : JSON.parse(localStorage.getItem('interests'))
       }
     }
     return interestList;
   }

   doRegisterInterest(data, index){
     let interestList = JSON.parse(localStorage.getItem('interests'));
     let returnData;
     console.log("index", index);
     if(index != null) {


       for (var i = 0; i < interestList.length; i++) {
         if (index != i && interestList[i].email == data.email) {
           returnData = {
             code : 503,
             message : "Email Address Already In Use",
             data : null
           }    
           return returnData;
         }
       }

       interestList[index] = data;
       localStorage.setItem('interests',JSON.stringify(interestList));
       returnData = {
         code : 200,
         message : "Interest Successfully Updated",
         data : JSON.parse(localStorage.getItem('interests'))
       }    
     }else{      
       data.id = this.generateRandomID();
       for (var i = 0; i < interestList.length; i++) {
         if (interestList[i].email == data.email) {
           returnData = {
             code : 503,
             message : "Email Address Already In Use",
             data : null
           }    
           return returnData;
         }
       }
       interestList.unshift(data);

       localStorage.setItem('interests',JSON.stringify(interestList));

       returnData = {
         code : 200,
         message : "Interest Successfully Added",
         data : JSON.parse(localStorage.getItem('interests'))
       }    
     }
     return returnData;
   }

   deleteInterest(index:number){
     let interestList = JSON.parse(localStorage.getItem('interests'));

     interestList.splice(index, 1);

     localStorage.setItem('interests',JSON.stringify(interestList));

     let returnData = {
       code : 200,
       message : "Interest Successfully Deleted",
       data : JSON.parse(localStorage.getItem('interests'))
     }

     return returnData;
   }



   getInterestDetails(index:number){
     let interestList = JSON.parse(localStorage.getItem('interests'));

     let returnData = {
       code : 200,
       message : "Interest Details Fetched",
       interestData : interestList[index]
     }

     return returnData;
   }


   generateRandomID() {
     var x = Math.floor((Math.random() * Math.random() * 9999));
     return x;
   }

 }

