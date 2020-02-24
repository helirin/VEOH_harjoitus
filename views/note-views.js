const notes_view = ((data) => {
    let html = `
    <html>
    <head>
    <link rel="stylesheet" type="text/css" href="/css/style.css"></head>
    <body>
        <div class="ylaosa">
        Olet kirjautunut käyttäjänimellä: ${data.user_name} 
        <form action="/logout" method="POST">
            <button type="submit" class="add_button">Log out</button></div>
            <p> Voit lisätä tallennettuun listaan rivejä tai poistaa niitä. Voit poistaa myös koko listan.
            <br>Uuden listan voit tehdä alareunan lomakkeella.</p>
        </form><h3>Tallennetut ostoslistat</h3>
        
        `;

      
    data.notes.forEach((note) => {                                 //linkki id= "${note._id}"
    html += `<div><br>Listan nimi: <a href="/list/:${note._id}">${note.text}</a>                
        `;                                                          
        html += `
            <form action="delete-note" method="POST">
                <input type="hidden" name="note_id" value="${note._id}">
                <button type="submit" class="delete_button">poista lista</button>
                <br>
            </form>
            </div><div>
            <form action="/update-note" method="POST">
            <input type="hidden" name="note_id" value="${note._id}">
            <input type="hidden" name="teksti" value="${note.text}">          
             <textarea name="lista" rows="6" cols="35">${note.lista}</textarea><br>
            <input type="hidden" name="kuva" value="${note.image}">
            <button type="submit" class="reg_button">Muuta listaa</button>
        </form></div> 
            `;
    });

    html += `<h3>Tee uusi ostoslista</h3><div>
        <form action="/add-note" method="POST">
             Listan nimi: <br>
            <input type="text" name="note"><br>
             Listan asiat alekkain: <br>
            <textarea name="lista" rows="6" cols="35"></textarea><br>
            Kuva: <br>
            <select name="kuva">
                <option value="/kuvat/viiva.jpg">Valitse kuva</option>
                <option value="/kuvat/arki.jpg">Arki</option>
                <option value="/kuvat/juhlat.jpg">Juhlat</option>
                <option value="/kuvat/leipa.jpg">Leipä</option>
                <option value="/kuvat/joulu.jpg">Joulu</option>
                <option value="/kuvat/hiihtoloma.jpg">Hiihtoloma</option>
                <option value="/kuvat/kesaloma.jpg">Kesäloma</option>
                </select><br>
            <button type="submit" class="reg_button">Lisää</button>
        </form></div>
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
    html += `<div class="ylaosa">
         Lista "${note.text}"</div><br>
        <div class="lappu"><pre>${note.lista}</pre></div>
        <br>
        <img src="${note.image}"><br><br>                
          
         <a href = '/'> Muokkaa listaa </a><br><br>
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