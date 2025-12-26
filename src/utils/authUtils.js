export function loginUser(email) {
  const user = {
    id: email, // simple unique id
    email,
  };

  localStorage.setItem("shopora-user", JSON.stringify(user));
  window.dispatchEvent(new Event("storage"));
}

export function logoutUser() {
  localStorage.removeItem("shopora-user");
  window.dispatchEvent(new Event("storage"));
}

export function getUser() {
  const user = localStorage.getItem("shopora-user");
  return user ? JSON.parse(user) : null;
}

export function isLoggedIn() {
  return !!getUser();
}
