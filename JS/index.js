const loadPhone = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    
    displayPhones(phones);
};

const displayPhones = phones => {
    // console.log(phones);
    // step-1: get the id of the phone container
    const phoneContainer = document.getElementById('phone-container'); 

    phones.forEach(phone => {
        console.log(phone);

        //step-2:  create div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-96 bg-gray-100 shadow-xl`;
        // set InnerHTML of the card
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
            <div class="card-body text-center">
                <h2 class="card-title justify-center">${phone.phone_name}</h2>
                <p>${phone.slug}</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>`;

            // step-4: append child
            phoneContainer.appendChild(phoneCard);
    })
};
loadPhone();