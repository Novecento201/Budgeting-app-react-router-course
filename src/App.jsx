// rrd imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Actions
import { logoutAction } from './actions/logout';
import { deleteBudget } from './actions/deleteBudget';

// library
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Routes
import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard';
import Error from './pages/Error';
import Main, { mainLoader } from './layouts/Main';
import ExpensesPage, {
  expensesAction,
  expensesLoader,
} from './pages/ExpensesPage';
import BudgetPage, { budgetAction, budgetLoader } from './pages/BudgetPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
        errorElement: <Error />,
        loader: dashboardLoader,
        action: dashboardAction,
      },
      {
        path: 'expenses',
        element: <ExpensesPage />,
        errorElement: <Error />,
        loader: expensesLoader,
        action: expensesAction,
      },
      {
        path: 'budget/:id',
        element: <BudgetPage />,
        errorElement: <Error />,
        loader: budgetLoader,
        action: budgetAction,
        children: [
          {
            path: 'delete',
            action: deleteBudget,
          },
        ],
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
