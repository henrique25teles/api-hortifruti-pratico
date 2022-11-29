import Route from '@ioc:Adonis/Core/Route'

Route.post("/login", "AuthController.login");
Route.post("/logout", "AuthController.logout")

Route.group(() => {
  Route.get("/me", "AuthController.me");
}).middleware("auth");

Route.get('/', async () => {
  return {
    hortifruti: "pratico"
  }
});
