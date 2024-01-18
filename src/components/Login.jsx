function Login() {
  function handleFormSubmit(event) {
    event.preventDefault();
    const userData = {username: event.target.username.value,
      password: event.target.passwrod.value}
    console.log(userData);
    alert(JSON.stringify(userData))
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
