var allSpaces = [
    {
        icon: "Assets/Space Icons/Bathroom.svg",
        name: "Bathroom",
        popularSpace: true,
        selected: false,
        quantity: 0
    },
    {
        icon: "Assets/Space Icons/Bedroom.svg",
        name: "Bedroom",
        popularSpace: true,
        selected: false,
        quantity: 0
    },
    {
        icon: "Assets/Space Icons/Boundaries.svg",
        name: "Boundaries",
        popularSpace: false,
        selected: false,
        quantity: 0
    },
    {
        icon: "Assets/Space Icons/Cloaks.svg",
        name: "Cloaks",
        popularSpace: false,
        selected: false,
        quantity: 0
    },
    {
        icon: "Assets/Space Icons/Dining Room.svg",
        name: "Dining Room",
        popularSpace: false,
        selected: false,
        quantity: 0
    },
    {
        icon: "Assets/Space Icons/Driveway.svg",
        name: "Driveway",
        popularSpace: false,
        selected: false,
        quantity: 0
    },
    {
        icon: "Assets/Space Icons/Ensuite.svg",
        name: "Ensuite",
        popularSpace: false,
        selected: true,
        quantity: 0
    },
    {
        icon: "Assets/Space Icons/Garage.svg",
        name: "Garage",
        popularSpace: false,
        selected: true,
        quantity: 0
    },
    {
        icon: "Assets/Space Icons/Hallway.svg",
        name: "Hallway",
        popularSpace: false,
        selected: false,
        quantity: 0
    },
    {
        icon: "Assets/Space Icons/House Exterior.svg",
        name: "House Exterior",
        popularSpace: false,
        selected: false,
        quantity: 0
    },
    {
        icon: "Assets/Space Icons/Kitchen.svg",
        name: "Kitchen",
        popularSpace: true,
        selected: true,
        quantity: 0
    },
    {
        icon: "Assets/Space Icons/Landscaping.svg",
        name: "Landscaping",
        popularSpace: false,
        selected: false,
        quantity: 0
    },
    {
        icon: "Assets/Space Icons/Living Room.svg",
        name: "Living Room",
        popularSpace: false,
        selected: false,
        quantity: 0
    },
    {
        icon: "Assets/Space Icons/Lounge.svg",
        name: "Lounge",
        popularSpace: false,
        selected: false,
        quantity: 0
    },
    {
        icon: "Assets/Space Icons/Office.svg",
        name: "Office",
        popularSpace: true,
        selected: false,
        quantity: 0
    },
    {
        icon: "Assets/Space Icons/Toilet.svg",
        name: "Toilet",
        popularSpace: false,
        selected: false,
        quantity: 0
    },
    {
        icon: "Assets/Space Icons/Utility.svg",
        name: "Utility",
        popularSpace: false,
        selected: false,
        quantity: 0
    }
];

var selectedSpaces = [

]

// Generate Selected Cards in the Dashboard
function generateDashboardCards(item) {
    if (item.selected == true) {
        $(".selected-sc").append(`
        <div class="space-card">
            <img src="${item.icon}">
            <div class="sc-text">
                <h3>${item.name}</h3>
                <p class="sc-action">Select Options</p>
            </div>
        </div>
    `)
    } else {

    }
}

selectedSpaces.forEach(generateDashboardCards);


// Generate Card Lists for the Add Spaces Page
function generateAddSpaceCards(item) {
    if (item.popularSpace == true) {

        $("#popular-rs-list").append(
            `
            <div class="rs-card">

                <div class="rs-card-box">
                    <div class="rs-icon-title">
                        <img src="Assets/Space Icons/${item.name}.svg" style="filter: brightness(0%)">
                        <h3>${item.name}</h3>
                    </div>

                    <label class="custom-checkbox">
                        <input type="checkbox" id="${item.name}-checkbox">
                        <span class="checkmark"></span>
                    </label>
                </div>

                <input type="number" class="rs-room-qty" id="${item.name}-qty">

            </div>
            `
        )

    } else {
        $("#all-rs-list").append(
            `
            <div class="rs-card">

                <div class="rs-card-box">
                    <div class="rs-icon-title">
                        <img src="Assets/Space Icons/${item.name}.svg" style="filter: brightness(0%)">
                        <h3>${item.name}</h3>
                    </div>

                    <label class="custom-checkbox">
                        <input type="checkbox" id="${item.name}-checkbox">
                        <span class="checkmark"></span>
                    </label>
                </div>

                <input type="number" class="rs-room-qty" id="${item.name}-qty">

            </div>
            `
        )
    }
}

allSpaces.forEach(generateAddSpaceCards);
