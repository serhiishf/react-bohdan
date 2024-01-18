function Login() {
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(event.target);
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="passwrod" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
