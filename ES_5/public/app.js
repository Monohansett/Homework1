const addPlantBtn = document.querySelector('.button__add-plant');
// const deleteLink = document.querySelector('#deleteLink');
// const editLink = document.querySelector('#editLink');
// const detailsLink = document.querySelector('#detailsLink');

// Declare class "Plant"

function Plant(plantName, plantClass, plantAge, plantDangerLevel, plantArial, plantDescription) {
    this.plantName = plantName;
    this.plantClass = plantClass;
    this.plantAge = plantAge;
    this.plantDangerLevel = plantDangerLevel;
    this.plantArial = plantArial;
    this.plantDescription = plantDescription;

    this.setPlantInfo = (plantName, plantAge, plantClass, plantDangerLevel, plantArial) => {
        plantName = plantName;
        plantAge = plantAge;
        plantClass = plantClass;
        plantDangerLevel = plantDangerLevel;
        plantArial = plantArial;
        plantDescription = plantDescription;

    }

    this.getPlantName = () => this.plantName;
    this.getPlantAge = () => this.plantAge;
    this.getPlantClass = () => this.plantClass;
    this.getPlantDangerLevel = () => this.plantDangerLevel;
    this.getPlantArial = () => this.plantArial;
    this.getPlantDescription = () => this.plantDescription;
}

// Declare subclass "Fern"

function Fern(latinName, redBookStatus) {
    Plant.call(this);
    this.latinName = latinName;
    this.redBookStatus = redBookStatus;
    this.getLatinName = function () {
        return this.latinName
    }
    this.setLatinName = function (latinName) {
        return this.latinName = latinName
    }
}

// Declare subclass "Fern"

function Spruce(latinName, redBookStatus) {
    Plant.call(this);
    this.latinName = latinName;
    this.redBookStatus = redBookStatus;
    this.getLatinName = function () {
        return this.latinName
    }
    this.setLatinName = function (latinName) {
        return this.latinName = latinName
    }
}

addPlantBtn.addEventListener('click', function () {
    location.href = "/addPlant/plant.html";
})

document.addEventListener('DOMContentLoaded', loadPlants);

function loadPlants() {
    dpd.plants.get((plants) => {
        plants.map((plant) => {
            addPlant(plant);
        })
    });
}


// CRUD Methods for entities

//Create

function addPlant(plant) {
    const tbody = document.querySelector('.table-hover');
    const tr = document.createElement('tr');

    console.log(plant)


    let plantExample = new Plant(plant.plantName, plant.plantClass, plant.plantAge, plant.dangerLevel, plant.plantArial, plant.plantDescription);

    tr.innerHTML += '<td>' + plantExample.getPlantName() + '</td>' + '<td>' + plantExample.getPlantClass() + '</td>' + '<td>' + plantExample.getPlantAge() + '</td>' + '<td>' + plantExample.getPlantDangerLevel() + '</td>' + '<td>' + plantExample.getPlantArial() + '</td>' + '<td>' + plantExample.getPlantDescription() + '</td>' + '<td>' + '<a href="#" class="detailsLink">' + 'Details' + '</a>' + '<br>' + '<a href="#" class="editLink">' + 'Edit' + '</a>' + '<br>' + '<a href="#" class="deleteLink">' + 'Delete' + '</a>' + '</td>'

    tbody.appendChild(tr);

    // Delete entity

    let deleteLink = document.querySelectorAll('.deleteLink');

    function deleteEntry() {
        let isDelete = confirm('This entire entry irretrievably! Are you sure?');
        if (isDelete) {
            dpd.plants.del(plant.id, function (err) {
                if (err) console.log(err)
            })
            location.reload()
        }
    }

    for (let i = 0; i < deleteLink.length; i++) {
        deleteLink[i].addEventListener('click', deleteEntry)
    }

    //Read details

    let detailsLink = document.querySelectorAll('.detailsLink');

    function showPlantDetails() {
        dpd.plants.get(plant.id, function(res) {
            res = plant.id
            // console.log(res)
            location.href='/plantDetails/details.html?' + res;
        })
    }

    for (let i = 0; i < detailsLink.length; i++) {
        detailsLink[i].addEventListener('click', showPlantDetails)
    }

    //Edit entity

    let editLink = document.querySelectorAll('.editLink');

    function editPlantDetails() {
        dpd.plants.get(plant.id, function(res) {
            res = plant.id
            // console.log(res)
            location.href='/editPlant/edit.html?' + res;
        })
    }

    for (let i = 0; i < editLink.length; i++) {
        editLink[i].addEventListener('click', editPlantDetails)
    }

};
