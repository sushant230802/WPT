function displayTime(){
    x=new Date()
    document.getElementById("tm").innerText=x.toLocaleTimeString()
    setInterval(displayTime,1000)
}

function updateTotal(id1,id2,id3){
    rate=document.getElementById(id1).innerText;
    qty=document.getElementById(id2).value
    document.getElementById(id3).innerText=rate*qty;

}

const cart=[];
function addItem(id1){
    x=document.getElementById(id1).value;
    for(c1 in cart){
        if(cart[c1]==x){
            deleteItem(x);
            total=0;
            for(c in cart){
                total+=parseInt(document.getElementById(cart[c]).parentNode.previousElementSibling.innerText)
            }
            document.getElementById("totalAmount").innerText=total;
            console.log(cart)
            countCart();
            return;
        }
    }
    cart.push(x);
    total=0;
    for(c in cart){
        total+=parseInt(document.getElementById(cart[c]).parentNode.previousElementSibling.innerText)
    }
    document.getElementById("totalAmount").innerText=total;
   
    console.log(cart)
    countCart()
}

function deleteItem(x){
    const index=cart.findIndex((item)=>item==x)
    cart.splice(index,1);
}
function countCart(){
    document.getElementById("count").innerText=cart.length;
}



//If the string is a valid number (e.g., "5", "10.5", "200"), JavaScript will attempt to convert it
//into a number and then perform the multiplication.

//If the string cannot be converted into a number (e.g., "hello", "apple"), the result of the 
//multiplication will be NaN (Not-a-Number).