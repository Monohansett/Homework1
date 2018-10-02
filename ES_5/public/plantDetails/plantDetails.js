window.onload = function () {
    let params = location.search.substring(1);
    let decodeId = decodeURIComponent(params);

    //"GET" request by entity ID

    let getPlant = new Promise((resolve, reject) => {
        dpd.plants.get(decodeId, (result, err) => {
            if (result) resolve(result)
            if (err) reject(err)
        })
    })

    // Render entity after "GET" request

    getPlant.then(
        (plant) => {
            let div = document.createElement('div');
            let btn = document.createElement('button');
            div.className = 'container__plant-info';
            btn.className = 'button__back-to-main';
            btn.innerHTML = 'Back to main page';
            document.body.appendChild(div);
            document.body.appendChild(btn);

            div.innerHTML += '<p>' + plant.plantName + '</p>' + '<p>' + plant.latinName + '</p>' + '<p>' + plant.plantClass + '</p>' +'<p>' + plant.plantAge + '</p>' + '<p>' + plant.dangerLevel + '</p>' +'<p>' + plant.plantArial + '</p>' + '<p>' + plant.redBookStatus + '</p>' + '<p>' + plant.plantDescription + '</p>'

            btn.addEventListener('click', () => {
                location.href = "/#";
            })
        }
    ).catch(
        err => console.log(err)
    )
}