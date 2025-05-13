const tablets = [
  { name: "Paracetamol 500mg", price: "$2.99", image: "https://via.placeholder.com/300x160?text=Paracetamol" },
  { name: "Ibuprofen 200mg", price: "$3.49", image: "https://via.placeholder.com/300x160?text=Ibuprofen" },
  { name: "Amoxicillin 250mg", price: "$5.99", image: "https://via.placeholder.com/300x160?text=Amoxicillin" },
  { name: "Azithromycin 500mg", price: "$6.99", image: "https://via.placeholder.com/300x160?text=Azithromycin" },
  { name: "Cetirizine 10mg", price: "$2.49", image: "https://via.placeholder.com/300x160?text=Cetirizine" },
  { name: "Loratadine 10mg", price: "$2.79", image: "https://via.placeholder.com/300x160?text=Loratadine" },
  { name: "Pantoprazole 40mg", price: "$4.29", image: "https://via.placeholder.com/300x160?text=Pantoprazole" },
  { name: "Omeprazole 20mg", price: "$4.49", image: "https://via.placeholder.com/300x160?text=Omeprazole" },
  { name: "Dolo 650", price: "$3.99", image: "https://via.placeholder.com/300x160?text=Dolo+650" },
  { name: "Metformin 500mg", price: "$4.89", image: "https://via.placeholder.com/300x160?text=Metformin" },
  { name: "Atorvastatin 10mg", price: "$6.49", image: "https://via.placeholder.com/300x160?text=Atorvastatin" },
  { name: "Losartan 50mg", price: "$5.49", image: "https://via.placeholder.com/300x160?text=Losartan" },
  { name: "Clopidogrel 75mg", price: "$6.79", image: "https://via.placeholder.com/300x160?text=Clopidogrel" },
  { name: "Aspirin 75mg", price: "$3.59", image: "https://via.placeholder.com/300x160?text=Aspirin" },
  { name: "Levothyroxine 50mcg", price: "$4.59", image: "https://via.placeholder.com/300x160?text=Levothyroxine" }
];

const grid = document.getElementById("productGrid");

tablets.forEach((tablet) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${tablet.image}" alt="${tablet.name}" />
    <h3>${tablet.name}</h3>
    <p>Price: ${tablet.price}</p>
    <button onclick="openOrderForm('${tablet.name}')">Order Now</button>
  `;
  grid.appendChild(card);
});

function openOrderForm(medicineName) {
  document.getElementById("medicineName").value = medicineName;
  document.getElementById("orderModal").style.display = "flex";
}

function closeOrderForm() {
  document.getElementById("orderModal").style.display = "none";
}

function submitOrder(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const quantity = document.getElementById("quantity").value;
  const medicine = document.getElementById("medicineName").value;

  alert(`✅ Order placed!\n\nName: ${name}\nMedicine: ${medicine}\nQty: ${quantity}\nAddress: ${address}`);
  document.getElementById("orderForm").reset();
  closeOrderForm();
}
