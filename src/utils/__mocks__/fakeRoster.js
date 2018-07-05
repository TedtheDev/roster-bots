

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const generateUnique = (numberOfPlayers, currentPlayers) => {
    let players = [];
    let existingPlayers = JSON.parse(JSON.stringify(currentPlayers))
    for(let i = 0; i < numberOfPlayers; i++) {
        let player = {};
        let unique = false;
        while(!unique) {
            player['firstName'] = 'jon';
            player['lastName'] = 'jon';
            player['id'] = 'aaa111'; 
            
            // generate random number 0 to 100, but agility, speed, and strength
            // together cannot exceed 100
            let totalAttributeScore = 0;

            const agility = randomNumber(0,100);
            totalAttributeScore += agility;
            player['agility'] = 5;

            const speed = randomNumber(0, 100 - totalAttributeScore);
            totalAttributeScore += speed;
            player['speed'] = 5;
            
            const strength = randomNumber(0, 100 - totalAttributeScore);
            player['strength'] = 5;


            unique = playerExists(player, existingPlayers);
        }
        
        players.push(player);
        existingPlayers.push(player);
    }

    return players;
}

/**
 * return boolean value
 * true => if player has total score and/or first and last name and/or matching id
 * false => player is unique
 * equal to another player
 */
const playerExists = (player, existingPlayers) => {
    const matchingPlayers = existingPlayers.filter(aPlayer => {
        return (aPlayer.id === player.id) || 
        (aPlayer.firstName === player.firstName && aPlayer.lastName === player.lastName) || 
        (aPlayer.strength + aPlayer.agility + aPlayer.speed === player.strength + player.agility + player.speed);
    }).length <= 0;
    return matchingPlayers;
};

const FakeRoster = {
    generateUnique: generateUnique
}

export default FakeRoster;