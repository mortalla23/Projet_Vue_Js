<template>
  <div class="menu-item">
    <img class="menu-item__image" :src="image.source" :alt="image.alt"/>
    <div class="menu-item__details">
      <h4>{{ label }}</h4>
      <p class="menu-item__price">
        Prix: {{ generatedPrice }} €
        <span v-if="onSale" class="on-sale">(10% de réduction !)</span>
      </p>
      <p v-if="inStock" class="menu-item__stock">En stock</p>
      <p v-else class="menu-item__out-stock">En rupture de stock</p>
      <div class="menu-item__actions">
        <input v-model.number="localQuantity" id="add-quantity" type="number" class="quantity-input" min="1"/>
        <BaseButton @click="updateShop(localQuantity)" class="add-to-cart-btn">Ajouter au panier</BaseButton>
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
      required: true
    },
    inStock: {
      type: Boolean,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      localQuantity: this.quantity,
      onSale: false
    }
  },
  methods: {
    updateShop(quantity) {
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
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.2s ease-in-out;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  &__image {
    max-width: 150px;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    margin-right: 20px;
  }

  &__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 300px;
    width: 100%;
  }

  h4 {
    margin: 0;
    font-size: 1.5em;
    font-weight: bold;
    color: #333;
  }

  &__price {
    margin: 10px 0;
    font-size: 1.2em;
    color: #333;

    .on-sale {
      color: #e74c3c;
      font-size: 0.9em;
      font-weight: bold;
    }
  }

  &__stock {
    color: #28a745;
    font-weight: bold;
  }

  &__out-stock {
    color: #e74c3c;
    font-weight: bold;
  }

  &__actions {
    display: flex;
    align-items: center;
    margin-top: 10px;

    .quantity-input {
      width: 60px;
      padding: 5px;
      margin-right: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      text-align: center;
    }
  }
}

/* Style pour les petits écrans */
@media (max-width: 768px) {
  .menu-item {
    flex-direction: column;
    text-align: center;
  }

  .menu-item__image {
    margin: 0 0 15px 0;
    max-width: 100px;
  }

  .menu-item__details {
    align-items: center;
    max-width: 100%;
  }

  .menu-item__actions {
    flex-direction: column;
    align-items: center;
  }

  .quantity-input {
    margin-bottom: 10px;
    width: 100px;
  }

  .add-to-cart-btn {
    width: 100%;
  }
}
</style>
