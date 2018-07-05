import FakeRoster from './fakeRoster';

describe('FakeRoster', () => {
    let existingPlayers;

    beforeEach(() => {
        existingPlayers = [];
    });

    describe('random player', () => {
        const randomPlayers = FakeRoster.generateUnique(1, []);
        it('should have a first name', () => {
            const randomPlayer = randomPlayers[0];
            expect(randomPlayer.firstName).toBeDefined()
        });
        
        it('should have a last name', () => {
            const randomPlayer = randomPlayers[0];
            expect(randomPlayer.lastName).toBeDefined();
        });
        
        it('should have a strength attribute', () => {
            const randomPlayer = randomPlayers[0];
            expect(randomPlayer.strength).toBeDefined();
        });
        
        it('should have a speed attribute', () => {
            const randomPlayer = randomPlayers[0];
            expect(randomPlayer.speed).toBeDefined();
        });
        
        it('should have a agility attribute', () => {
            const randomPlayer = randomPlayers[0];
            expect(randomPlayer.agility).toBeDefined();
        });
        
        it('should have an id', () => {
            const randomPlayer = randomPlayers[0];
            expect(randomPlayer.id).toBeDefined();
        });
    });

    it('should generate 5 unique random players', () => {
        const randomPlayers = FakeRoster.generateUnique(5, []);
        expect(randomPlayers.length).toBe(5);
    });
});