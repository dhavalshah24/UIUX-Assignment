function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    var brand = document.forms["myForm"]["brand"].value;
    if (brand == "") {
        alert("Brand must be filled out");
        return false;
    }

    var quantity = document.forms["myForm"]["quantity"].value;
    if (quantity == "") {
        alert("Quantity must be filled out");
        return false;
    }
    if (isNaN(quantity)) {
        alert("Quantity is not valid");
        return false;
    }

    var price = document.forms["myForm"]["price"].value;
    if (price == "") {
        alert("Price must be filled out");
        return false;
    }
    if (isNaN(price)) {
        alert("Price is not valid");
        return false;
    }
}
