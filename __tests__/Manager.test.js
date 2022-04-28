const Manager = require('./../src/manager');


describe('Manager class test', () => {

    // can create the object
    it('should create a new object with the parameters name, employee id and email', () => {

        const manager = new Manager("fred", 111, "fred@gmail.com")
        expect(manager).toBeInstanceOf(Manager);        
        
    });
});

describe('Manager set Office Number property test', () => {
     // take in the office number arg, and set as property
     it('can set a office number property in the constructor', () => {
        const officeNumber = "Manager's Office Number";
        const manager = new Manager("aaa", 9090, 'aaa@aaa.com', "Manager's Office Number");
        expect(manager.officeNumber).toBe(officeNumber);
    });
});

describe('getRole() test', () => {
    // test getRole()
    it("can get the manager role by calling getRole()", () => {
        
        const testValue = "Manager";

        // replicate
        const manager = new Manager("aaa", 9090, 'aaa@aaa.com');

        const result = manager.getRole();

        expect(result).toBe(testValue);
    });
});

describe('getOfficeNumber() test', () => {
    // test getOfficeNumber()
    it("can get the Office Number by calling getOfficeNumber()", () => {
        
        const testValue = "Manager's Office Number";

        // replicate
        const manager = new Manager("aaa", 9090, 'aaa@aaa.com', "Manager's Office Number");

        const result = manager.getOfficeNumber();

        expect(result).toBe(testValue);
    });
});