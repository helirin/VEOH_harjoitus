const notes_view = ((data) => {
    let html = `
    <html>
    <head>
    <link rel="stylesheet" type="text/css" href="/css/style.css"></head>
    <body>
        <div>
        Olet kirjautunut käyttäjänimellä: ${data.user_name} 
        <form action="/logout" method="POST">
            <button type="submit" class="add_button">Log out</button>
        </form><h3>Tallennetut ostoslistat</h3>
        `;

      
    data.notes.forEach((note) => {                                 //linkki id= "${note._id}"
    html += `<div><a href="/list/:${note._id}">${note.text}</a>                
        `;                                                          
        html += `
            <form action="delete-note" method="POST">
                <input type="hidden" name="note_id" value="${note._id}">
                <button type="submit" class="delete_button">poista</button>
            </form>
            </div>
            <form action="/update-note" method="POST">
            <input type="hidden" name="note_id" value="${note._id}">
            <input type="hidden" name="teksti" value="${note.text}">          
             <textarea name="lista" rows="6" cols="30">${note.lista}</textarea><br>
            Kuva: <br>
            <input type="text" name="kuva" value="${note.image}"><br>
            <button type="submit" class="reg_button">Muuta</button>
        </form> 
            `;
    });

    html += `<h3>Tee uusi ostoslista</h3>
        <form action="/add-note" method="POST">
             Kauppalistan nimi: <br>
            <input type="text" name="note"><br>
             Ostoslista: <br>
            <textarea name="lista" rows="6" cols="30"></textarea><br>
            Kuva: <br>
            <input type="text" name="kuva" value="/kuvat/arki.jpg"><br>
            <button type="submit" class="reg_button">Lisää</button>
        </form>
        </body>
    </html>
    `;
    return html;
});


const note_view = (data) => {
    let html = `
    <html>
    <body>
       <br>
        Note text: ${data.text}
    </body>
    </html>
    `;
    return html;
};

//listanäkymä
const list_view = ((data) => {
    let html = `
    <html>
    <head>
    <link rel="stylesheet" type="text/css" href="/css/style.css"></head>
    <body>
        `; 
        data.notes.forEach((note) => {                            //haetaan notet
    html += `<div>
        <h3> Käyttäjän "${data.user_name}" ostoslista "${note.text}"</h3>
        <p><pre>${note.lista}</pre></p><br>
        Kuva: <br>
        <img src="${note.image}"><br>                
         </div> 
         <a href = '/'> Muokkaa listoja </a>
         `;  
});
    html += `
        </body>
    </html>
    `;
    return html;
});


module.exports.notes_view = notes_view;
module.exports.note_view = note_view;
module.exports.list_view = list_view;