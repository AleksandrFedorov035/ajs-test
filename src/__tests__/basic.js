import calculateHealth from "../character"

test.each ([
    
    [{ name: 'мечник', health: 10 }, 'critical'],
    [{ name: 'маг', health: 20 }, 'wounded'],
    [{ name: 'лучник', health: 80 }, 'healthy'],
])
('testing calculateHealth function %s with %i health percentages', (player, expected) => {
    const result = calculateHealth(player);
    expect(result).toBe(expected); 
})
