interface IAttribute {
  name: string;
  phone: string;
}

export class PersonModel {
  public id: string;
  public attributes: IAttribute;

  constructor(person?: PersonModel) {
    const { id: name = '', attributes = { name: '', phone: '' } } =
      person || {};
    this.id = name;
    this.attributes = attributes;
  }
}

export class PersonInfoModel implements PersonModel {
  // public id: string = '';
  public id: string;
  public attributes: IAttribute;

  constructor(person?: PersonInfoModel) {
    const { id: name = '', attributes = { name: '', phone: '' } } =
      person || {};
    this.id = name;
    this.attributes = attributes;
  }
}

export class PersonCreateModel implements PersonModel {
  public id: string;
  public attributes: IAttribute;

  constructor(person?: PersonCreateModel) {
    const { id: name = '', attributes = { name: '', phone: '' } } =
      person || {};
    this.id = name;
    this.attributes = attributes;
  }
}

export class PersonEditModel implements PersonModel {
  public id: string;
  public attributes: IAttribute;

  constructor(person?: PersonEditModel) {
    const { id: name = '', attributes = { name: '', phone: '' } } =
      person || {};
    this.id = name;
    this.attributes = attributes;
  }
}
