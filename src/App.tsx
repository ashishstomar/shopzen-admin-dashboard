import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Suspense, lazy} from 'react'
import Loading from "./components/loading"

const Dashboard = lazy(()=> import ("./pages/dashboard"));
const Products = lazy(()=> import ("./pages/products"));
const Transactions = lazy(()=> import ("./pages/transaction"));
const Customers = lazy(()=> import ("./pages/customers"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route  path="/admin/dashboard" element={<Dashboard/>} />
          <Route  path="/admin/products" element={<Products/>} />
          <Route  path="/admin/tansaction" element={<Transactions/>} />
          <Route  path="/admin/customers" element={<Customers/>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;