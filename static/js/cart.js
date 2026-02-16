let cart = [];
let total = 0;

fetch("/api/menu")
    .then(res => res.json())
    .then(data => {
        const menuDiv = document.getElementById("menu");
        data.forEach(item => {
            menuDiv.innerHTML += `
                <div class="bg-white p-4 shadow">
                    <h3 class="font-bold">${item.name}</h3>
                    <p>${item.description}</p>
                    <p>₹${item.price}</p>
                    <button onclick="addToCart(${item.id}, '${item.name}', ${item.price})"
                        class="bg-blue-500 text-white px-2 py-1 mt-2">
                        Add
                    </button>
                </div>
            `;
        });
    });

function addToCart(id, name, price) {
    cart.push({id, name, price});
    total += price;
    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById("cart-items");
    cartDiv.innerHTML = "";
    cart.forEach(item => {
        cartDiv.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    });
    document.getElementById("total").innerText = total;
}

function checkout() {
    fetch("/api/place-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            items: cart,
            total: total
        })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
        cart = [];
        total = 0;
        updateCart();
    });
}
