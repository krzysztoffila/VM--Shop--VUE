app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img :class="{'out-of-stock-img': !inStock}" :src="image" alt="socks image">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p> {{ onSale }}</p>
          <p v-if="inStock > 10">In Stock</p>
          <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out!</p>
          <p v-else>Out of Stock</p>
          <p> Shipping: {{ shipping }}</p>
          <p>{{ description }}</p>
          <product-details :details="details"></product-details>
          <div class="color-circle" :style="{ backgroundColor: variant.color }" v-for="(variant, index) in variants"
            :key="variant.id" @mouseover="updateVariant(index)">
          </div>
          <button class="button" :disabled="!inStock" :class="{ disabledButton: !inStock }" @click="addToCart">Add to
            Cart</button>
        </div>
      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
    </div>`,
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      description: "Fancy Socks with Vue logo",
      selectedVariant: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      reviews: [],
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    addReview(review) {
      this.reviews.push(review);
    },
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    onSale() {
      return `${this.brand} ${this.product} is on sale`;
    },
    shipping() {
      console.log("Premium:", this.premium);
      return this.premium ? "Free" : "2.99$";
    },
  },
});
