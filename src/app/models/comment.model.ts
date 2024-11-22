export class Comment {
  id: number;
  comment: string;

  constructor(json: any = {}) {
    this.id = json.id || 0;
    this.comment = json.comment || '';
  }
}
