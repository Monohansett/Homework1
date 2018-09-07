// Form data

const plantInfoForm = document.querySelector('.plantInfo__form')
var dataInForm = {};

function toJSONString(form) {
    var obj = {};
    var elements = form.querySelectorAll("input, select, textarea");
    for (var i = 0; i < elements.length; ++i) {
        var element = elements[i];
        var name = element.name;
        var value = element.value;

        if (name) {
            obj[name] = value;
        }
    }

    return JSON.stringify(obj);
}

plantInfoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    dataInForm = toJSONString(this)
})

// console.log(dataInForm.name)
// Class "Plant"

function Plant(plantName, plantAge, plantClass, plantDangerLevel, plantArial, plantDescription) {
    this.plantName = plantName;
    this.plantAge = plantAge;
    this.plantClass = plantClass;
    this.plantDangerLevel = plantDangerLevel;
    this.plantArial = plantArial;
    this.plantDescription = plantDescription;

    this.getPlantInfo = function () {
        return "Name: " + this.plantName + "\n Age: " + this.plantAge + "\n Class: " + this.plantClass
    }

    this.setPlantInfo = function (plantName, plantAge, plantClass, plantDangerLevel, plantArial) {
        plantName = plantName;
        plantAge = plantAge;
        plantClass = plantClass;
        plantDangerLevel = plantDangerLevel;
        plantArial = plantArial;
        plantDescription = plantDescription;

    }
}

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







