const Intern = require('./../src/intern');


describe('intern class test', () => {

    // can create the object
    it('should create a new object with the parameters name, employee id and email', () => {

        const intern = new Intern("fred", 111, "fred@gmail.com")
        expect(intern).toBeInstanceOf(Intern);        
        
    });
});

describe('intern set school property test', () => {
     // take in the school arg, and set as property
     it('can set a school property in the constructor', () => {
        const school = "intern's school";
        const intern = new Intern("aaa", 9090, 'aaa@aaa.com', "intern's school");
        expect(intern.school).toBe(school);
    });
});

describe('getRole() test', () => {
    // test getRole()
    it("can get the intern role by calling getRole()", () => {
        
        const testValue = "Intern";

        // replicate
        const intern = new Intern("aaa", 9090, 'aaa@aaa.com');

        const result = intern.getRole();

        expect(result).toBe(testValue);
    });
});

describe('getSchool() test', () => {
    // test getSchool()
    it("can get the School by calling getSchool()", () => {
        
        const testValue = "intern's school";

        // replicate
        const intern = new Intern("aaa", 9090, 'aaa@aaa.com', "intern's school");

        const result = intern.getSchool();

        expect(result).toBe(testValue);
    });
});