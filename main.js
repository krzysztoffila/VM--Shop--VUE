const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      cart: 0,
      description: "Fancy Socks with Vue logo",
      image: "./assets/images/socks_green.jpg",
      inventory: 100,
      onSale: false,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
