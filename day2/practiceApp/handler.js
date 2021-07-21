

//writing event handling in a seperate file
//handler file that will contain handlers for the event that will happen in account file
//exports is used to make these functions available to outside files

exports.payIncometax=function()
{
    console.log("20% income tax to be applied");
}

exports.blockAccount=function()
{
    console.log("Blocking Account Temporarily !!!");
}