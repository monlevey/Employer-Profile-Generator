const Employee = require('./../src/employee');


describe('Employee class test', () => {

    // can create the object
    it('should create a new object with the parameters name, employee id and email', () => {

        const employee = new Employee("fred", 111, "fred@gmail.com")
        expect(employee).toBeInstanceOf(Employee);        
        
    });

    // take in the name arg, and set as property
    it('can set a name property in the constructor', () => {
        const name = 'fred';
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });

    // take in the id arg, and set as property
    it("can set a id property in the constructor", () => {
        const theid = 111;
        const employee = new Employee('Fred', theid);
        expect(employee.id).toBe(theid);
    });

    // take in the email arg, and set as property
    it("can set a email property in the constructor", () => {
        const email = "fred@gmail.com";
        const employee = new Employee("fred", '111', email);
        expect(employee.email).toBe(email);
    });
});

describe('getName() test', () => {

    it('can get the employee name by calling getName()', () => {        
        
        const name = 'fred';

        const employee = new Employee(name, 111, 'fred@gmail.com');

        const result = employee.getName();

        expect(result).toBe(name);
    });

});


describe('getEmail() test', () => {
    // test getEmail()
    it("can get the employee email by calling getEmail()", () => {
       
        const email = "fred@gmail.com";

        const employee = new Employee("fred", 111, email);

        const result = employee.getEmail();

        expect(result).toBe(email);
    });
});

describe('getId() test', () => {
// test getId()
    it("can get the employee id by calling getId()", () => {
        
        const id = "111";

      
        const employee = new Employee("fred", id, 'fred@gmail.com');

        const result = employee.getId();

        expect(result).toBe(id);
    });
});

describe('getRole() test', () => {
    // test getRole()
    it("can get the employee role by calling getRole()", () => {
        
        const testValue = "Employee";

        // replicate
        const employee = new Employee("aaa", 9090, 'aaa@aaa.com');

        const result = employee.getRole();

        expect(result).toBe(testValue);
    });
});


