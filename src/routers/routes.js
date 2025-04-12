import categoryRouter from "./category.route.js";
import movieRouter from "./movie.route.js";
import moviecategoryRouter from "./movie_categories.route.js";
import rewievsRouter from "./rewievs.route.js";
import userRouter from "./user.route.js";

const Routes = () => [
  movieRouter,
  userRouter,
  categoryRouter,
  moviecategoryRouter,
  rewievsRouter,
];

export default Routes;
