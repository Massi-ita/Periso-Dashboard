* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Segoe UI, Arial, sans-serif;
    background: #f2f4f7;
    color: #222;
}

header {
    background: #062f63;
    color: white;
    padding: 30px;
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
}

.logo {
    width: 90px;
}

header h1 {
    font-size: 40px;
}

header p {
    font-size: 18px;
}

main {
    max-width: 1400px;
    margin: auto;
    padding: 25px;
}

.hero {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
    margin-bottom: 25px;
}

.card {
    background: white;
    padding: 25px;
    border-radius: 14px;
    box-shadow: 0 2px 12px rgba(0,0,0,.08);
    text-align: center;
}

.big-number {
    font-size: 55px;
    font-weight: bold;
    color: #062f63;
}

.streak {
    font-size: 28px;
}

.section {
    background: white;
    margin-bottom: 25px;
    padding: 25px;
    border-radius: 14px;
    box-shadow: 0 2px 12px rgba(0,0,0,.08);
}

.section h2 {
    margin-bottom: 20px;
    color: #062f63;
}

.summary-grid {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
}

.mini-card {
    background: #f6f8fb;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}

.mini-card strong {
    display: block;
    font-size: 32px;
    color: #062f63;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th {
    background: #062f63;
    color: white;
}

th, td {
    padding: 14px;
    border: 1px solid #ddd;
    text-align: center;
}

.player-card {
    display: flex;
    justify-content: space-between;
    gap: 30px;
}

.player-stats {
    display: flex;
    gap: 15px;
}

.stat {
    background: #f6f8fb;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    min-width: 120px;
}

.stat strong {
    display: block;
    font-size: 30px;
    color: #062f63;
}

.btn {
    display: inline-block;
    margin-top: 15px;
    padding: 12px 20px;
    background: #062f63;
    color: white;
    text-decoration: none;
    border-radius: 8px;
}

footer {
    background: #062f63;
    color: white;
    padding: 20px;
    text-align: center;
}

@media (max-width:900px) {

    .hero {
        grid-template-columns: 1fr;
    }

    .summary-grid {
        grid-template-columns: 1fr 1fr;
    }

    .player-card {
        flex-direction: column;
    }

    .player-stats {
        flex-direction: column;
    }
}
