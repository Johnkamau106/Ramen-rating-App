const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg", rating: 3, comment: "Good, but too rich for me." }
];


const displayRamen = () => {
    let section = document.getElementById("ramen-menu");
    section.innerHTML = ''; 

    ramens.forEach(ramen => {
        
        const ramenDiv = document.createElement('div');
        ramenDiv.classList.add('ramen-item');
        ramenDiv.innerHTML = `
            <h3>${ramen.name}</h3>
            <p>Restaurant: ${ramen.restaurant}</p>
            <img src="https://www.thespruceeats.com/thmb/9az4S74Wiu2Mdse-4W7JE1P3gwo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dukboki-korean-street-food-2118907-hero-01-285213c2e8a2494f852ccdea2b5eddd9.jpg" alt="${ramen.name}" width="200">
            <p>Rating: ${ramen.rating}</p>
            <p>Comment: ${ramen.comment || 'No comment'}</p>
        `;

        
        ramenDiv.addEventListener('click', () => handleClick(ramen));
        
        
        section.appendChild(ramenDiv);
    });
};


const handleClick = (ramen) => {
    let section = document.getElementById("ramen-detail");
    section.innerHTML = `
        <h2>${ramen.name}</h2>
        <p>Restaurant: ${ramen.restaurant}</p>
        <img src="${ramen.image}" alt="${ramen.name}" width="400">
        <p>Rating: ${ramen.rating}</p>
        <p>Comment: ${ramen.comment || 'No comment'}</p>
    `;
};


const createNewRamen = () => {
    const name = document.getElementById("name").value;
    const restaurant = document.getElementById("restaurant").value;
    const image = document.getElementById("image").value;
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value;

    const newRamen = {
        id: ramens.length + 1, 
        name,
        restaurant,
        image,
        rating,
        comment
    };

    ramens.push(newRamen); 
    displayRamen(); 
};


document.getElementById("add-ramen-btn").addEventListener("click", createNewRamen);


window.onload = () => {
    displayRamen();
};
