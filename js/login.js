const formTitle = document.getElementById('form-title');
const authForm = document.getElementById('auth-form');
const switchLink = document.getElementById('switch-link');

switchLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (formTitle.innerText === 'Login') {
        formTitle.innerText = 'Sign Up';
        switchLink.innerText = 'Already have an account? Login';
        authForm.innerHTML = `
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" required>
            </div>
            <div class="mb-3">
                <label for="confirm-password" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirm-password" required>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        `;
    } else {
        formTitle.innerText = 'Login';
        switchLink.innerText = "Don't have an account? Sign up";
        authForm.innerHTML = `
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" required>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        `;
    }
});









