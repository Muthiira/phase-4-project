import React, { useEffect, useState } from "react";
// import AddPerformance from "../pages/NewProduct";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import ProductList from "../pages/ProductList";
import NewProduct from "../pages/NewProduct";
import { useHistory } from "react-router";


function App() {
  const [user, setUser] = useState(null);
  const [addingPerformance, setAddingPerformance] = useState(false);
  const [products, setProducts] = useState([]);
	const [newUpdate, setNewUpdate] = useState();
  const history = useHistory();

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;


  function updateResults(newProduct) {
		// if newUpdate is defined update result if not defined add into the array
		if (newUpdate) {
			const index = products.findIndex(r => r.id === newProduct.id);
      console.log(products)
			console.log(index)
			// updating form using index
			let latestUpdate = [...products];
			latestUpdate[index] = newProduct;
			setProducts(latestUpdate);

		} else {
			setProducts([...products, newUpdate]);
		}
		setAddingPerformance(false);
	}
	// function that handles patch(edit)
	function onUpdate(product) {
		setNewUpdate(product)
		setAddingPerformance(true)
    history.push("/new");
	}

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        
         <Switch> 
          {/* { addingPerformance ? */}
           <Route path="/new">
            <NewProduct onSaved={updateResults} defaultData={newUpdate}/>
           </Route> 
             {/* : */}
           <Route path="/">
            <ProductList products={products} update={onUpdate}/>
           </Route>  
          {/* } */}
         </Switch>
         {/* <Button   type="button" onClick={() => setAddingPerformance(!addingPerformance)} >{addingPerformance ? "cancel" : "NewProduct"}</Button> */}
      </main>
    </>
  );
}

export default App;