const API_URL = 'https://jsonplaceholder.typicode.com/users';

export async function fetchUsers() {
  const response = await fetch(API_URL);
  return await response.json();
}

export async function addUser(user) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user) 
  });
  return await response.json();
}

export async function deleteUser(userId) {
  await fetch(`${API_URL}/${userId}`, {
    method: 'DELETE'
  });
}