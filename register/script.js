
const supabaseClient = supabase.createClient('https://zzztymcblpewhdlquuky.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6enR5bWNibHBld2hkbHF1dWt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NDkwNTUsImV4cCI6MjA2NjMyNTA1NX0.SqxOsFmZBPAFv0GpaIL3PA_5t_ufHQYxOcLGJD6FVzY')
async function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const profile_img = document.getElementById('profile_image').value;
    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password
    });
     const { error2 } = await supabaseClient
  .from('Register')
  .insert({ id: Math.random(Math.round(1 * 10)), name: name, email: email, Password: password, image: profile_img });
    
    if (error) {
        alert(error.message)

    }
    else {
        alert("Registration successful! Please check your email for confirmation.");
        localStorage.setItem("name", name)
        localStorage.setItem("image", profile_img)
        
        window.location.href = "../LOGIN/index.html";
    }
}
// const profile_img =  document.getElementById(profile_img)