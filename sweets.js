let Brownies = {
    name: "Milka Brownie",
    calories: "468,00 kcal pro 100g",
    weight: "150g",
    country: "Deutschland",
    picture: "./Pic/brownie.png"
}

let Almdudler = {
    name: "Haribo Almdudler",
    calories: "337,00 kcal pro 100g",
    weight: "160g",
    country: "Deutschland",
    picture: "./Pic/almdudler.png"
}

let Kindercards = {
    name: "Kindercards",
    calories: "510,00 kcal pro 100g",
    weight: "128g",
    country: "Deutschland",
    picture: "./Pic/kindercards.png"
}

let Kinderschokolade = {
    name: "Kinderschokolade ",
    calories: "566,00 kcal pro 100g",
    weight: "300g",
    country: "Deutschland",
    picture: "./Pic/kinderriegel.png"
}

let Pfirsich = {
    name: "Haribo Pfirsich",
    calories: "349,00 kcal pro 100g",
    weight: "175g",
    country: "Deutschland",
    picture: "./Pic/pfirsich.png"
}
let Alpenmilch = {
    name: "Milka Alpenmilch",
    calories: "539,00 kcal pro 100g",
    weight: "100g",
    country: "Deutschland",
    picture: "./Pic/schoki.png"
}

let Tropen = {
    name: "Haribo Tropifrutti",
    calories: "349,00 kcal pro 100g",
    weight: "175g",
    country: "Deutschland",
    picture: "./Pic/tropisch.png"
}

let erdbeerschoki = {
    name: "Milka Erdbeer",
    calories: "560,00 kcal pro 100g",
    weight: "100g",
    country: "Deutschland",
    picture: "./Pic/Erdbeerschoki.png"
}

let schokobär = {
    name: "Lindt Teddy",
    calories: "544,00 kcal pro 100g",
    weight: "100g",
    country: "Deutschland",
    picture: "./Pic/schokobär.png"
}

let lindtkugeln = {
    name: "Lidt Londor Vollmilch",
    calories: "622,00 kcal pro 100g",
    weight: "200g",
    country: "Deutschland",
    picture: "./Pic/lindtkugeln.png"
}

let süßigkeiten = [Almdudler, Brownies, Kindercards,Kinderschokolade,Pfirsich, Alpenmilch, Tropen, erdbeerschoki, schokobär, lindtkugeln]

let filter = [Kindercards, Kinderschokolade, Alpenmilch, erdbeerschoki, schokobär, lindtkugeln];

console.log(süßigkeiten)


function seitenaufruf() {
    let hString = '';
    
    for (let i = 0; i < süßigkeiten.length; i++) {

        hString += `<section>
            <div class="onscroll_hidden" id="section${i+1}">
                <div id="text">
                    <div id="name">${süßigkeiten[i].name}</div><br>
                    <div id="cal">${süßigkeiten[i].calories}</div><br>
                    <div id="weight">Gewicht: ${süßigkeiten[i].weight}</div><br>
                    <div id="country">Herstellland: ${süßigkeiten[i].country}</div>
                </div>

                <div>
                    <div id="pic"><img src="${süßigkeiten[i].picture}" alt=""></div>
                </div>
            </div>
        </section>`
        
    }

    document.getElementById('content').innerHTML = hString;
}

seitenaufruf();


function pressedButton() {
    document.getElementById('content').innerHTML = '';
    hString = '';
    for (let i = 0; i < filter.length; i++) {
        fill(i)
        
    }

    document.getElementById('content').innerHTML = hString;
}


function fill(i) {
    hString += `<section>
            <div class="onscroll_visible" id="section${i+1}">
                <div id="text">
                    <div id="name">${filter[i].name}</div><br>
                    <div id="cal">${filter[i].calories}</div><br>
                    <div id="weight">Gewicht: ${filter[i].weight}</div><br>
                    <div id="country">Herstellland: ${filter[i].country}</div>
                </div>

                <div>
                    <div id="pic"><img src="${filter[i].picture}" alt=""></div>
                </div>
            </div>
        </section>`

        
}
