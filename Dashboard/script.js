const supabaseClient = supabase.createClient('https://udqhexwcymzbfbuopokh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkcWhleHdjeW16YmZidW9wb2toIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MjI5MDcsImV4cCI6MjA2NTI5ODkwN30.vObkzQs7vxxmJy3_ii6Eg1mI00rNW9GmpAM63ZU22Is');
document.getElementById("pronam").innerHTML = localStorage.getItem("name");
document.getElementById("proimg").src = localStorage.getItem("image");
console.log("Hel; ");
// console.log(localStorage.getItem("name"));
// console.log(localStorage.getItem("image"));

async function addtodo() {
  const todo = document.getElementById('todo').value
  const description = document.getElementById('todox').value
  alert(todo, description);

  const { error } = await supabaseClient
    .from("todos")
    .insert({ id: Math.round(Math.random() * 10), todo: todo, complete: false, Description: description })
  if (error) {
    console.log("Error adding todo:", error);
  } else {
    console.log("Todo added successfully");
  }
  window.location.reload();
}

async function fetchData() {
  const { data, error } = await supabaseClient
    .from("todos")
    .select()
  const todocontainer = document.getElementById('tbody')
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    todocontainer.innerHTML += `
    <tr>
    <td>${element.id}</td>
    <td>${element.todo}</td>
    <td>${element.Description}</td>
     <td>
    <input type="checkbox"></td>
  
    </tr>
    `
    console.log(data)
  }


}

fetchData()

async function updateTodo(id) {
  const todo = prompt("Enter the updated todo:");
  if (todo) {
    const { error } = await supabaseClient
      .from("todos")
      .update({ todo: todo })
      .eq('id', id);
    if (error) {
      console.log("Error updating todo:", error);
    } else {
      console.log("Todo updated successfully");
    }
    window.location.reload();
  }

}

async function deleteTodo(id) {
  const { error } = await supabaseClient
    .from("todos")
    .delete()
    .eq('id', id);
  if (error) {
    console.log("Error deleting todo:", error);
  } else {
    console.log("Todo deleted successfully");
  }
  window.location.reload();
}
let taskCount = 4; // because 4 tasks are already there

// Simulate login (optional, for demo purpose)
localStorage.setItem("user", "demoUser");


// Logout logic
document.getElementById("logoutBtn").addEventListener("click", function () {
  // Remove user data
  localStorage.removeItem("user");

  // Optional: Clear all storage
  // localStorage.clear();

  // Redirect to login page (or any other)
  window.location.href = "../index.html";
  localStorage.clear()
});

