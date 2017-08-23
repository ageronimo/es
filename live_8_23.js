// non inheritance / oop
class Employee {
  constructor(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  }
  
  getFullName() {
    return '${this.firstName} ${this.lastName}';
  }
}

// class Manager {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.managesEmployees = [];
//   }

//   getFullName() {
//     return '${this.firstName} ${this.lastName}';
//   }

//   addEmployee(employee) {
//     this.managesEmployees.push(employee);
//   }
// }



//ES6 OOP

class Manager extends Employee {
  constructor(firstName, lastName) {
   super(firstName, lastName); // inherits name assignment | Employee is parent class
   this._managesEmployees = [];
  }

  addEmployee(employee) {
    this._managesEmployees.push(employee);
  }
}

let bob = new Manager('Bob', 'Thorn');
// console.log(bob.getFullName());
bob.addEmployee('Cindy');
console.log(bob._managesEmployees);