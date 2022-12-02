import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Post, Patch } from "./crud";
import { Button,Error, FormField, Input, Label } from "../styles";

  
export default function NewProduct ({onSaved, defaultData }) {
  const history = useHistory();
	// deriving input values from state(making it controlled)
	const [formData, setFormData] = useState({
		name: defaultData ? defaultData.name : "",
		quantity: defaultData ? defaultData.quantity : "",
		price: defaultData ? defaultData.price : ""
	});

	// including loader
	const [saving, setSaving] = useState(false)

	// function that handles change
	function handleChange(event) {
		setFormData({
			...formData,
			[event.target.name]: event.target.value
		})
	}

	// update function on submission
	function addProduct(event) {
		event.preventDefault();
		setSaving(true)
		// if defaultData is defined update,if not defined create
		if (defaultData) {
			Patch({ ...formData, id: defaultData.id }).then((updatedProduct) => {
				setSaving(false);
        onSaved(updatedProduct);
        history.push("/");
				console.log(updatedProduct);
        history.push("/");
			})
		} else {
			Post(formData).then(newProduct => {
				setSaving(false);
        onSaved(newProduct);
        history.push("/");
				console.log(newProduct);

			});
    }
  }
  return(
    <Wrapper>
      <WrapperChild>
        <h2>Create Product</h2>
        <form onSubmit={addProduct}>
          <FormField >
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormField >
          <FormField >
            <Label htmlFor="quantity">quantity</Label>
            <Input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </FormField >
          <FormField >
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit" disabled={saving} >
              {saving ? "Loading..." : "Submit Product"}
            </Button>
          </FormField>
          {/* <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField> */}
        </form>
      </WrapperChild>
      {/* <WrapperChild> */}
        {/* <h1>{name}</h1>
        <p>
           {quantity}
        </p> */}
        {/* <ReactMarkdown>{price}</ReactMarkdown> */}
      {/* </WrapperChild> */}
    </Wrapper>
 ); 
}

 const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  align-items: center;
  padding: 16px;
  display: flex;
  gap: 24px;
 `;

 const WrapperChild = styled.div`
  flex: 1;
 `;
    
