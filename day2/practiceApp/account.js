//writing a simple banking application

var account=function(amount)
{
    console.log("--Welcome to you Bank--")
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
  };

  var deductamount=function(amount)
  {
      console.log("\ndeducted :"+amount);
      balance=balance-amount;
  };

   //publishing getBalance outside with same name
  return {
    //outside name : inside name
      currentBalance:getBalance,

      creditamount:addamount,

      debitamount:deductamount
  }
}

//creating the object of the function account
var account1=new account(45000);

//making a bal variable and storing balance inside it using getBalance function
var bal=account1.currentBalance();
console.log("Balance is: "+bal);  

//applying credit operation using creditamount functions:
var newamount=5000;
account1.creditamount(newamount);
//showing current balance after operation
 bal=account1.currentBalance();
console.log("Balance is: "+bal);  

//applying debit operation using debitamount functions:
var newamount=10000;
account1.debitamount(newamount);
//showing current balance after operation
 bal=account1.currentBalance();
console.log("Balance is: "+bal);  