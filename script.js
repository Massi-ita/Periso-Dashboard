const standings = [
    {pos:1, team:"Equipo A", pts:24},
    {pos:2, team:"Equipo B", pts:22},
    {pos:3, team:"Periso CF", pts:20},
    {pos:4, team:"Equipo D", pts:18}
];
const table = document.getElementById("standings");
standings.forEach(team => {
    const row = `
        <tr>
            <td>${team.pos}</td>
            <td>${team.team}</td>
            <td>${team.pts}</td>
        </tr>
    `;
    table.innerHTML += row;
});
document.getElementById("games").innerText = 10;
document.getElementById("goals").innerText = 5;
document.getElementById("assists").innerText = 3;
document.getElementById("next-match").innerText =
    "Periso CF vs Rival - Próximo sábado";
