const URL = 'http://localhost:3000/notes/'
export const getNotes = () => {
  return fetch(URL).then((response) => response.json())
}

export const createNote = (note) => {
  const { title, body } = note;
  return fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify({ title, body, updatedAt: new Date() }),
  }).then((response) => response.json())
}

export const updateNote = (note) => {
  const { id, title, body } = note
  return fetch(`${URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  }).then((response) => response.json())
}

export const deleteNote = (id) => {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE'
  }).then((response) => response.json())
}