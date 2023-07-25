var selectedSpaceList = [
    {
        icon: "Assets/Space Icons/Kitchen.svg",
        name: "Kitchen"
    },
    {
        icon: "Assets/Space Icons/Living Room.svg",
        name: "Living Room"
    },
    {
        icon: "Assets/Space Icons/Bedroom.svg",
        name: "Bedroom"
    }
];

// Generate Selected Cards in the Dashboard
function generateCard(item) {
    $(".selected-sc").append(`
        <div class="space-card">
            <img src="${item.icon}">
            <div class="sc-text">
                <h3>${item.name}</h3>
                <p class="sc-action">Select Options</p>
            </div>
        </div>
    `)
}

selectedSpaceList.forEach(generateCard);