import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
      id:'p1',
      price: 60,
      title: 'Francis Ittykora',
      description:'Francis Itty Cora is a bestselling mystery novel in Malayalam by author T. D. Ramakrishnan.',
  },
  {
    id:'p2',
    price: 60,
    title: 'Agni Veena',
    description:'Kazi Nasrul Islam',
},
{
  id:'p3',
  price: 60,
  title: 'Animal Farm',
  description:'George Orwell',
},
{
  id:'p4',
  price: 60,
  title: 'Ben Hur',
  description:'Lewis Lawrence',
},
{
  id:'p5',
  price: 60,
  title: 'Anand Math',
  description:'Bankimchandra Chattopadhyay',
},
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
          key={product.id}
          id=  {product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
