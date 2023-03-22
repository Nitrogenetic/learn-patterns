// ----- Способ 1 ----- //

// Нам нужны его методы
export class SuccessMessage {
  success(message: string) {
    console.log('success => ', message)
  }
}

// Тут мы используем методы, которые есть в другом классе
class Message extends SuccessMessage {
  sendSuccess(message: string) {
    this.success(message)
  }
}

const message = new Message()
message.sendSuccess('Получилось!')

// ----- Способ 2 ----- //

class ErrorMessage {
  error(message: string) {
    console.log('error => ', message)
  }
}
class InfoMessage {
  info(message: string) {
    console.log('info => ', message)
  }
}

class Messages {
  error = new ErrorMessage()
  info = new InfoMessage()

  sendError(message: string) {
    this.error.error(message)
  }
  sendInfo(message: string) {
    this.info.info(message)
  }
}

const messages = new Messages()
messages.sendError('Ошибка!')
messages.sendInfo('Инфо!')
