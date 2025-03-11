const app = {
  data: () => ({
    tap: [
      {
        key: 1,
        value: "Этап 1",
      },
      {
        key: 2,
        value: "Этап 2",
      },
      {
        key: 3,
        value: "Этап 3",
      },
      {
        key: 4,
        value: "Этап 5",
      },
      {
        key: 5,
        value: "Этап 5",
      },
    ],
    currentInd: 0,
    passedInd: [0],
  }),
  computed: {
    isBackDisabled() {
      return this.currentInd === 0;
    },
    isNextDisabled() {
      return this.currentInd >= this.tap.length - 1;
    },
  },
  methods: {
    prevTap() {
      if (this.currentInd > 0) {
        this.currentInd--;
        this.passedInd.pop();
        console.log("dfgdf");
      }
    },
    nextTap() {
      if (this.currentInd < this.tap.length - 1) {
        this.currentInd++;
        this.passedInd.push(this.currentInd);
        console.log("df");
      }
    },
  },
};

Vue.createApp(app).mount("#app");
