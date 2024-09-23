// Protypal Inheritance -> to inherite properties of others

// __proto__ -> it allows an entity to inherite properties of of others

// Syntax -> entityName.__proto__ = targetEntity;
// Syntax in Object -> __proto__: targetEntity,


const User = {
    name: "Blank",
    email: "Blank@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport, // TASupport will inherite TeachingSupport's properties
}

Teacher.__proto__ = User

// But this is Old syntax and some what confusing to many people so we have now modern syntax for 
// Inheritance

// Modern Syntax 
Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport will inherite Teacher's properties