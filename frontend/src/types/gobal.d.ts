export {};

declare global {
  type ResponseData = {
    id: number;
    attributes: any;
  };
  interface Home_Page {
    sections: Home_Section[];
  }
  interface Home_Section {}
}
