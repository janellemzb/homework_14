let list = ['Alexandre Levy', 'Louis Chauvin', 'Rupert Brooke', 'Robert Johnson', 'Ghazi of Iraq', 'Nat Jaffe', 'Jesse Belvin', 'Rudy Lewis', 'Joe Henderson', 'Malcolm Hale', 'Dickie Pride', 'Brian Jones', 'Jimi Hendrix', 'Janis Joplin', 'Jim Morrison', 'Leslie Harvey', 'Ron "Pigpen" McKernan', 'Pamela Courson', 'Dave Alexander', 'Pete Ham', 'Gary Thain', 'Cecilia', 'Helmut Köllen', 'Chris Bell', 'Alexander Bashlachev', 'Amar Singh Chamkila', 'Jean-Michel Basquiat', 'Pete de Freitas', 'Finbarr Donnelly', 'Chris Austin', 'Mia Zapata', 'Kurt Cobain', 'Kristen Pfaff', 'Andrés Escobar', 'Richey Edwards', 'Stretch', 'Fat Pat', 'Freaky Tah', 'Kami', 'Rodrigo Bueno', 'Rico Yan', 'Jeremy Ward', 'Jonathan Brandis', 'Andrea Absolonová', 'Valentín Elizalde', 'Jade Goody', 'Dash Snow', 'Amy Winehouse', 'Richard Turner', 'Sahara Davenport', 'Christian Benítez', 'Anton Yelchin', 'Kim Jong-hyun', 'Fredo Santana', 'Tyler Skaggs', 'Benjamin Keough'];

let paragraph = document.createElement("p")
paragraph.textContent = `27 Death Club List: ${list.join(', ')}`
paragraph.style.background = "lightgray"
paragraph.style.fontFamily = "Source Code Pro, monospace"
paragraph.style.fontSize = "13px"
document.body.append(paragraph)

let userValue = document.querySelector('.userValue')
let includeBtn = document.querySelector('.includes')

includeBtn.addEventListener('click', function () {
    function result() {
        if (userValue.value.toLowerCase()) {
            return `${userValue.value} is in the list` 
        } else {
            return `${userValue.value} is NOT on the list`
        }
    }

    let paragraphA = document.createElement("p");
    paragraphA.textContent = result();
    paragraphA.style.color = list.includes(userValue.value.toLowerCase()) ? "green" : "red"  
    paragraphA.style.fontFamily = "Source Code Pro, monospace"
    paragraphA.style.fontSize = "13px"
    paragraph.style.fontFamily = "Source Code Pro, monospace"
    document.body.append(paragraphA);
})


let userCommand = document.getElementById("userCommand");
let button1 = document.getElementById("1");
let button2 = document.getElementById("2");
let button3 = document.getElementById("3");
let button4 = document.getElementById("4");

button1.addEventListener('click', function () {
    list.push(userCommand.value);
    updateListInfo();
});

button2.addEventListener('click', function () {
    let index = list.indexOf(userCommand.value);
    if (index !== -1) {
        list.splice(index, 1);
    }
    updateListInfo();
});

button3.addEventListener('click', function () {
    let index = list.indexOf(userCommand.value);
    let buttonParagraph = document.createElement("p");
    buttonParagraph.textContent = index !== -1 ? `Index: ${index}` : "Not found";
    document.body.append(buttonParagraph);
});

button4.addEventListener('click', function () {
    list.sort();
    updateListInfo();
});

function updateListInfo() {
    paragraph.textContent = `27 Death Club List: ${list.join(', ')}`;
}




