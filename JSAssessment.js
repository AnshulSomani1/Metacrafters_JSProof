// Create a variable to hold NFTs
let nftCollection = [];

// Function to mint NFT
function mintNFT(id, name, creator, dateCreated, value, rarity) {
    // Create NFT object with metadata
    let newNFT = {
        id: id,
        name: name,
        creator: creator,
        dateCreated: dateCreated,
        value: value,
        rarity: rarity,
    };
    // Store NFT in collection
    nftCollection.push(newNFT);
}

// Function to list NFTs
function listNFTs() {
    // Iterate through collection and print metadata using a for loop
    for (let i = 0; i < nftCollection.length; i++) {
        let nft = nftCollection[i];
        console.log("ID: " + nft.id);
        console.log("Name: " + nft.name);
        console.log("Creator: " + nft.creator);
        console.log("Date Created: " + nft.dateCreated);
        console.log("Value: " + nft.value);
        console.log("Rarity: " + nft.rarity);
        console.log("-----------------------");
    }
}

// Function to get total supply
function getTotalSupply() {
    // Return the length of the collection
    return nftCollection.length;
}

// Mint some NFTs
mintNFT(1, "CryptoPunk #7804", "Larva Labs", "2017-06-23", "4200 ETH", "Rare", );
mintNFT(2, "Bored Ape #9055", "Yuga Labs", "2021-04-30", "350 ETH", "Epic");
mintNFT(3, "Hashmasks #9939", "Suum Cuique Labs", "2021-01-28", "100 ETH", "Legendary");
mintNFT(4, "CryptoKitty #896775", "Dapper Labs", "2018-05-12", "1.5 ETH", "Common");

// List NFTs
console.log("Listing NFTs:");
console.log("-----------------------");
listNFTs();

// Print total supply
console.log("Total NFTs minted: " + getTotalSupply());
// Create a variable to hold NFTs
let nftCollection = [];

// Function to mint NFT
function mintNFT(id, name, creator, dateCreated, value, rarity) {
    // Create NFT object with metadata
    let newNFT = {
        id: id,
        name: name,
        creator: creator,
        dateCreated: dateCreated,
        value: value,
        rarity: rarity,
    };
    // Store NFT in collection
    nftCollection.push(newNFT);
}

// Function to list NFTs
function listNFTs() {
    // Iterate through collection and print metadata using a for loop
    for (let i = 0; i < nftCollection.length; i++) {
        let nft = nftCollection[i];
        console.log("ID: " + nft.id);
        console.log("Name: " + nft.name);
        console.log("Creator: " + nft.creator);
        console.log("Date Created: " + nft.dateCreated);
        console.log("Value: " + nft.value);
        console.log("Rarity: " + nft.rarity);
        console.log("-----------------------");
    }
}

// Function to get total supply
function getTotalSupply() {
    // Return the length of the collection
    return nftCollection.length;
}

// Mint some NFTs
mintNFT(1, "CryptoPunk #7804", "Larva Labs", "2017-06-23", "4200 ETH", "Rare", );
mintNFT(2, "Bored Ape #9055", "Yuga Labs", "2021-04-30", "350 ETH", "Epic");
mintNFT(3, "Hashmasks #9939", "Suum Cuique Labs", "2021-01-28", "100 ETH", "Legendary");
mintNFT(4, "CryptoKitty #896775", "Dapper Labs", "2018-05-12", "1.5 ETH", "Common");

// List NFTs
console.log("Listing NFTs:");
console.log("-----------------------");
listNFTs();

// Print total supply
console.log("Total NFTs minted: " + getTotalSupply());
