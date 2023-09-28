class person {
    constructor (firstname,Lastname,DOB,Role,){
        this.firstname = firstname;
        this.Lastname= Lastname;
        this.DOB= DOB;
        this.Role= Role;
    }
    }
    
    var p1 = new person("Logesh","Baskaran", "29/08", "Developer" );
    console.log(`Hi, This is  ${p1.firstname} ${p1.Lastname} and I'm a ${p1.Role}.I was born in ${p1.DOB}.`);