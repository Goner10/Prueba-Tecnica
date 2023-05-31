import { useEffect, useState } from "react";
import axios from "axios";
import "./Products.scss";
import { Pagination } from "antd";


const Products = () => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;

    useEffect(()=>{
        const fetchData = async () => {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data)
      };
        fetchData()
    },[]);

    const sortedProducts = [...products].sort((a, b) => {
      return a.title.localeCompare(b.title);
    });

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

      return (
        <>
        <div className="container-prod">
          <table className="table">
            <thead>
              <tr>
                <th className="rowsHead">Title</th>
                <th className="rowsHead">Category</th>
                <th className="rowsHead">Price</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((item) => (
                <tr key={item.id}>
                  <td className="rowsBody">{item.title}</td>
                  <td className="rowsBody">{item.category}</td>
                  <td className="rowsBody">{item.price} $</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br></br>
          <Pagination
             defaultCurrent={1}
             total={products.length}
             pageSize={productsPerPage}
             onChange={handlePageChange}
          />
          </div>
        </>
      )
}

export default Products