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
    isEnd: false,
    passedInd: [0],
    descript: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non saepelaboriosam voluptate similique cum? Sapiente consectetur itaque minus quisquam,saepe in",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ". Corporis non saepelaboriosam voluptate similique cum? Sapiente consectetur itaque minus quisquam,saepe in. Natus possimus accusamus unde quis accusantium, similique ratione?",
      "Lorem ipsum dolor sit t. Corporis non saepelaboriosam voluptate similique cum? Sapiente consectetur itaque minus quisquam,saepe in. Natus possimus accusamus unde quis accusantium, similique ratione?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non saepelaboriosam voluptate similique cum? Sapiente consectetur itaque minus quisquam,saepe in. Natus possimus accusamus unde quis accusantium, similique ratione?",
    ],
  }),
  computed: {
    currentDescr() {
      return this.currentInd;
    },
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
      }
    },
    nextTap() {
      if (this.currentInd < this.tap.length - 1) {
        this.currentInd++;
        this.passedInd.push(this.currentInd);
      }
    },
    handlrTap(i) {
      this.currentInd = i;
      for (let g = 1; g <= i; g++) {
        this.passedInd.push(g);
      }
      this.passedInd = this.passedInd.filter((ind) => ind <= i);
    },
    end() {
      this.isEnd = true;
    },
    reset() {
      if (this.isEnd) {
        this.currentInd = 0;
        this.passedInd = [0];
        this.isEnd = false;
      }
    },
  },
};

Vue.createApp(app).mount("#app");
