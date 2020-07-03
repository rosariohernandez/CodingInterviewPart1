var employee = document.getElementById('cardContainer');

//variable for XMLHttp request
var request = new XMLHttpRequest();
//open connection with URL provided
request.open('GET', 'http://sandbox.bittsdevelopment.com/code1/fetchemployees.php', true);

request.onload = function() {

 
    var info = JSON.parse(this.response);

   
    /*console.log(Object.values(data));*/
 
    Object.values(info).forEach((value) => {

        
        //new div for each employee card    
        var empCard = document.createElement('div');
        empCard.setAttribute('class', 'empCard');
        employee.appendChild(empCard);

       

        // new div for employee picture  
        var employeeImage = document.createElement('img');
        var image = "http://sandbox.bittsdevelopment.com/code1/employeepics/id.jpg"; 
        var empImg = image.replace("id", value.employeeid);
        
        /*console.log(empImg); */
        employeeImage.setAttribute('src', empImg);
        empCard.appendChild(employeeImage);

        // new div for employee name
        var employeeName = document.createElement('h2');
        employeeName.innerHTML = (value.employeefname + " " + value.employeelname);
        empCard.appendChild(employeeName);

        //new div for employee role
        var employeeBio = document.createElement('p');
        employeeBio.innerHTML = (value.employeebio);
        empCard.appendChild(employeeBio);

        //each employee role 
        for(var role of value.roles){
            var employeeRole = document.createElement('div');
            employeeRole.setAttribute('class', 'empRole'); 
            employeeRole.setAttribute('id', role.roleid);
            employeeRole.setAttribute("style","background-color:" + role.rolecolor);
            employeeRole.innerHTML +=(role.rolename);  
            empCard.appendChild(employeeRole); 
        }
    });
}

request.send();


/*
//christines API
http://sandbox.bittsdevelopment.com/code1/fetchemployees.php
//how to use JSON data with javascript
https://www.taniarascia.com/how-to-use-json-data-with-php-or-javascript/
//oject.values method
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
//create element method
//https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
//set attribute method
https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
//how to connect to an API with javascript:
https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/*/