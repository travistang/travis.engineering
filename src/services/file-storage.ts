export default class FileStorage {
  private readonly root: string;
  constructor(root: string) {
    if (!root.startsWith("/")) {
      this.root = `/${root}`;
    } else {
      this.root = root;
    }
  }

  async listDir() {
    return [];
  }
}
