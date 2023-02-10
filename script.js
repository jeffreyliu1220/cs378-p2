
//Hook up add buttons
let add_buttons = document.querySelectorAll(".amount-add");
for (let i=0; i<add_buttons.length; i++){
    console.log("ADDING ADD AMOUNT");
    add_buttons[i].addEventListener("click", addAmount);
}

// Create function to add
function addAmount(){
    //Grab what pokemon from button id
    const pokemon_id = this.id.split('-')[0] + "-amount";

    //Grab the pokemon amount and update it
    const pokemon_elem = document.getElementById(pokemon_id);
    let amount = parseInt(pokemon_elem.innerText);
    amount += 1;
    pokemon_elem.innerText = amount;

    //Grab cost id of pokemon
    const cost_id = this.id.split('-')[0] + "-cost";
    console.log(cost_id);
    //Grab cost of pokemon
    const cost = parseInt(document.getElementById(cost_id).innerText.slice(1));

    //Grab the subtotal and update it with the increasedased cost
    const subtotal_elem = document.getElementById("subtotal-id");
    let curr_subtotal  = parseInt(subtotal_elem.innerText.slice(1));
    subtotal_elem.innerText = "$" + (curr_subtotal + cost);
}

//Hook up subtract buttons
let sub_buttons = document.querySelectorAll(".amount-sub");
for (let i=0; i< sub_buttons.length; i++){
    console.log("ADDING SUBTRACT AMOUNT");
    sub_buttons[i].addEventListener("click", subAmount);
}


// Create function to subtract
function subAmount(){
    console.log("subtracting");
    //Grab what pokemon from button id
    const pokemon_id = this.id.split('-')[0] + "-amount";

    //Grab the pokemon amount
    const pokemon_elem = document.getElementById(pokemon_id);
    let amount = parseInt(pokemon_elem.innerText);
    
    //If amount less than 0 tell error, else update
    if (amount == 0){
        console.log("CANNOT SUBTRACT FROM 0");
    }else{
        amount -= 1;
        pokemon_elem.innerText = amount;

        //Grab cost id of pokemon
        const cost_id = this.id.split('-')[0] + "-cost";
        console.log(cost_id);
        
        //Grab cost of pokemon
        const cost = parseInt(document.getElementById(cost_id).innerText.slice(1));

        //Grab the subtotal and update it 
        const subtotal_elem = document.getElementById("subtotal-id");
        let curr_subtotal  = parseInt(subtotal_elem.innerText.slice(1));
        
        //debug
        if (curr_subtotal < 0) {
            alert("SHOULD NOT HIT NEGATIVE SOMETHING IS WRONG");
        }

        subtotal_elem.innerText = "$" + (curr_subtotal - cost);
    }
}

//Hook up to clear all button
let clear_all_button = document.getElementById("clear-all");
clear_all_button.addEventListener("click", clear_all)

//Create function to clear all
function clear_all(){

    //Grab the subtotal and set it to 0
    const subtotal_elem = document.getElementById("subtotal-id");
    subtotal_elem.innerText = "$" + 0;

    //Access all amount numbers and update them
    const amounts = document.querySelectorAll(".amount-number");
    for (let i = 0; i < amounts.length; i++){
        const curr_amount_elem = amounts[i];
        curr_amount_elem.innerText = "0";
    }
}

//Hook to order button
let order_button = document.getElementById("order");
order_button.addEventListener("click", alert_all_amounts)

//Create function to get amounts for each pokemon
function alert_all_amounts(){
    let order_str = "Order Placed!\n"
    let total_amount = 0;
    //Access all amount numbers and add the to a string
    const amounts = document.querySelectorAll(".amount-number");
    for (let i = 0; i < amounts.length; i++){
        const curr_amount_elem = amounts[i];
        curr_amount = curr_amount_elem.innerText;
        if (curr_amount != 0){
            curr_pokemon = curr_amount_elem.id.split("-")[0].charAt(0).toUpperCase() + curr_amount_elem.id.split("-")[0].slice(1);
            order_str +=  curr_amount + " " + curr_pokemon + " ";
            total_amount += curr_amount;
        }
    }
    if (total_amount > 0){
        alert(order_str);
    }else{
        alert("No Items in cart");
    }
    
}
