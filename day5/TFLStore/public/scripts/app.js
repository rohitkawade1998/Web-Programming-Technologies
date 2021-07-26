    

    var onRegisterClick=function()
    {
        console.log("haha");
         var emailElement=document.getElementById("1");
         var emailData=emailElement.value;

         var passwordElement=document.getElementById("2");
         var passwordData=passwordElement.value;

         var cpasswordElement=document.getElementById("3");
         var cpasswordData=cpasswordElement.value;

         var nameElement=document.getElementById("4");
         var nameData=nameElement.value;

         var dobElement=document.getElementById("5");
         var dobData=dobElement.value;

         var contactElement=document.getElementById("6");
         var contactData=contactElement.value;

         //getting reference of element whose id is dataEmail
         var dataEmailElement=document.getElementById("r1");
         //overwriting emailData into showEmail
          dataEmailElement.innerHTML=emailData;

         //getting reference of element whose id is dataEmail
         var dataPasswordElement=document.getElementById("r2");
         //overwriting passwordData into showPassword
         dataPasswordElement.innerHTML=passwordData;

          var cdataPasswordElement=document.getElementById("r3");
           cdataPasswordElement.innerHTML=cpasswordData;

            var dataNameElement=document.getElementById("r4");
           dataNameElement.innerHTML=nameData;

            var datadobElement=document.getElementById("r5");
           datadobElement.innerHTML=dobData;

            var datacontactElement=document.getElementById("r6");
           datacontactElement.innerHTML=contactData;
    }