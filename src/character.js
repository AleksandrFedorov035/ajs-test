export default function calculateHealth(players) {
    if(players.health >= 50) return "healthy"
    if(players.health >= 15) return "wounded"
    return 'critical';
}