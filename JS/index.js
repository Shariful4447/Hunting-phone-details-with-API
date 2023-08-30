const loadPhone = async(searchText,isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    
    displayPhones(phones,isShowAll);
};

const displayPhones = (phones,isShowAll) => {
    // console.log(phones);
    // step-1: get the id of the phone container
    const phoneContainer = document.getElementById('phone-container'); 

    // clear the container before next search
    phoneContainer.textContent='';
    
     // if more product are available then show all button will apear
     const showAll = document.getElementById('show-all-button');
     if (phones.length>12 && !isShowAll) {
        showAll.classList.remove('hidden');
     }
     else{
        showAll.classList.add('hidden');
     }
    // display first 12 if not show all button
    if(!isShowAll) {
        phones = phones.slice(0,12);
    }
   
    phones.forEach(phone => {
        console.log(phone);

        //step-2:  create div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 shadow-xl p-5 m-5`;
        // set InnerHTML of the card
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
            <div class="card-body text-center">
                <h2 class="card-title justify-center">${phone.phone_name}</h2>
                <p>${phone.slug}</p>
                <div class="card-actions justify-center">
                    <button onclick="showDetails('${phone.slug}')" class="btn btn-primary">Show details</button>
                </div>
            </div>`;

            // step-4: append child
            phoneContainer.appendChild(phoneCard);
    })
    // hide loading spinner
    toggleLoadingSpiner(false);
}

// handle show details
 const showDetails =async (id) => {
    console.log('show details',id);
    // load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    console.log(data);
 }
//handle Search Button

const handleSearch = (isShowAll) =>{
    toggleLoadingSpiner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText,isShowAll);

}

// loading spinner 

const toggleLoadingSpiner = (isLoading)=>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}

// handle show ALl button

const handleShowAll = () => {
    handleSearch(true);
}


// loadPhone();