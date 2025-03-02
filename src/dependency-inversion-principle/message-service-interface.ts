/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * Create an interface IMessageService that defines the contract for sending messages.
 * Create concrete classes (EmailService, SmsService) that implement IMessageService.
 * Create NotificationService, which depends on IMessageService.
 * 
 * @see {@link https://en.wikipedia.org/wiki/Dependency_inversion_principle}
*/

// This interface ensures that any message service implements the sendMessage method
interface IMessageService {
  sendMessage(message: string, recipient: string): void;
}

// These classes provide the specific implementation for sending emails and SMS
class EmailService implements IMessageService {
  sendMessage(message: string, recipient: string): void {
    console.log(`Sending email to ${recipient}: ${message}`);
  }
}

class SmsService implements IMessageService {
  sendMessage(message: string, recipient: string): void {
    console.log(`Sending SMS to ${recipient}: ${message}`);
  }
}

// NotificationService is decoupled from the specific message service
// It works with any class that implements IMessageService
class NotificationService {
  private messageService: IMessageService;

  constructor(messageService: IMessageService) {
    this.messageService = messageService;
  }

  notifyUser(message: string, recipient: string): void {
    this.messageService.sendMessage(message, recipient);
  }
}
