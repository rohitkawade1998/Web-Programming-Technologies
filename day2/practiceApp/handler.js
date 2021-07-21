

//writing event handling in a seperate file
//handler file that will contain handlers for the event that will happen in account file
//exports is used to make these functions available to outside files
//publishing functions outside thsi file using exports keyword

exports.payIncometax=function()
{
    console.log("29% income tax to be applied");
}

exports.blockAccount=function()
{
    console.log("Blocking Account Temporarilyyy !!!");

}

exports.sendEmail=function()
{
    console.log("Email is sent to your Reg. email id.");
}

exports.sendSms=function()
{
    console.log("SMS is sent to yr Reg. mobile No.");
}
