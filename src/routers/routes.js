import categoryRouter from "./category.route.js";
import movieRouter from "./movie.route.js";
import userRouter from "./user.route.js";
import movieCategoryRouter from "./movie.categories.route.js";
import reviewsRouter from "./reviews.route.js";

const Routes = () => [movieRouter,userRouter,categoryRouter,movieCategoryRouter,reviewsRouter];

export default Routes;
