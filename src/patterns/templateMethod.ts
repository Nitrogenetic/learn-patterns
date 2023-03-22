export class Builder {
  [x: string]: any

  build(): void {
    this.addEngine()
    this.addElectronic()
  }
}

class TeslaBuilder extends Builder {
  addEngine() {
    console.log('Add electronic engine')
  }
  addElectronic() {
    console.log('Add special electronic')
  }
}

class BmwBuilder extends Builder {
  addEngine() {
    console.log('Add BMW engine')
  }
  addElectronic() {
    console.log('Add electronic')
  }
}

const tesla = new TeslaBuilder()
const bmw = new BmwBuilder()

tesla.build()
bmw.build()
