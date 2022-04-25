const Employee = require('./../src/employee');


describe('Employee class test', () => {



    // can instantiated and create the object
    it('can be instantiated', () => {

        const employee = new Employee("fred", 111, "fred@gmail.com")
        expect(employee).toBeInstanceOf(Employee);        
        
    })

    // take in the name arg, and set as property
    it('can set a name property in the constructor', () => {
        const name = 'fred';
        const employee = new Employee(name, 1, "fred@gmail.com");
        expect(employee.name).toBe(name);
    })

    // take in the id arg, and set as property
    it("can set a id property in the constructor", () => {
        const id = "111";
        const employee = new Employee('fred', id, "fred@gmail.com");
        expect(employee.id).toBe(id);
    });
    // take in the email arg, and set as property
    it("can set a email property in the constructor", () => {
        const email = "fred@gmail.com";
        const employee = new Employee("fred", '111', email);
        expect(employee.email).toBe(email);
    });

    it('can get the employee name by calling getName()', () => {        
        
        const name = 'fred';

       
        const employee = new Employee(name, 111, 'fred@gmail.com');

        const result = employee.getName();

        expect(result).toBe(name);
    });


    // test getEmail()
    it("can get the employee email by calling getEmail()", () => {
       
        const email = "fred@gmail.com";

       
        const employee = new Employee("fred", 111, email);

        const result = employee.getEmail();

        expect(result).toBe(email);
    });

    // test getId()
    it("can get the employee id by calling getId()", () => {
        
        const id = "111";

      
        const employee = new Employee("fred", id, 'fred@gmail.com');

        const result = employee.getId();

        expect(result).toBe(id);
    });

    // test getRole()
    it("can get the employee role by calling getRole()", () => {
        
        const employee = "Employee";

        // replicate
        const employee = new Employee("aaa", 9090, 'aaa@aaa.com');

        const result = employee.getRole();

        expect(result).toBe(employee);
    });


})