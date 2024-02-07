function emailParse(email){
    //split into username and domain use @ symbol as delimeter
    const [username, domain] = email.split('@');
    
    //create an object as key
    const parseEmail = {
        username: username,
        domain: domain
    };

    //return object s
    return parseEmail;
}

console.log(emailParse("coolcoder43@goodmail.com"));