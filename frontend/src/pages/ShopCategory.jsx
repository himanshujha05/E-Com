import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import Item from '../Components/Item/Item';
import './ShopCategory.css';

const SORT_OPTIONS = [
  { label: 'Newest', value: 'createdAt', order: 'desc' },
  { label: 'Price: Low to High', value: 'new_price', order: 'asc' },
  { label: 'Price: High to Low', value: 'new_price', order: 'desc' },
  { label: 'Top Rated', value: 'ratings', order: 'desc' },
];

const ShopCategory = ({ category }) => {
  const { loadingProducts } = useShop();
  const [products, setProducts] = useState([]);
  const [sortIndex, setSortIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const LIMIT = 12;

  useEffect(() => {
    setPage(1);
  }, [category]);

  useEffect(() => {
    const selected = SORT_OPTIONS[sortIndex];
    const load = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/products?category=${category}&sortBy=${selected.value}&order=${selected.order}&page=${page}&limit=${LIMIT}`
        );
        const json = await res.json();
        if (json.success) {
          setProducts(json.data);
          setTotalCount(json.meta.total);
        }
      } catch (err) {
        console.error('Failed to load products', err);
      }
    };
    load();
  }, [category, sortIndex, page]);

  const totalPages = Math.ceil(totalCount / LIMIT);

  return (
    <div className='shopcategory'>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing {Math.min((page - 1) * LIMIT + 1, totalCount)}–{Math.min(page * LIMIT, totalCount)}</span> of {totalCount} products
        </p>
        <div className='shopcategory-sort'>
          <label>Sort by:</label>
          <select value={sortIndex} onChange={(e) => setSortIndex(Number(e.target.value))}>
            {SORT_OPTIONS.map((opt, i) => (
              <option key={i} value={i}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {loadingProducts ? (
        <p className='shopcategory-loading'>Loading...</p>
      ) : products.length === 0 ? (
        <p className='shopcategory-loading'>No products found.</p>
      ) : (
        <div className='shopcategory-products'>
          {products.map((item) => (
            <Link key={item._id} to={`/product/${item._id}`} style={{ textDecoration: 'none' }}>
              <Item
                id={item._id}
                name={item.name}
                image={item.images?.[0] || ''}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </Link>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className='shopcategory-pagination'>
          <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
            &lsaquo; Prev
          </button>
          <span>Page {page} of {totalPages}</span>
          <button disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>
            Next &rsaquo;
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
