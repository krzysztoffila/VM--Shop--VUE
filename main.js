const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "Fancy Socks with Vue logo",
      image: "./assets/images/socks_green.jpg",
      inventory: 100,
      onSale: false,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green" },
        { id: 2235, color: "blue" },
      ],
    };
  },
});
