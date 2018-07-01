import faker from 'faker';

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const generate = (numberOfPlayers) => {
    let players = [];

    for(let i = 0; i < numberOfPlayers; i++) {
        let player = {};
        player['firstName'] = faker.name.firstName();
        player['lastName'] = faker.name.lastName();
        player['id'] = faker.random.alphaNumeric(6); 
        
        // generate random number 0 to 100, but agility, speed, and strength
        // together cannot exceed 100
        let totalAttributeScore = 0;

        const agility = randomNumber(0,100);
        totalAttributeScore += agility;
        player['agility'] = agility;

        const speed = randomNumber(0, 100 - totalAttributeScore);
        totalAttributeScore += speed;
        player['speed'] = speed;
        
        const strength = randomNumber(0, 100 - totalAttributeScore);
        player['strength'] = strength;

        players.push(player);
    }

    return players;
}

const FakeRoster = {
    generate: generate
}

export default FakeRoster;