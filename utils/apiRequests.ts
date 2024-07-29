export async function getAllProducts() {
  const response = await fetch(
    "http://localhost:3000/api/products/getAllProducts"
  );
  const data = await response.json();
  return data;
}

export async function getProductById(productId: String) {
  const response = await fetch(
    `http://localhost:3000/api/products/getOneProduct?id=${productId}`
  );
  const data = await response.json();
  return data;
}

export async function rateProduct(productId: String, rating: Number) {
  const response = await fetch(
    `http://localhost:3000/api/products/calculateRating?id=${productId}&rating=${rating}`
  );
}

export async function getProductByCategory(category: String) {
  const response = await fetch(
    `http://localhost:3000/api/products/getProductsByCategory?category=${category}`
  );
  const data = await response.json();
  return data;
}

export async function sendRegistrationData(userData: {
  email: String;
  password: String;
  password2: String;
  name: String;
  status?: String;
}) {
  const response = await fetch("http://localhost:3000/api/user/registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  return data;
}

export async function sendAuthData(userData: {
  email: String;
  password: String;
}) {
  const response = await fetch("http://localhost:3000/api/user/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  return data;
}

export async function getCart(email: String) {
  const response = await fetch("http://localhost:3000/api/cart/getCart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  });

  const data = await response.json();
  return data;
}
