function skillsMember() {
    let member = {
        name: 'John',
        age: 30,
        skills: ['js', 'html', 'css'],
        salary: 2000
    };

    let skills = member.skills;

    skills.push('react', 'mongo');

    console.log(member);
}