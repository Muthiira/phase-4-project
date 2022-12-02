export function Delete(id){
	return fetch(`/products/${id}` ,{
		method : "DELETE",
	}).then((resp) => resp.json()) 
}

export function Patch(product){
	return fetch(`/products/${product.id}` ,{
		method : "PATCH",
		body: JSON.stringify(product),
		headers:{
			"Content-Type": "application/json"
		}
}).then((resp) => resp.json()) 
}

export function Post(product){
	return fetch('/products',{
		method : "POST",
		body: JSON.stringify(product),
		headers:{
			"Content-Type": "application/json"
		}
	}).then((resp) => resp.json()) 
}