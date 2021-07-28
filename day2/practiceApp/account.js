//writing a simple banking application

//Domain:banking
//Operations: Credit,Debit
//Business Entity: Account
//Rule: Constraints,Policy

//declaring a variable for handlers
//so that we can call functions of handler class by using this variable
var handlers=require("./handler");

//declaring a eventtt variable to get reference of events module
var eventtt=require("events"); //builtin module: events , of node js

//now using above variable we will use a inbuilt class: 'EventEmitter()' present under 'events' module
//store its reference to emitterr variable
var emitterr=new eventtt.EventEmitter();

//variable declared bcaz we cannot call the outside functions directly
//handlers is a variable that will be used to call the handler functions from handler file
//require behaves like importing
// "." is used to specify that handler is in same forlder
//'handler' is the relative path of that handler file

//seperation of concern (SOC) is applied here

var account=function(amount)
{
    console.log("\n--Welcome to you Bank--\n")
  var balance=amount;
  var getBalance=function()
  {
      return balance;
  }

  //creating new addamount and deduct amount functions to perform credit and debit operation
  var addamount=function(amount)
  {
      console.log("\ncredited :"+amount);
      balance=balance+amount;
      monitor();  //monitoring credit ooperation
  };

  var deductamount=function(amount)
  {
      console.log("\ndeducted :"+amount);
      balance=balance-amount;
       monitor(); //monitoring debit ooperation
  };


//creating a monitor which will monitor each transaction 
//and will perform some operation if some situation occurs as per given conditions
  var monitor=function()
  {
      if (balance<500)
      {
         // console.log("Insuficient balance:Cannot proceed further");

          //handlers.blockAccount();   
          //rather that calling above fuction we will emit trigger events underbalance   
            emitterr.emit("underBalance");
      }
      else if(balance>250000)
      {
          //console.log("Over Balance:tax will be applied");
         
          //handlers.payIncometax();
          //rather that calling above fuction we will emit trigger events overbalance
           emitterr.emit("overBalance");
      }
  };

   //we cannot use these inner functions outside acount function directly 
   //so we need to map this inner function to a diffrent function name 
   //by calling new function we will indirectly call to these inner functions
   //publishing getBalance, creditamount creditamount functions outside with a name 
   //this name to be used outside the parent function:Account(), to call the inner function

  return {
    //outside name : inside name
      currentBalance:getBalance,

      creditamount:addamount,

      debitamount:deductamount
  }
};

 
//events are always associated with instances(objects)
//step1: Configuration and initialisation of events
//registering Eventhandlers with event using emitter object

emitterr.on("underBalance",handlers.blockAccount);
emitterr.on("underBalance",handlers.sendEmail);
emitterr.on("underBalance",handlers.sendSms);
//if underBalance event raised call blockaccount,sendEmail and sendSms functions
//automatically from handler file
//one event raised can have multiple event listeners

emitterr.on("overBalance",handlers.payIncometax);
//if overBalance event raised call payIncometax function from handler file

//step 2 : creating objects,
//creating the object of the function account
var account1=new account(45000);

//step3 : invoking functions
//making a bal variable and storing balance inside it using getBalance function
var bal=account1.currentBalance();
console.log("Balance is: "+bal);  

//applying credit operation using creditamount functions:
var newamount=305000;
account1.creditamount(newamount);
//showing current balance after operation
 bal=account1.currentBalance();
console.log("Balance is: "+bal);  


//applying debit operation using debitamount functions:
var newamount=349900;
account1.debitamount(newamount);
//showing current balance after operation
 bal=account1.currentBalance();
console.log("Balance is: "+bal);  


