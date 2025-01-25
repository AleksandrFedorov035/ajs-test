export default function CalculateHealth(players) {
    let HealthStatus = 'critical'
    if(players.health >= 50) {
        HealthStatus = "healthy"
    }
    if(players.health >= 15 && players.health <= 50) {
        HealthStatus = "wounded"
    }
    return HealthStatus;
}