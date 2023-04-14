const storeOwners = [//gave objects properties
    { name: "charles", stores: 1 },
    { name: "sally", stores: 1 },
    { name: "cassandra", stores: 1 },
    {
        name: "Danny Shavez",
        stores: 1,
        location: "in NM",
    },
];

let totalLocations = 0;//fixed but unused, will keep anyways

const listNumberOfStores = function () {
    for (let i = 0; i < storeOwners.length; i++) {
        totalLocations += storeOwners[i].stores;
    }
    return totalLocations;
};//just sits there and looks pretty

function tellMeMyStores() { //fixed loop to show storeowners up till the last one with the location property
    console.log("Hey, can you tell me who owns stores?");
    for (let i = 0; i < 3; i++) {
        console.log("Yes, " + storeOwners[i].name + " has one.");
    }
}

function hasStore() {//changed to .find method for storeowner w/location
    let ownerWithLocation = storeOwners.find(
        (owner) => owner.location !== undefined
    );
    if (ownerWithLocation) {
        console.log(
            "Yes, " +
            ownerWithLocation.name +
            " that lives " +
            ownerWithLocation.location +
            " owns one too."
        );
    }
}

tellMeMyStores();
hasStore();
//cleaned up some reduntant / unused code