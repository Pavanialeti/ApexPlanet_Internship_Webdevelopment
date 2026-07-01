const products = [

{
id:1,
name:"iPhone 15",
category:"Mobile",
price:79999,
image:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab"
},

{
id:2,
name:"Samsung S24",
category:"Mobile",
price:69999,
image:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf"
},

{
id:3,
name:"Dell XPS Laptop",
category:"Laptop",
price:99999,
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
},

{
id:4,
name:"MacBook Pro",
category:"Laptop",
price:119999,
image:"mackbook.jpeg"
},

{
id:5,
name:"Sony Headphones",
category:"Headphone",
price:14999,
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
},

{
id:6,
name:"Boat Headphones",
category:"Headphone",
price:2999,
image:"https://images.unsplash.com/photo-1583394838336-acd977736f90"
}

];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productContainer = document.getElementById("productContainer");

function displayProducts(items){

productContainer.innerHTML="";

items.forEach(product=>{

productContainer.innerHTML += `

<div class="product">

<img src="${product.image}" loading="lazy">

<h3>${product.name}</h3>

<p>${product.category}</p>

<h4>₹${product.price}</h4>

<button onclick="addToCart(${product.id})">
Add To Cart
</button>

</div>
`;
});
}

displayProducts(products);

function addToCart(id){

const item = products.find(p=>p.id===id);

cart.push(item);

localStorage.setItem("cart",JSON.stringify(cart));

updateCart();
}

function updateCart(){

    document.getElementById("cartCount").innerText = cart.length;

    const cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item,index)=>{

        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <p>${item.name} - ₹${item.price}</p>
                <button onclick="removeFromCart(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    document.getElementById("totalPrice").innerText = total;

    localStorage.setItem("cart", JSON.stringify(cart));
}

function removeFromCart(index){

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
}

document.getElementById("searchInput")
.addEventListener("keyup",(e)=>{

const value = e.target.value.toLowerCase();

const filtered = products.filter(product =>
product.name.toLowerCase().includes(value));

displayProducts(filtered);
});

document.getElementById("categoryFilter")
.addEventListener("change",(e)=>{

let category = e.target.value;

if(category==="all"){
displayProducts(products);
return;
}

const filtered = products.filter(
product=>product.category===category
);

displayProducts(filtered);
});

document.getElementById("sortPrice")
.addEventListener("change",(e)=>{

let sorted=[...products];

if(e.target.value==="low"){
sorted.sort((a,b)=>a.price-b.price);
}

if(e.target.value==="high"){
sorted.sort((a,b)=>b.price-a.price);
}

displayProducts(sorted);
});

document.getElementById("themeBtn")
.addEventListener("click",()=>{

document.body.classList.toggle("dark");
});

function scrollToProducts(){

document.getElementById("products")
.scrollIntoView({
behavior:"smooth"
});
}

window.onscroll = function(){

let btn = document.getElementById("topBtn");

if(document.documentElement.scrollTop > 300){

btn.style.display="block";

}else{

btn.style.display="none";

}
}

document.getElementById("topBtn")
.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

document.getElementById("contactForm")
.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Message Sent Successfully!");

});