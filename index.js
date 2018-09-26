var cart = [];

function getCart(item) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100) + 1;
 var obj = { "itemName": item, "itemPrice": price, };
 cart.unshift(obj);
 return item + " has been added to your cart.";
}

function viewCart() {
  var str;
  if (cart.length === 0) {
      str = "Your shopping cart is empty.";
    }
  if (cart.length == 1) {
      str = "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ".";
    }
  else {
    for (let i = 0; i < cart.length; i++) {
      var j = cart.length - 1;
      var name = cart[i].itemName;
      var price = cart[i].itemPrice;
      if (i === 0) {
        str = "In your cart, you have " + name + " at $" + price + ", ";
      }
      else if (i < j) {
        str += name + " at $" + price + ", ";
      }
      if (i == j) {
        str += "and " + name + " at $" + cart[i].itemPrice + ".";
      }
  }
  }
  return str;
}

function total() {
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    if (i < cart.length) {
      var price = Number(cart[i].itemPrice);
      total += price;
    }
    else {
      total += cart[cart.length -1].itemPrice;
    }
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
