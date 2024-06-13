<template>
  <div class="menu-item">
    <img class="menu-item__image" :src="image.source" :alt="image.alt"/>
    <div class="menu-item__details">
      <h4>{{ label }}</h4>
      <p>
				Prix: {{ generatedPrice }}
				<span v-if="onSale">(10% de réduction !)</span>
			</p>
      <p v-if="inStock">En stock</p>
      <p v-else>En rupture de stock</p>
      <div>
        <label for="add-quantity">Quantité :{{ localQuantity }}</label>
        <input v-model.number="localQuantity" id="add-quantity" type="number" />
        <BaseButton @click="updateShop(localQuantity)">Ajouter au panier</BaseButton>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from "./BaseButton.vue"
export default {
  
  name: 'MenuItem',
  components: {
    BaseButton
  },
  props: {
 
  image: {
    type: Object,
    required:true

  },
  inStock: {
    type:Boolean,
    required:true

  },
  label: {
    type:String,
    required:true

  },
  quantity: {
    type:Number,
    default:1
    
  },
  price: {
    type:Number,
    required:true
  }
},
  data() {
    return {
      localQuantity: this.quantity,
      onSale: false
    }
  },
  methods: {
  
    updateShop(quantity){
      this.$emit("add-items-to-cart", quantity)
    }


  },
  computed: {
    generatedPrice() {
      if (this.onSale) {
        return (this.price * 0.9).toFixed(2)
      } else {
        return this.price
      }
    }
  },
  beforeMount() {
    const today = new Date().getDate()

    if (today % 2 === 0) {
      this.onSale = true
    }
  }
}
</script>
<style lang="scss" scoped>
.menu-item {
  display: flex;
  justify-content: center; /* Centrer horizontalement */
  align-items: center; /* Centrer verticalement */
  width: 100%;
  margin-bottom: 30px;


&__image {
  max-width: 150px; /* Ajustez cette valeur selon vos besoins */
  height: auto;
  object-fit: cover;
  margin-right: 20px; /* Ajouter un espace entre l'image et le texte */
}

&__details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 300px;


 h4 {
  margin: 0;
}

 div {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

 label {
  margin-right: 10px;
}
}
}
</style>
