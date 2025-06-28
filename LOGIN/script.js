
const supabaseClient = supabase.createClient('https://zzztymcblpewhdlquuky.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6enR5bWNibHBld2hkbHF1dWt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NDkwNTUsImV4cCI6MjA2NjMyNTA1NX0.SqxOsFmZBPAFv0GpaIL3PA_5t_ufHQYxOcLGJD6FVzY')
async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });
    if (error) {
        alert(error.message)
    }
    else {
        alert("Login successful!");
        
        window.location.href = "../Dashboard/index.html";
    }
}
let name = document.getElementById("name");
        let image = document.getElementById("image");

        name.innerHTML = localStorage.getItem("name")
        image.src = localStorage.getItem("image")