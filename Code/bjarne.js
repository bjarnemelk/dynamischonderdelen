const time = document.getElementById("header1")
const date = new Date()
const lightbox = document.getElementById("lightbox")
const lightboxInfo = document.getElementById("lightboxinfo")
const lightboxImg = document.getElementById("lightbox-img")
const lightboxTitle = document.getElementById("lightbox-title")
const lightboxDate = document.getElementById("lightbox-date")
const lightboxDirector = document.getElementById("lightbox-director")
const lightboxGenre = document.getElementById("lightbox-genre")
const lightboxCast = document.getElementById("lightbox-cast")
const searchbar = document.getElementById("searchInput")
const films = [
    {name : "Crawlers", date : "2026/10/01", director : ["Angel Gomez Hernandez"], genre : ["Horror"],
    cast : ["William Miller", "Melina Matthews", "Gregg Sulkin", "Matilda Lutz",], poster : "../Images/crawlers.avif"},
    {name : "De Club van Sinterklaasfilm: Paniek in het Pietendorp", date : "2026/10/01", director : ["Martijn Koevoets"], genre : ["Family"], cast : ["Wilbert Gieske", "Job Bovelander", "Beryl van Praag", "Anouk de Pater", "Tim Oortman", "Mickey Vermeer"],  poster : "../Images/declubvansinterklaasfilmpaniekinhetpietendorp.avif" },
    {name : "De Grote Sinterklaasfilm en de Vliegende Pieten", date : "2026/10/01", director : ["Lucio Messercola"], genre : ["family"], cast : ["Chris Tates", "Okke Verberk", "Giovanni Caminita", "Martien Meiland", "Stef de Reuver", "Robert ten Brink", "Tineke Schouten", "Noah Ganahl", "Silven Vroon", "Thimo van Haaren", "Monique Westenberg",],  poster : "../Images/degrotesinterklaasfilmendevliegendepieten.avif"},
    {name : "Digger", date : "2026/10/01", director : ["Alejandro Gonzalez Inarritu"], genre : ["drama", "comedy"], cast : ["Tom Cruise", "Sophie Wilde", "Sandra Huller", "John Goodman", "Micheal Stuhlbarg", "Riz Ahmed", "Robert John Burke", "Emma D'Arcy", "Burn Gorman"],  poster : "../Images/digger.avif"},
    {name : "Downtown", date : "2026/10/01", director : ["Michiel van Erp"], genre : ["Drama"], cast : ["Yorick van Wageningen", "Hans Kesting", "Roeland Fernhout", "Daniel Cornelissen",],  poster : "../Images/downtown.avif"},
    {name : "Forgotten Island", date : "2026/10/01", director : ["Joel Crawford", "Januel Mercado"], genre : ["Animation", "Adventure", "Family"], cast : ["Ronny Chieng", "Jo Koy", "H.E.R", "Jenny Slate", "Dave Franco", "Liza Soberano", "Manny Jacinto", "Dolly de Leon", "Lea Salonga",],  poster : "../Images/forgottenisland.avif"},
    {name : "The Cycle Of Love", date : "2026/10/01", director : ["Orlando von Eindiesel"], genre : ["Documentary"], cast : ["Mina Dale", "Chirag Lobo", "PK Mahandania", "Lotta von Schedvin"],  poster : "../Images/thecycleoflove.avif"},
    {name : "Toutes Directions", date : "2026/10/01", director : ["Noel Loozen"], genre : ["Drama"], cast : ["Michiel Kerbosch", "Fred Goessens", "Onur Aydin"],  poster : "../Images/toutesdirections.avif"},
    {name : "Verity", date : "2026/10/01", director : ["Micheal Showalter"], genre : ["Drama", "Thriller"], cast : ["Anne Hatheway", "Josh Hartnett", "Dakota Johnson", "Ismael Cruz Cordova", "Brady Wagner"],  poster : "../Images/verity.avif"},
    {name : "Drishyam: The Conclusion", date : "2026/10/02", director : ["Abhishek Pathak"], genre : ["Drama", "Mystery", "Thriller"], cast : ["Ajay Devgn", "Saurab Shukla", "Jaideep Ahlawat", "Prakash Raj", "Tabu", "Ishita Dutta", "Aarti Desai", "Shirya Saran", "Rajat Kopoor", "Mrunal Jadhav", "Samvedna Suwalka", "Kamlesh Sawant", "Rajiv Gupta", "Yogesh Soman", "Aamir Salim Khan", "Ajeet Singh"],  poster : "../Images/drishyamtheconclusion.avif"},
    {name : "F.L.Y", date : "2026/10/07", director : ["Trent Kendrick"], genre : ["Drama", "Comedy", "Romance"], cast : ["Trent Kendrick", "Pixie Aventura", "Rafael Albarran"],  poster : "../Images/f.l.y.avif"},
    {name : "Monster Mia", date : "2026/10/07", director : ["Verana Fels"], genre : ["Animation", "Fantasy", "Family"], cast : ["Verena Altenberger", "Armin Assinger", "Lillian Gartner"],  poster : "../Images/monstermia.avif"},
    {name : "Moppervis", date : "2026/10/07", director : ["Richard Cusso"], genre : ["Animation", "Adventure", "Fantasy"], cast : ["Miranda Otto", "Nick Offerman", "Remy Hii", "Mark Coles Smith", "Amy Sedaris", "Jordin Sparks", "Nazeem Hussain", "Nina Oyama"],  poster : "../Images/moppervis.avif"},
    {name : "Shaun het Schaap: Het Beest van de Boerderij", date : "2026/10/07", director : ["Steve Cox", "Matthew Walker"], genre : ["Animation", "Family"], cast : ["John Sparkes", "Kate Harbour", "Justin Fletcher"],  poster : "../Images/shaunhetschaaphetbeestvandeboerderij.avif"},
    {name : "Yugly", date : "2026/10/07", director : ["Jeremie Degruson", "Yanis Belaid"], genre : ["Animation", "Family"], cast :  ["Barbara Sloessen", "Alex Auriant", "Peggy Vrijens", "Stephanie van Eer", "Andre Dongelmans", "Jop Joris"],  poster : "../Images/yugly.avif"},
    {name : "De Tatta's : Daan", date : "2026/10/08", director : ["Jamel Aattache", "Lars Zijm"], genre : "Comedy", cast :   ["Hassan Slaby", "Sterre Koning", "Leo Alkemade", "Sem van der Horst", "John Buijsman", "Roosmarijn Wind", "Elisa Beuger", "Sergio Ijssel", "Imanuelle Grives", "Ishmael Laglag", "Yassin Dardour", "Jaouad Dikri", "Reginio Rarko Resida", "Furkan Ates", "Maisam Benali"],  poster : "../Images/detattasdaan.avif"},
    {name : "Franz", date : "2026/10/08", director : ["Agnieszka Holland"], genre : ["Biography", "Drama"], cast : ["Peter Kurth", "Idan Weiss", "Jenovefa Bokova", "Maria Schrader", "Sebastian Schwarz", "Katharina Stark"],  poster : "../Images/franz.avif"},
    {name : "Matloob Aelian", date : "2026/10/08", director : ["Moataz El Tony"], genre : ["Comedy", "Romance"], cast : ["Moustafa Gharieb", "Sarah Baraka", "Aser Ahmed Hamdi", "Karim Abdel Aziz", "Mustafa Khater", "Yasmine Sabri",],  poster : "../Images/matloobaelian.avif"},
    {name : "The Social Reckoning", date : "2026/10/08", director : ["Aaron Sorkin"], genre : ["Biography", "Drama"], cast : ["Betty Gilpin", "Billy Magnussen", "Wunmi Mosaku", "Jeremy Strong", "Jeremy Allen White", "Mikey Madison", "Bill Burr"],  poster : "../Images/thesocialreckoning.avif"},
    {name : "The Uprising", date : "2026/10/08", director : ["Paul Greengrass"], genre : ["Drama", "History", "War"], cast : ["Katherine Waterston", "Woody Norman", "Jamie Bell", "Andrew Garfield", "Stephen Dillane", "Tom Hollander", "Cosmo Jarvis", "Jonny Lee Miller", "Thomasin McKenzie", "Stanley Townsend", "Sky Yang"],  poster : "../Images/theuprising.avif"},
    {name : "Wen Er Maar Aan", date : "2026/10/08", director : ["Albert Jan van Rees"], genre : ["Comedy"], cast : ["Maike Meijer", "Bas Hoeflaak"],  poster : "../Images/wenermaaraan.avif"},
    {name : "Udta Teer", date : "2026/10/09", director : [" Aakash Kaudik"], genre : ["Action", "Bollywood", "Romance"], cast : ["Ayushmann Khurrana", "Sara Ali Khan"],  poster : "../Images/udtateer.avif"},
    {name : "Whalefall", date : "2026/10/14", director : ["Brian Duffield"], genre : ["Thriller"], cast : ["Josh Brolin", "Austin Abrams", "Elisabeth Shue", "John Ortiz", "Jane Levy", "Emily Rudd"],  poster : "../Images/whalefall.avif"},
    {name : "L'Inconnue", date : "2026/10/15", director : ["Arthur Harari"], genre : ["Drama", "Fantasy", "Science Fiction"], cast : ["Lea Seydoux", "Niels Schneider", "Alexander Pallu", "Valerie Dreville", "Lilith Grasmug", "Victoire Du Bois"],  poster : "../Images/linconnue.avif"},
    {name : "Sacrifice", date : "2026/10/15", director : ["Romain Gavras"], genre : ["Action", "Comedy"], cast : ["John Malkovich", "Chris Evans", "Vincent Cassel", "Anya Taylor-Joy"],  poster : "../Images/sacrifice.avif"},
    {name : "Sense And Sensibility", date : "2026/10/15", director : ["Georgia Oakley"], genre : ["Drama", "Romance"], cast : ["Daisy Edgar-Jones", "Caitriona Balfe", "Fiona Shaw", "Frank Dillane", "Bodhi Rae Breatnach", "Esme Creed-Miles", "Herbert Nodrum", "George MacKay",],  poster : "../Images/senseandsensibility.avif"},
    {name : "Street Fighter", date : "2026/10/15", director : ["Kitao Sakurai"], genre : ["Action"], cast : ["Andrew Koji", "David Dastmalchian", "Jason Momoa", "Eric Andre", "Calliana Lang", "Noah Centineo", "Cody Rhodes", "Curtis 50 Cent Jackson", "Alexander Volnakovski", "Rayna Vallandingham", "Hirooki Goto", "Olivier Richters", "Orville Peck", "Vidyut Jammwal", "Andrew Schulz", "Joe Roman Reigns", "Anoa'i"],  poster : "../Images/streetfighter.avif"},
    {name : "The Beloved", date : "2026/10/15", director : ["Rodrigo Sorogoyen"], genre : ["Drama"], cast : ["Javier Bardem", "Marina Fois", "Dan Hildebrand", "Victoria Luengo", "Melina Matthews", "Raul Aravero"],  poster : "../Images/thebeloved.avif"},
    {name : "Youri", date : "2026/10/15", director : ["Sander Burger"], genre : ["Biography", "Drama"], cast : ["Joes Brauers", "Julian Cruiming", "Maria Gallo"],  poster : "../Images/youri.avif"},
    {name : "Soy", date : "2026/10/16", director : ["Maxime Alexandre"], genre : ["Horror"], cast : ["Baris Arduc", "Tuba Buyukstun", "Farah Zeynep Abdullah"],  poster : "../Images/soy.avif"},
    {name : "Clayface", date  : "2026/10/22", director : ["James Watkins"], genre : ["Drama", "Thriller"], cast : ["Max Minghella", "David Dencik", "Joshua James", "Tom Rhys Harries", "Eddie Marsan", "Naomie Ackie"],  poster : "../Images/clayface.avif"},
    {name : "Coward", date : "2026/10/22", director : ["Lukas Dhont"], genre : ["Drama"], cast : ["Emmanuel Machia", "Valentin Campagne"],  poster : "../Images/coward.avif"},
    {name : "Night Of The Living Dead", date : "2026/10/22", director : ["Tom Savini"], genre : ["Horror", "Thriller"], cast : ["Tony Todd", "Tom Towles", "Patricia Tallman"],  poster : "../Images/nightofthelivingdead.avif"},
    {name : "Wicker", date : "2026/10/22", director : ["Alex Huston Fischer", "Eleanor Wilson"], genre : ["Drama", "Fantasy", "Romance"], cast : ["Elizabeth Debicki", "Alexander Skarsgard", "Olivia Colman", "Dev Patel", "Peter Dinklage", "Ella Bruccoleri", "Richard E Grant"],  poster : "../Images/wicker.avif"},
    {name : "Wildwood", date : "2026/10/22", director : ["Travis Knight"], genre : ["Animation", "Drama"], cast : ["Amandla Standberg", "Angela Basset", "Jake Johnson", "Charlie Day", "Jemaine Clement", "Tantoo Cardinal", "Jacob Tremblay", "Akwafina", "Carey Mulligan", "Masherashara Ali", "Richard E Grant", "Tom Waits", "Maya Erskine", "Peyton Elizabeth Lee"],  poster : "../Images/wildwood.avif"},
    {name : "Coyote vs Acme", date : "2026/10/28", director : ["Dave Green"], genre : ["Adventure", "Family", "Animation"], cast : ["John Cena", "Will Forte", "Lana Condor", "Tone Bell"],  poster : "../Images/coyotevsacme.avif"},
    {name : "Klara And The Sun", date : "2026/10/29", director : ["Taika Waititi"], genre : ["Drama", "Science Fiction"], cast : ["Amy Adams", "Jenna Ortega", "Steve Buscemi", "Natashe Lyonne", "Mia Tharia", "Aran Murphy", "Simon Baker"],  poster : "../Images/klaraandthesun.avif"},
    {name : "Other Mommy", date : "2026/10/29", director : ["Rob Savage"], genre : ["Thriller"], cast : ["Jessica Chastain", "Dichen Lachman", "Jay Duplass", "Arabella Olivia Clark"],  poster : "../Images/othermommy.avif"},
    {name : "Primetime", date : "2026/10/29", director : ["Lance Oppenheim"], genre : ["Action", "Crime", "Drama"], cast : ["Robert Pattinson", "Matthew Maher", "Merritt Wever", "Anna Faris", "Skyler Gisondo", "Bokeem Woodbine", "Sean Bridgers", "Phoebe Bridgers"],  poster : "../Images/primetime.avif"},
    


]
const gallery = document.getElementById("gallery")

