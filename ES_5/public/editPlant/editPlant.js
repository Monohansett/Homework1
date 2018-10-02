window.onload = function () {
    let params = location.search.substring(1);
    let decodeId = decodeURIComponent(params);

    let getPlant = new Promise((resolve, reject) => {
        dpd.plants.get(decodeId, (result, err) => {
            if (result) resolve(result)
            if (err) reject(err)
        })
    })

    getPlant.then(
        (plant) => {
            const form = document.createElement('form');
            form.className = 'plantInfo__form'
            document.body.appendChild(form);

            form.innerHTML += '<input type="text">' + '<br>' + '<input type="text">' + '<br>' + '<input type="text">' + '<br>' + '<input type="text">' + '<br>' + '<input type="text">' + '<br>' + '<input type="text">' + '<br>' + '<input type="text">' + '<br>' + '<textarea cols="20" rows="8" class="plantDescription">' + plant.plantDescription + '</textarea>' + '<br>' + '<button class="button__save-editing">' + 'Save Changes' + '</button>'

            form[0].value = plant.plantName;
            form[1].value = plant.latinName;
            form[2].value = plant.plantClass;
            form[3].value = plant.plantAge;
            form[4].value = plant.dangerLevel;
            form[5].value = plant.plantArial;
            form[6].value = plant.redBookStatus;
            form[7].value = plant.plantDescription;

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                dpd.plants.put(plant.id, {
                    "plantName": form[0].value,
                    "plantClass": form[2].value,
                    "plantAge": form[3].value,
                    "dangerLevel": form[4].value,
                    "plantArial": form[5].value,
                    "plantDescription": form[7].value,
                    "latinName": form[1].value,
                    "redBookStatus": form[6].value
                }, function (err) {
                    if (err) console.log(err);
                });
                
                location.href = '/'
            })
        }
    )
}

