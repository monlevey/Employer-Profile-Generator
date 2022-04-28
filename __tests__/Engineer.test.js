const Engineer = require('./../src/engineer');


describe('Engineer class test', () => {

    // can create the object
    it('should create a new object with the parameters name, employee id and email', () => {

        const engineer = new Engineer("fred", 111, "fred@gmail.com")
        expect(engineer).toBeInstanceOf(Engineer);        
        
    });
});

describe('Engineer set GitHub property test', () => {
     // take in the github arg, and set as property
     it('can set a name property in the constructor', () => {
        const github = "EngineerGithub";
        const engineer = new Engineer("aaa", 9090, 'aaa@aaa.com', "EngineerGithub");
        expect(engineer.github).toBe(github);
    });
});

describe('getRole() test', () => {
    // test getRole()
    it("can get the engineer role by calling getRole()", () => {
        
        const testValue = "Engineer";

        // replicate
        const engineer = new Engineer("aaa", 9090, 'aaa@aaa.com');

        const result = engineer.getRole();

        expect(result).toBe(testValue);
    });
});

describe('getGitHub() test', () => {
    // test getGithub()
    it("can get the github username by calling getGithub()", () => {
        
        const testValue = "EngineerGithub";

        // replicate
        const engineer = new Engineer("aaa", 9090, 'aaa@aaa.com', "EngineerGithub");

        const result = engineer.getGithub();

        expect(result).toBe(testValue);
    });
});