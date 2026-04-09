// import React, { useState } from 'react';
// import { View, Image } from 'react-native';
// import AppText from '../../atoms/AppText/AppText';
// import Price from '../../atoms/Price/Price';

// import { styles } from './styles';
// import AddToCartBar from '../../molecules/AddToCart/AddToCartBar';

// export type PLPCardProps = {
//   name: string;
//   image: string;
//   price: number;
// };

// export default function PLPCard({ name, image, price }: PLPCardProps) {
//   const [qty, setQty] = useState(0);

//   return (
//     <View style={styles.card}>
//       <View style={styles.imageWrap}>
//         <Image source={{ uri: image }} style={styles.img} />
//       </View>

//       <View style={styles.nameContainer}>
//         <AppText numberOfLines={2} style={styles.name}>
//           {name}
//         </AppText>

//         <View style={styles.row}>
//           <Price value={price} />
//           <AddToCartBar
//             qty={qty}
//             onAdd={() => setQty(1)}
//             onInc={() => setQty(q => q + 1)}
//             onDec={() => setQty(q => Math.max(0, q - 1))}
//           />
//         </View>
//       </View>
//     </View>
//   );
// }

// components/organisms/PLPCard/PLPCard.tsx
// components/organisms/PLPCard/PLPCard.tsx
import React from 'react';
import { View, Image } from 'react-native';
import AppText from '../../atoms/AppText/AppText';
import Price from '../../atoms/Price/Price';
import { styles } from './styles';
import AddToCartBar from '../../molecules/AddToCart/AddToCartBar';
import { Product } from '../../../store/products/types';

export type PLPCardProps = {
  product: Product;
  quantity: number;
  onAdd: (product: Product) => void;
  onInc: (productId: string) => void;
  onDec: (productId: string) => void;
};

export default function PLPCard({
  product,
  quantity,
  onAdd,
  onInc,
  onDec,
}: PLPCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrap}>
        <Image source={{ uri: product.image_url }} style={styles.img} />
      </View>

      <View style={styles.nameContainer}>
        <AppText numberOfLines={2} style={styles.name}>
          {product.product_name}
        </AppText>

        <View style={styles.row}>
          <Price value={product.Price} />
          <AddToCartBar
            qty={quantity}
            onAdd={() => onAdd(product)}
            onInc={() => onInc(product.id)}
            onDec={() => onDec(product.id)}
          />
        </View>
      </View>
    </View>
  );
}
