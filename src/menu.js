import bbq from './img/bbq.png'
import burger from './img/burger.png'
import chickencurry from './img/chickencurry.png'
import pasta from './img/pasta.png'
import pizza from './img/pizza.png'
import salad from './img/salad.png'
import sushi from './img/sushi.png'
import veggies from './img/veggies.png'


export function loadMenuPage() {
	const contentDiv = document.getElementById('content');
	contentDiv.innerHTML = ''; // Clear any existing content

	// Create menu section container
	const menuSection = document.createElement("section");
	menuSection.classList.add("menu-section");

	// Create and append the title (h2) outside the grid container
	const title = document.createElement("h2");
	title.textContent = "Our Menu";
	menuSection.appendChild(title);

	// Create a separate container for the menu items grid
	const menuItemsContainer = document.createElement("div");
	menuItemsContainer.classList.add("menu-items"); // This will be the grid container

	// Sample menu items
	const menuItems = [
		{ name: "Pizza", price: "$12", imgSrc: pizza },
		{ name: "Pasta", price: "$10", imgSrc: pasta },
		{ name: "Salad", price: "$8", imgSrc: salad },
		{ name: "Burger", price: "$9", imgSrc: burger },
		{ name: "Bbqcombo", price: "$15", imgSrc: bbq },
		{ name: "veggies", price: "$15", imgSrc: veggies },
		{ name: "Chicken curry", price: "$15", imgSrc: chickencurry },
		{ name: "Sushi", price: "$15", imgSrc: sushi }
	];

	// Loop through the menu items to create each menu item card
	menuItems.forEach((item) => {
		const itemDiv = document.createElement("div");
		itemDiv.classList.add("menu-item");

		// Image container
		const img = document.createElement("img");
		img.src = item.imgSrc; // Placeholder images
		img.alt = item.name;
		img.classList.add("menu-item-image");

		// Details container
		const detailsDiv = document.createElement("div");
		detailsDiv.classList.add("menu-item-details");

		const itemName = document.createElement("p");
		itemName.textContent = item.name;
		itemName.classList.add("menu-item-name");

		const itemPrice = document.createElement("p");
		itemPrice.textContent = item.price;
		itemPrice.classList.add("menu-item-price");

		// Append name and price to details container
		detailsDiv.appendChild(itemName);
		detailsDiv.appendChild(itemPrice);

		// Append image and details to the itemDiv
		itemDiv.appendChild(img);
		itemDiv.appendChild(detailsDiv);

		// Append each menu item card to the menuItemsContainer
		menuItemsContainer.appendChild(itemDiv);
	});

	// Append the grid container to the menu section
	menuSection.appendChild(menuItemsContainer);

	// Append the complete menu section to the content div
	contentDiv.appendChild(menuSection);
}