# HTML5 Forms & Tables

Forms are used to collect user inputs, while Tables are used to display structured tabular data.

---

## 1. HTML Forms & Inputs

The `<form>` tag wraps interactive controls to submit data.

```html
<form action="/submit" method="POST">
    <!-- Text Input -->
    <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter username" required />
    </div>

    <!-- Password Input -->
    <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />
    </div>

    <!-- Email Input -->
    <div>
        <label for="email">Email Address:</label>
        <input type="email" id="email" name="email" placeholder="user@example.com" />
    </div>

    <!-- Radio Buttons -->
    <div>
        <label>Gender:</label>
        <input type="radio" id="male" name="gender" value="male" />
        <label for="male">Male</label>
        
        <input type="radio" id="female" name="gender" value="female" />
        <label for="female">Female</label>
    </div>

    <!-- Checkbox -->
    <div>
        <input type="checkbox" id="subscribe" name="subscribe" value="yes" />
        <label for="subscribe">Subscribe to Newsletter</label>
    </div>

    <!-- Dropdown Select -->
    <div>
        <label for="city">Select City:</label>
        <select id="city" name="city">
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
            <option value="bangalore">Bangalore</option>
        </select>
    </div>

    <!-- Submit Button -->
    <button type="submit">Submit Form</button>
</form>
```

---

## 2. HTML Tables

Tables are created using `<table>`, `<tr>` (table row), `<th>` (table header), and `<td>` (table data).

```html
<table border="1">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Kaushal</td>
            <td>Frontend Developer</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Rahul</td>
            <td>Backend Developer</td>
        </tr>
    </tbody>
</table>
```
