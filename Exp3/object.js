const ves = {
    name: 'VESIT',
    address: 'chembur',
    phone: 4563728282,
    types: ['engineering','architecture','pharmacy'],
    greet:function () 
    {
    console.log("welcome to"+ " " + this.name);
    },
    branch: 
    {
    name: 'AIDS',
    strength: 70
    }
}
    console.log('Type of object is: ' + typeof ves)
    console.log(ves.greet)
    console.log(ves)
