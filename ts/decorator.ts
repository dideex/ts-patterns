class Computer {
  boot(): void {
    console.log('Coputer is booting')
  }

  shutDown(): void {
    console.log('Coputer is shutting down')
  }

  display(): void {
    console.log('Displaying content in one screen')
  }

  print(): void {
    console.log('No printer found')
  }

  renderVideo(): void {
    console.log('Cannot render video')
  }
}

class ComputerComponentDecorator extends Computer {
  constructor(private _computer: Computer) {
    super()
  }

  boot() {
    return this._computer.boot()
  }

  shutDown() {
    return this._computer.shutDown()
  }

  display() {
    return this._computer.display()
  }

  print() {
    return this._computer.print()
  }

  renderVideo() {
    return this._computer.renderVideo()
  }
}

class ServerComputer extends Computer {
  boot() {
    console.log('Booting server...')
  }

  shutDown() {
    console.log('Server is shutting down')
  }
}

class ComputerWithPrinterDecorator extends ComputerComponentDecorator {
  constructor(computer: Computer) {
    super(computer)
  }

  print(): void {
    console.log('Printing...')
  }
}

class ComputerWithDedicatedGPU extends ComputerComponentDecorator {
  constructor(computer: Computer) {
    super(computer)
  }

  renderVideo(): void {
    console.log('Rendering video')
  }
}

const server = new ServerComputer()
const serverWithPrinter = new ComputerWithPrinterDecorator(server)
const serverWithPrinterAndGPU = new ComputerWithDedicatedGPU(serverWithPrinter)

serverWithPrinterAndGPU.print()
serverWithPrinterAndGPU.renderVideo()
serverWithPrinterAndGPU.shutDown()
