✅ Text Response
    • A header and paragraph explaining what the login is for:
      html
      CopyEdit
      <h2>Student Login</h2>
      <p>Access your student dashboard, results, and more.</p>
    • A form that accepts input (this is your "text response" from the user):
      html
      CopyEdit
      <form class="login-form" action="#" method="post">
        <input type="text" name="student_id" placeholder="Enter your Student ID" required />
        <input type="password" name="password" placeholder="Enter your Password" required />
        <button type="submit">Login</button>
      </form>

Then that can be added below the login form or in a new section like this:

<!-- ====== STUDENT LOGIN DOCUMENTATION ====== -->
<section class="student-docs">
  <div class="student-docs-container">
    <h3>Login Instructions</h3>
    <ul>
      <li>Your Student ID is your matriculation number (e.g., FUE/CSC/2023/001).</li>
      <li>If you forgot your password, click “Forgot Password” on the login page.</li>
      <li>Contact ICT support at ict@fueo.edu.ng for assistance.</li>
      <li>Ensure your email is registered to receive verification codes.</li>
    </ul>
  </div>
</section>
