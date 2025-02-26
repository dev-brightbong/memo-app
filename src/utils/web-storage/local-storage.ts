/**
 * @description 로컬스토리지 클래스 입니다. 스토리지 생성 시 key값을 넣어 확장해 사용할 수 있습니다.
 */
export class WebLocalStorage<TData> {
  key: string = "";
  storage: Storage | null =
    typeof window !== "undefined" ? window.localStorage : null;

  constructor(key: string) {
    this.key = key;
  }

  get(): TData | null {
    if (this.storage) {
      const item = this.storage.getItem(this.key);
      if (item === null) return null;
      return JSON.parse(item);
    }
    return null;
  }

  set(value: TData): void {
    if (this.storage) {
      this.storage.setItem(this.key, JSON.stringify(value));
    }
  }

  remove(): void {
    if (this.storage) {
      this.storage.removeItem(this.key);
    }
  }
}
