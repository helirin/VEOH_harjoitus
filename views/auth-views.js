const login_view = () => {
    let html = `
    <html>
    <head>
    <title>Kauppalista</title>
    <link rel="stylesheet" type="text/css"   href="/css/style.css"></head>
    <body>
       <h2>Tee ostoslista</h2>
       <p>Näillä sivuilla voit tehdä itsellesi ostoslistan tai jonkun muun listan. 
       Ostoslistan tekeminen vaatii kirjautumisen. <br> Mikäli sinulla ei ole tunnusta, rekisteröidy ensin. 
       Tässä demoversiossa ei käytetä salasanaa.</p>
        <p>Kirjaudu tai rekisteröidy</p>
        <form action="/login" method="POST">
            <input type="text" name="user_name">
            <button type="submit" class="add_button">Log in</button>
        </form>
        <form action="/register" method="POST">
            <input type="text" name="user_name">
            <button type="submit" class="reg_button">Register</button>
        </form>
    </body>
    <html>
    `;

    return html;
}

module.exports.login_view = login_view;