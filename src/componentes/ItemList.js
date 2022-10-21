import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {
    return (
        <div className="contenedor-productos">
            {items.map((prod)=>{
                return <Item prod = {prod} key = {prod.codigo} />
            }
            )}
        </div>
    )
}

export default ItemList;