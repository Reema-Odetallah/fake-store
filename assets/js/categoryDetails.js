
const getAllPorducts=async ()=>{
   const params= new URLSearchParams(window.location.search);
   const category=params.get('category');

    const {data}= await axios.get(`https://dummyjson.com/products/category/${category}`);
    return data;
}

const printProducts= async()=>{
    const data =await getAllPorducts();
    const result=data.products.map(product=>{
        return `
        <div class="productsByCategory">
            <img src="${product.thumbnail}" alt="${product.description}/>
            <h2  class="productName">${product.title}</h2>
            <span class="productPrice">$${product.price}</span>
        </div>
        `
    }).join("");
    document.querySelector(".categoryByName .row").innerHTML= result;
}

printProducts();