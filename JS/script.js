var products = [
    {
        id: 1,
        name: "Pedro Antonio",
        email: "pedro@abutua.com",
        phone: "(15) 9999-9999",
        category: 3,
        shift: "Tarde"
    },
    {
        id: 2,
        name: "Laura Antunes",
        email: "laura@abutua.com",
        phone: "(15) 8888-8888",
        category: 1,
        shift: "Noite"
    },
];

var categories = [
    { id: 1, name: "Java" },
    { id: 2, name: "Java Script" },
    { id: 3, name: "Angular" }
];

//Onload
loadProducts();

//Load all products
function loadProducts(){
    for(let prod of products){
        addNewRow(prod);
    }

}

//Add new row
function addNewRow(prod){
    var table = document.getElementById("studentsTable");

    var newRow = table.insertRow();

    //insert id
    var idNode = document.createTextNode(prod.id);
    newRow.insertCell().appendChild(idNode);

    //insert name
    var nameNode = document.createTextNode(prod.name);
    newRow.insertCell().appendChild(nameNode);

    //insert email
    var emailNode = document.createTextNode(prod.email);
    newRow.insertCell().appendChild(emailNode);

    //insert phone
    var phoneNode = document.createTextNode(prod.phone);
    newRow.insertCell().appendChild(phoneNode);

    //insert category
    var categoryNode = document.createTextNode(categories[prod.category - 1].name);
    newRow.insertCell().appendChild(categoryNode);

    //insert shift
    var shiftNode = document.createTextNode(prod.shift);
    newRow.insertCell().appendChild(shiftNode);

    newRow.insertCell().innerHTML = "";
}