let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()
let hour = date.getHours()
let minute = date.getMinutes()
let seconds = date.getSeconds()

var showsTime = false
var testFilm = films[0]


let fulldate = `${month}-${day}-${year}`
let currenttime = `${hour}:${minute}:${seconds}`


time.innerText = fulldate

films.forEach(function(film, index) {
    gallery.innerHTML += `
        <div class="film-card" data-index="${index}">
            <img src="${film.poster}">
            <h3>${film.name}</h3>
            <h3>${film.date}</h3>
            
                    </div>   `
            })
    
            
const cards = document.querySelectorAll(".film-card")
cards.forEach(function(card){
    card.addEventListener("click", function(event){
        let index = event.currentTarget.dataset.index
        let chosenFilm = films[index]
        lightbox.style.display = "flex"
        lightboxImg.src = chosenFilm.poster
        lightboxTitle.innerText = chosenFilm.name
        lightboxDate.innerText = "Release Date : " + chosenFilm.date
        lightboxDirector.innerText = "Director : " + chosenFilm.director.join(", ")
        lightboxGenre.innerText = "Genre : " + chosenFilm.genre.join(", ")
        lightboxCast.innerText = "Cast : " + chosenFilm.cast.join(", ")
    })
    
    
})
searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();
    cards.forEach(function(card) {
        const filmName = card.querySelector("h3").innerText.toLowerCase();
        if (filmName.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
}) })

lightbox.addEventListener("click", function() {
    lightbox.style.display = "none";
});


time.addEventListener("click",function() {
    showsTime = !showsTime
    if (showsTime) {
        updatetime()
    } else 
        time.innerText = fulldate   
})

function updatetime() {
    if (!showsTime)
        return
    let hour =  new Date().getHours()
    let minute = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    let currenttime = `${hour}:${minute}:${seconds}`
    time.innerText = currenttime
}
setInterval(updatetime, 1000)


