// Constants
const plantInfoForm = document.querySelector('.plantInfo__form'),
    selectPlant = document.getElementById('plantClass'),
    submitBtn = document.getElementById('submitBtn'), 
    br = document.createElement('br'),
    br2 = document.createElement('br'),
    latinNameInput = document.createElement('input'),
    redBookStatusInput = document.createElement('input'),
    selectOnce = once(onSelectChange);

// Method for calling functions once

function once(fn, context) {
    var result;

    return function () {
        if (fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }
        return result;
    };
}

//Method -> Data in the form into JSON object

function toJSONString(form) {
    var obj = {};
    var elements = form.querySelectorAll("input, textarea");
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

// POST dataForm object

plantInfoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    theTarget = toJSONString(e.target);
    plantObject = JSON.parse(theTarget);
    console.log(plantObject)

    dpd.plants.post({
        "plantName": plantObject.name,
        "plantClass": plantObject.class,
        "plantAge": plantObject.age,
        "dangerLevel": plantObject.dangerLevel,
        "plantArial": plantObject.plantArial,
        "plantDescription": plantObject.plantDescription,
        "latinName": plantObject.latinName,
        "redBookStatus": plantObject.redBookStatus
    }, function (result, err) {
        if (err) console.log(err);
        console.log(result, result.id)
    })

    location.href = "/";
})

// onchange method

function onSelectChange() {

    if (selectPlant.options[selectPlant.selectedIndex].value === 'Fern' || 'Spruce') {
        latinNameInput.name = 'latinName';
        latinNameInput.placeholder = 'Name in Latin'
        redBookStatusInput.name = 'redBookStatus';
        redBookStatusInput.placeholder = 'Red Book Status';
        plantInfoForm.insertBefore(latinNameInput, submitBtn);
        plantInfoForm.insertBefore(br, submitBtn);
        plantInfoForm.insertBefore(redBookStatusInput, submitBtn);
        plantInfoForm.insertBefore(br2, submitBtn);

    }
}
