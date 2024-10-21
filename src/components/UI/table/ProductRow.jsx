import { Avatar } from '@mui/material';

const ProductRow = ({ product }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
      <Avatar src={product.photo} alt="Product" />
      <div style={{ marginLeft: '10px' }}>
        <div>{product.quantityText}</div>
        <div style={{ fontSize: '0.8em', color: '#666' }}>{product.name}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div>{product.date}</div>
        <div style={{ fontSize: '0.8em', color: '#666' }}>{product.time}</div>
      </div>
      <div>{product.quantity}</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div>{product.price}</div>
        <div style={{ color: 'red' }}>{product.discount}</div>
      </div>
      <div style={{ color: 'blue' }}>{product.currentPrice}</div>
    </div>
  );
};

export default ProductRow;
