const addPlantBtn = document.querySelector('.button__add-plant');

// Declare class "Plant"

function Plant(plantName, plantClass, plantAge, plantDangerLevel, plantArial, plantDescription) {
    this.plantName = plantName;
    this.plantClass = plantClass;
    this.plantAge = plantAge;
    this.plantDangerLevel = plantDangerLevel;
    this.plantArial = plantArial;
    this.plantDescription = plantDescription;

    this.setPlantInfo = function (plantName, plantAge, plantClass, plantDangerLevel, plantArial) {
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
    dpd.plants.get(function (plants) {
        plants.map((plant) => {
            addPlant(plant);
        })
    });
}

function renderControlPanel() {

}

function addPlant(plant) {
    const tbody = document.querySelector('.table-hover');
    const tr = document.createElement('tr');
    // let td = document.createElement('td')
    // console.log(td)
    let editLink = document.createElement('a');
    let deleteLink = document.createElement('a');
    let infoLink = document.createElement('a');
    editLink.href = '#';
    deleteLink.href = '#';
    infoLink.href = '#';
    editLink.innerHTML = 'Edit';
    deleteLink.innerHTML = 'Delete';
    infoLink.innerHTML = 'Info';

    let plantExample = new Plant(plant.plantName, plant.plantClass, plant.plantAge, plant.dangerLevel, plant.plantArial, plant.plantDescription);

    tr.innerHTML += '<td>' + plantExample.getPlantName() + '</td>' + '<td>' + plantExample.getPlantClass() + '</td>' + '<td>' + plantExample.getPlantAge() + '</td>' + '<td>' + plantExample.getPlantDangerLevel() + '</td>' + '<td>' + plantExample.getPlantArial() + '</td>' + '<td>' + plantExample.getPlantDescription() + '</td>' + '<td>' + '<a href="#">' + 'Details' + '</a>' + '<br>' + '<a href="#">' + 'Edit' + '</a>' + '<br>' + '<a href="#">' + 'Delete' + '</a>' + '</td>'

    tbody.appendChild(tr);

}
