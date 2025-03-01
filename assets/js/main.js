const getCategories=async()=>{
    const {data}=await axios.get(`https://dummyjson.com/products/categories`);
    return data;
}
const printCategories=async ()=>{
    const categories=await getCategories();
    const result=categories.map(category=>{
        return `
        <div class="categoryName">
        <a href='categoryDetails.html?category=${category.name}'>${category.name}</a>
      
        </div>
        `
    }).join("");
    document.querySelector(".categories .row").innerHTML=result;
}

const getAllPorducts=async ()=>{
    const {data}= await axios.get(`https://dummyjson.com/products`);
    return data;
}

const printProducts= async()=>{
    const data =await getAllPorducts();
    const result=data.products.map(product=>{
        return `
        <div class="products">
            <img src="${product.thumbnail}" alt="${product.description}/>
            <h2  class="productName">${product.title}</h2>
            <span class="productPrice">$${product.price}</span>
        </div>
        `
    }).join("");
    document.querySelector(".allProducts .row").innerHTML= result;
}

printCategories();
printProducts();