let app = new Vue({
  el: "#app",
  data: {
    validateStatus: {
      nameStatus: false,
      noteStatus: false,
    },
    items: [{ id: 1, name: "Min", note: "Import" }],
    userData: { name: "", note: "" },
  },
  methods: {
    create() {
      this.validateCheck();

      if (!this.validateStatus.nameStatus && !this.validateStatus.noteStatus) {
        this.items.push({
          id: this.items.length + 1,
          name: this.userData.name,
          note: this.userData.note,
        });

        this.clear();
      }
    },
    validateCheck() {
      this.validateStatus.nameStatus = this.userData.name === "";
      this.validateStatus.noteStatus = this.userData.note === "";

      if (this.validateStatus.nameStatus || this.validateStatus.noteStatus) {
        return;
      }
    },

    clear() {
      this.userData.name = "";
      this.userData.note = "";
    },
  },
});
